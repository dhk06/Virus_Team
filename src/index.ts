import './index.css'
import { People } from './types'

const resultDiv = document.querySelector<HTMLDivElement>('#resultDiv');
let movingStart:boolean = true;

let peopleX = 37.32191655510652;
let peopleY = 126.83084311183287;

var container = document.getElementById('map')

var options = { // 지도 기본 설정
    center: new kakao.maps.LatLng(37.32191655510652, 126.83084311183287), //지도의 중심좌표
    minLevel: 2,
    maxLevel: 6,  
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

const NumOfPeople = 500; //사람 수
const P_show = document.querySelector<HTMLDivElement>('#P_show');

P_show.innerHTML = `${NumOfPeople}`;

let peoples: People[] = [];
let currentPeople: kakao.maps.Circle = null;
let currentPosition = null;

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    // 클릭한 위도, 경도 정보 가져오기
    var latlng = mouseEvent.latLng;
    console.log(`클릭 좌표: ${latlng}`)
    
    var message = '클릭한 위치의 좌표 (위도,경도) : ' + latlng.getLat() + ', ' + latlng.getLng();

    resultDiv.innerHTML = message;
});

for(let i = 0; i < NumOfPeople; i++){
    displayPeo();
}

function displayPeo(){ //Peoples 배열 정보

    let randY:number = 37.33779306610436 - (Math.random() * 0.04);
    let randX:number = 126.76704681759245 + (Math.random() * 0.1);

    const circle = new kakao.maps.Circle({
        center : new kakao.maps.LatLng(randY, randX), // 원의 중심좌표
        radius: 5, // 미터 단위의 원의 반지름
        strokeOpacity: 0, // 선의 불투명도 1에서 0 사이의 값이며 0에 가까울수록 투명
        fillColor: 'green', // 채우기 색깔
        fillOpacity: 1  // 채우기 불투명도
    });
    
    kakao.maps.event.addListener(circle, 'click', function(mouseEvent){
        console.log(circle);
        currentPeople = circle;
        currentPosition = currentPeople.getPosition();
    });
    
    circle.setMap(map);
    peoples.push({
        position: {
            x: randX, y: randY,
        },
        velocity: {
            x: 0, y: 0
        },
        circle
    });
}

var ANSANrange = [ // 안산시 범위 다각형
    new kakao.maps.LatLng(37.34536601340117, 126.7833366872930),
    new kakao.maps.LatLng(37.35239803210191, 126.8064317710519),
    new kakao.maps.LatLng(37.34918610614613, 126.8269359139766),
    new kakao.maps.LatLng(37.33741173896692, 126.8628928729008),
    new kakao.maps.LatLng(37.33331815195747, 126.8766215596434),
    new kakao.maps.LatLng(37.29995866705562, 126.8917447303047),
    new kakao.maps.LatLng(37.28129194168943, 126.8600178364447),
    new kakao.maps.LatLng(37.28130541929755, 126.8354696387777),
    new kakao.maps.LatLng(37.29512443086514, 126.7833116904543),
    new kakao.maps.LatLng(37.32416999356896, 126.7671055736911),
];

// 지도에 표시할 다각형을 생성합니다
var polygon = new kakao.maps.Polygon({
    path:ANSANrange,
    strokeWeight: 3,
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    fillOpacity: 0
});

// 안산 범위 다각형 표시
polygon.setMap(map);

const mylocate = document.querySelector<HTMLDivElement>('.mylocate');
const Capslock_alert = document.querySelector<HTMLButtonElement>('.Capslock_alert');

let moveOpts = {
    key: '',
    d: null
}

let panto = false;
var moveLatLng = new kakao.maps.LatLng(peopleX, peopleY);

window.onkeydown = (evt) =>{
    if(evt.getModifierState("CapsLock") == true){
        Capslock_alert.style.filter = 'opacity(100%)';
    }else{
        Capslock_alert.style.filter = 'opacity(0%)';
        if(['w', 'a', 's', 'd'].includes(evt.key) && currentPeople != null){
            currentPosition = currentPeople.getPosition();
            if((Math.abs(currentPosition.Ma - map.getCenter().getLat()) > 0.00005 || Math.abs(currentPosition.La - map.getCenter().getLng()) > 0.00005) && panto == false){
                console.log("panto!");
                map.panTo(currentPosition);
                moveOpts.key = evt.key;
                moveOpts.d = new Date();
                panto = true;
            }else{
                moveOpts.key = evt.key;
            }
        }else if(evt.keyCode == 27){
            console.log('ESC');
            moveOpts.key = ''; 
            currentPeople = null;
            currentPosition = null;
        }
    }
}

const timeset = document.querySelector<HTMLDivElement>('#timeset');

window.onkeyup = (e) =>{
    if(e.keyCode == 32){
        console.log('spacebar')
        if(timeset.innerHTML == 'II'){
            timeset.innerHTML = '▶';
            timeset.style.lineHeight = 'normal';
            movingStart = false;
        }else{
            timeset.innerHTML = 'II';
            timeset.style.lineHeight = '25px';
            movingStart = true;
        }
    }else if(e.key == moveOpts.key){
        console.log('check')
        moveOpts.key = '';
    }
    
}

const MOVE_PARAMS = {
    'w': {
        vx: 0.00005,
        vy: 0,
    },
    's': {
        vx: -0.00005,
        vy: 0,
    },
    'a': {
        vx: 0,
        vy: -0.00005,
    },
    'd': {
        vx: 0,
        vy: 0.00005,
    }
}
let setPeople = null;
let setPeoplePosition = null;

setInterval(() => { // 플레이 w,a,s,d
    const p = MOVE_PARAMS[moveOpts.key];
    if(p != null && currentPeople != null){
        if(+moveOpts.d + 500 < +new Date()){
            currentPosition.La += p.vy;
            currentPosition.Ma += p.vx;
            currentPeople.setPosition(currentPosition);
            map.setCenter(currentPosition);
        }
    }
}, 50);

setInterval(() => {
    for(let i = 0; i < NumOfPeople; i++){
        const people = peoples[i];
        if(movingStart == true){
            if(currentPeople == people.circle){
                people.position.x = currentPosition.La;
                people.position.y = currentPosition.Ma;
                continue;
            }
    
            const vel = peoples[i].velocity;
            const rand = Math.random();
            
            if(rand < 0.25){
                vel.x += 0.000002;
                velCheck(vel.x, vel.y);
            } else if(rand < 0.5){
                vel.x -= 0.000002;
                velCheck(vel.x, vel.y);
            } else if(rand < 0.75){
                vel.y += 0.000002;
                velCheck(vel.x, vel.y);
            } else{
                vel.y -= 0.000002;
                velCheck(vel.x, vel.y);
            }
            
    
            people.position.x += vel.x;
            people.position.y += vel.y;
    
            setPeople = people.circle;
            setPeoplePosition = setPeople.getPosition();
            (setPeoplePosition as any).La = people.position.x;
            (setPeoplePosition as any).Ma = people.position.y;
            setPeople.setPosition(setPeoplePosition);
        }
    }
}, 50);

function velCheck(velx, vely) {
    if(velx >= 0.000004){
        velx = 0.000004;
    }else if(velx <= -0.000004){
        velx = -0.000004;
    }else if(vely >= 0.000004){
        vely = 0.000004;
    }else if(vely <= -0.000004){
        vely = -0.000004;
    }
}

//움직임 범위 제한
setInterval(() => {
    for(let i = 0; i < NumOfPeople; i++){
        const people = peoples[i];
        if(people.position.y > 37.33779306610436){
            people.velocity.y *= -1;
        }else if(people.position.y < 37.33779306610436 - 0.04){
            people.velocity.y *= -1;
        }
        if(people.position.x < 126.76704681759245){
            people.velocity.x *= -1;
        }else if(people.position.x > 126.76704681759245 + 0.1){
            people.velocity.x *= -1;
        }
    }
}, 50);


setInterval(() => { // 플레이어 위치 표시
    if(moveOpts.key == ''){
        mylocate.style.filter = 'opacity(0%) drop-shadow(0 0 3px black)';
        panto = false;
    } else {
        mylocate.style.filter = 'opacity(100%) drop-shadow(0 0 3px black)';
    }
}, 50)



// 사이드 메인 메뉴 애니메이션 실행
const mainMenu = document.querySelector<HTMLDivElement>('.mainMenu');
const mainMenu_contents = document.querySelector<HTMLDivElement>('#mainMenu_contents');
let mainMenu_click:boolean = false;

mainMenu.addEventListener('click', function(){
    if(mainMenu_click == false){
        mainMenu_contents.style.height = '220px';
        mainMenu_click = true;
    }else{
        mainMenu_contents.style.height = '50px';
        mainMenu_click = false;
    }
    console.log(mainMenu_click)
    this.classList.toggle('active');
});





/*      y                   x
new kakao.maps.LatLng(37.34536601340117, 126.7833366872930),
new kakao.maps.LatLng(37.35239803210191, 126.8064317710519),v1
new kakao.maps.LatLng(37.34918610614613, 126.8269359139766),v2
new kakao.maps.LatLng(37.33741173896692, 126.8628928729008),v3
new kakao.maps.LatLng(37.33331815195747, 126.8766215596434),v4
new kakao.maps.LatLng(37.29995866705562, 126.8917447303047),v5
new kakao.maps.LatLng(37.28129194168943, 126.8600178364447),v6
new kakao.maps.LatLng(37.28130541929755, 126.8354696387777),v7
new kakao.maps.LatLng(37.29512443086514, 126.7833116904543),v8
new kakao.maps.LatLng(37.32416999356896, 126.7671055736911),v9

                x                y
m_V1 = (0.0230950837589, 0.00703201870074)
m_V2 = (0.0205041429247, -0.00321192595578)
m_V3 = (0.0359569589242, -0.01177436717921)
m_V4 = (0.0137286867426, -0.00409358700945)
m_V5 = (0.0151231706613, -0.03335948490185)
m_V6 = (-0.03172689386, -0.01866672536619)
m_V7 = (-0.024548197667, 0.00001347760812)
m_V8 = (-0.0521579483234, 0.01381901156759)
m_V9 = (-0.0162061167632, 0.02904556270382)
*/