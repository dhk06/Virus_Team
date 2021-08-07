import { People } from './types'
import { ANSANrange, ANSANvector } from './constants'
import { variable } from './variable'
import { pointData, lineData } from './roadPoint'


export class Person implements People {
    circle: kakao.maps.Circle;
    position: People["position"];
    velocity: People["velocity"];
    color: People["color"];
    infection: People["infection"];
    die: People["die"];
    fatalityRate: People['fatalityRate'];
    locNum: People['locNum'];
    
    constructor(map: kakao.maps.Map){
        let loc:number = null;
        let randLocation:kakao.maps.LatLng = null;
        loc = Math.floor(Math.random() * pointData.length);
        randLocation = pointData[loc].latlng;

        this.circle = new kakao.maps.Circle({
            center : randLocation, // 원의 중심좌표
            radius: 5, // 미터 단위의 원의 반지름
            strokeOpacity: 0, // 선의 불투명도 1에서 0 사이의 값이며 0에 가까울수록 투명
            fillColor: 'green', // 채우기 색깔
            fillOpacity: 1  // 채우기 불투명도
        });
        
        this.circle.setMap(map);

        this.position = { x: randLocation.getLng(), y: randLocation.getLat() };
        this.velocity = { x: 0, y: 0 };
        this.color = 'green';
        this.infection = false;
        this.fatalityRate = 0;
        this.die = false;
        this.locNum = loc;
    }

    changeColor(){
        if(this.color == 'green'){
            this.circle.setOptions({ fillColor: 'red' })
            this.color = 'red';
            this.infection = true;
        }
    }

    death(){
        this.circle.setOptions({ fillColor: 'gray' })
        this.color = 'gray';
        this.die = true;
    }

    randVel(){
        const rand = Math.random();
        
        if(rand < 0.25){
            this.velocity.x += 0.000002;
        } else if(rand < 0.5){
            this.velocity.x -= 0.000002;
        } else if(rand < 0.75){
            this.velocity.y += 0.000002;
        } else{
            this.velocity.y -= 0.000002;
        }
    }

    velCheck() {
        if(this.velocity.x >= variable.velRange){
            this.velocity.x = variable.velRange;
        }else if(this.velocity.x <= -variable.velRange){
            this.velocity.x = -variable.velRange;
        }else if(this.velocity.y >= variable.velRange){
            this.velocity.y = variable.velRange;
        }else if(this.velocity.y <= -variable.velRange){
            this.velocity.y = -variable.velRange;
        }
    }

    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    limitRange(){
        for(let j = 0; j < ANSANvector.length; j++){
            const ansan = ANSANrange[j];
            const vec = ANSANvector[j];

            let v2x = this.position.x - ansan.getLng();
            let v2y = this.position.y - ansan.getLat();

            let result = vec.x * v2y - vec.y * v2x;

            if(result >= 0){
                this.velocity.x *= -1;
                this.velocity.y *= -1;
                break;
            }
        }
    }

    newMoving(){
        let lineNum:number;
        let nexNum:number = null;
        let locNum:number = this.locNum;
        const moving = (speed:number, lineNum:number, from:kakao.maps.LatLng) => {
            const followRoad = () =>{
                let index = 0;
                let i = 0;
                let n:1|-1 = null;
                const fx = from.getLat();
                const fy = from.getLng();
                const fl_x = lineData[lineNum].linePath[i].getLat();
                const fl_y = lineData[lineNum].linePath[i].getLng();
                const result = (((fx - fl_x) ** 2 + (fy - fl_y) ** 2) ** 0.5)
                if(result <= 0.0002){
                    i = 0
                    n = 1;
                }else{
                    i = lineData[lineNum].linePath.length - 1;
                    n = -1;
                }
                const moving1road = (time:number) => {
                    const prex = lineData[lineNum].linePath[i].getLng();
                    const prey = lineData[lineNum].linePath[i].getLat();
                    const nexx = lineData[lineNum].linePath[i + n].getLng();
                    const nexy = lineData[lineNum].linePath[i + n].getLat();
                    const dist = ((nexx - prex) ** 2 + (nexy - prey) ** 2) ** 0.5 * speed;
                    const X = (index * nexx + (dist - index) * prex) / dist;
                    const Y = (index * nexy + (dist - index) * prey) / dist;
                    const position = new kakao.maps.LatLng(Y, X);
                    this.position.x = position.getLng();
                    this.position.y = position.getLat();
                    index++;
                    
                    if(index >= dist){
                        index = 0;
                        i++;
                        if(i >= lineData[lineNum].linePath.length - 1){
                            findmove();
                            return;
                        }
                    }
                    requestAnimationFrame(moving1road);
                };
                moving1road(0);
            }
            followRoad();
        }
        const findmove = () =>{
            const from = pointData[locNum]; // start point
            const lines = from.lines.concat();
            for(let i = 0; i < lines.length; i++){
                const temp = Math.floor(Math.random() * (lines.length - i)) + i;
                const val = lines[i];
                lines[i] = lines[temp];
                lines[temp] = val;
            }

            for(let i of lines){
                lineNum = i;
                const picks = lineData[lineNum].points.filter(v => v !== locNum); // 시작점 반대 points 
                if(!picks){
                    continue;
                }
                nexNum = picks[Math.floor(picks.length * Math.random())]; // 도착할 point number
                const to = pointData[nexNum]; // arrive point
                const speed = 100000;
                moving(speed, lineNum, from.latlng);
                locNum = Number(nexNum);
                break;  
            }
        }
        findmove();
    }
}