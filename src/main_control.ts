import { MOVE_PARAMS, NumOfPeople, timeset, pol_Isolation, virus_infection, pol_mask } from './constants'
import { Person } from './person'
import { Area } from './Area'
import { moveOpts, peoples, areas, variable } from './variable'
import { numPshow } from './output_nOp'
import { fun } from './infec_range';
import { setting, areaData } from './main';

let currentPeople: Person = null;
// let AreaVariable: Area = null;
// let setPeople = null;
// let setPeoplePosition = null;
// let infec_peo = false;
let map: kakao.maps.Map = null;

export function init(_map: kakao.maps.Map){
    map = _map
    console.log(setting.hospitalSystem)
    const Pcheck = () =>{
        if(NumOfPeople.Infectious == 0){
            return NumOfPeople.wholePer;
        }else{
            return NumOfPeople.wholePer + NumOfPeople.Infectious
        }
    }
    
    for(let i = 0; i < Pcheck(); i++){
        const person = new Person(map)
        peoples.push(person)
        kakao.maps.event.addListener(person.circle, 'click', function(mouseEvent){
            currentPeople = person;
        });
    }
    
    for(let i = 0; i < areaData.length; i++){
        const areaplace = new Area(map, i)
        areas.push(areaplace)
    }
    Area.render()

    for(let i = 0; i < peoples.length; i++){
        const people = peoples[i];
        people.findmove();
        if(setting.hospitalSystem){
            people.checkedInfection();
            console.log('병원 활성화')
        }
    }


    for(let i = 0; i < NumOfPeople.Infectious; i++){
        const people = peoples[i]
        people.changeColor()
    }

    numPshow();
    
    window.onkeyup = (e: { keyCode: number; }) =>{
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
        }
    }

    // step();

    virus_infection.addEventListener('click', function(){
        if(currentPeople != null && currentPeople.color == 'green'){
            console.log('change!')
            currentPeople.changeColor();
            NumOfPeople.Infectious++;
            NumOfPeople.wholePer--;
        }else if(currentPeople == null){
            console.log('currentPeople is null')
        }
    });

    pol_mask.addEventListener('click', function(){
        for(let i = 0; i < peoples.length; i++){
            const people = peoples[i];
            people.WearAMast_toggle();
        }
    })

    // pol_Isolation.addEventListener('click', function(){
    //     for(let i = 0; i < peoples.length; i++){
    //         const people = peoples[i];
    //         people.hospital_toggle();
    //     }
    //     console.log('hospital');
    // })
}

export function move2ClickedPlace_before(arrName: number, arriveLocation: kakao.maps.LatLng){
    for(let i = 0; i < peoples.length; i++){
        const people = peoples[i];
        if(people.per_click){
            people.move2ClickedPlace(arrName, arriveLocation);
            break;
        }
    }
}

// function step(){
//     // 플레이 w,a,s,d
//     // const p = MOVE_PARAMS[moveOpts.key];
//     // if(p != null && currentPeople != null){
//     //     if(+moveOpts.d + 500 < +new Date()){
//     //         currentPeople.position.x += p.vy;
//     //         currentPeople.position.y += p.vx;

//     //         const currentPosition = new kakao.maps.LatLng(currentPeople.position.y, currentPeople.position.x)
//     //         currentPeople.circle.setPosition(currentPosition);
//     //         map.setCenter(currentPosition);
//     //     }
//     // }
    
    
//     requestAnimationFrame(step)
// }