import { MOVE_PARAMS, NumOfPeople, timeset, Capslock_alert, virus_infection, P_inf } from './constants'
import { Person } from './person'
import { moveOpts, peoples, variable } from './variable'
import { numPshow } from './사람수출력'

let currentPeople: Person = null;
let setPeople = null;
let setPeoplePosition = null;
let infec_peo = false;
let map: kakao.maps.Map = null;

export function init(_map: kakao.maps.Map){
    map = _map

    for(let i = 0; i < NumOfPeople.wholePer; i++){
        const person = new Person(map)
        peoples.push(person)
    
        kakao.maps.event.addListener(person.circle, 'click', function(mouseEvent){
            currentPeople = person;

            P_inf.style.display = 'block';
            P_inf.innerHTML = `x: ${peoples[i].position.x}<br>y: ${peoples[i].position.y}<br>infection: ${peoples[i].infection}`;
            P_inf.style.filter = 'opacity(100%)';
            P_inf.style.transition = 'all 0.3s';
            setTimeout(() => {
                P_inf.style.filter = 'opacity(0%)';
                setTimeout(()=>{
                    P_inf.style.display = 'none';
                    P_inf.style.transition = 'all 0s';
                }, 300)
            }, 1500);
        });
    }

    numPshow()

    window.onkeydown = (evt) =>{
        if(evt.getModifierState("CapsLock") == true){
            Capslock_alert.style.filter = 'opacity(100%)';
        }else{
            Capslock_alert.style.filter = 'opacity(0%)';
            if(['w', 'a', 's', 'd'].includes(evt.key) && currentPeople != null){
                const currentPosition = currentPeople.circle.getPosition();
                if((Math.abs(currentPeople.position.y - map.getCenter().getLat()) > 0.00005 || Math.abs(currentPeople.position.x - map.getCenter().getLng()) > 0.00005) && variable.panto == false){
                    console.log("panto!");
                    map.panTo(currentPosition);
                    moveOpts.key = evt.key;
                    moveOpts.d = new Date();
                    variable.panto = true;
                }else{
                    moveOpts.key = evt.key;
                }
            }else if(evt.keyCode == 27){
                console.log('ESC');
                moveOpts.key = ''; 
                currentPeople = null;
            }
        }
    }
    
    window.onkeyup = (e) =>{
        if(e.keyCode == 32){
            console.log('spacebar')
            if(timeset.innerHTML == 'II'){
                timeset.innerHTML = '▶';
                timeset.style.lineHeight = 'normal';
                variable.movingStart = false;
            }else{
                timeset.innerHTML = 'II';
                timeset.style.lineHeight = '25px';
                variable.movingStart = true;
            }
        }else if(e.key == moveOpts.key){
            moveOpts.key = '';
        }
    }

    requestAnimationFrame(step)

    virus_infection.addEventListener('click', function(){   
        if(currentPeople != null){
            infec_peo = true;
        }
    });
}

function step(){
    // 플레이 w,a,s,d
    const p = MOVE_PARAMS[moveOpts.key];
    if(p != null && currentPeople != null){
        if(+moveOpts.d + 500 < +new Date()){
            currentPeople.position.x += p.vy;
            currentPeople.position.y += p.vx;

            const currentPosition = new kakao.maps.LatLng(currentPeople.position.y, currentPeople.position.x)
            currentPeople.circle.setPosition(currentPosition);
            map.setCenter(currentPosition);
        }
    }

    for(let i = 0; i < peoples.length; i++){
        const people = peoples[i];
        if(variable.movingStart == true){
            if(currentPeople == people){
                if(infec_peo == true && people.color == 'green'){
                    people.changeColor();
                    NumOfPeople.Infectious++;
                    NumOfPeople.wholePer--;
                    numPshow()
                    infec_peo = false;
                }
                continue;
            }

            people.randVel()
            people.velCheck();
            people.move()
            people.limitRange();
    
            setPeople = people.circle;
            setPeoplePosition = setPeople.getPosition();
            (setPeoplePosition as any).La = people.position.x;
            (setPeoplePosition as any).Ma = people.position.y;
            setPeople.setPosition(setPeoplePosition);
        }
    }
    
    requestAnimationFrame(step)
}