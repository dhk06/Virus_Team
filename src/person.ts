import { People } from './types'
import { ANSANrange, ANSANvector } from './constants'
import { variable } from './variable'


export class Person implements People {
    circle: kakao.maps.Circle;
    position: People["position"];
    velocity: People["velocity"];
    color: People["color"];
    infection: People["infection"];
    die : People["die"];
    fatalityRate: People['fatalityRate'];


    constructor(map: kakao.maps.Map){

        let randY:number = 37.33779306610436 - (Math.random() * 0.04);
        let randX:number = 126.78069681759245 + (Math.random() * 0.08);

        this.circle = new kakao.maps.Circle({
            center : new kakao.maps.LatLng(randY, randX), // 원의 중심좌표
            radius: 5, // 미터 단위의 원의 반지름
            strokeOpacity: 0, // 선의 불투명도 1에서 0 사이의 값이며 0에 가까울수록 투명
            fillColor: 'green', // 채우기 색깔
            fillOpacity: 1  // 채우기 불투명도
        });
        
        this.circle.setMap(map);

        this.position = { x: randX, y: randY };
        this.velocity = { x: 0, y: 0 };
        this.color = 'green';
        this.infection = false;
        this.fatalityRate = 0;
        this.die = false;
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
}