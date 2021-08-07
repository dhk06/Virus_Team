import './index.css'
import { init as 지도설정 } from './setting_map'
import { init as 안산범위 } from './ansanRange'
import { init as html애니메이션 } from './side_menu'
import { init as 움직 } from './moving_people'
import { init as 감염범위 } from './infec_range'
import { init as timebox } from './timeBox'
import { init as playerLocation } from './player_location'
import { init as 시간가속 } from './time_ACC'
import { init as 막대 } from './barGraph'
import { init as 선 } from './lineGraph'
import { init as roadpoint } from './roadPoint'
import { init as 임시사람 } from './임시사람'

import { NumOfPeople } from './constants'

const world_name = document.querySelector('#world_name');

async function init(){
    
    let worldname = prompt("What's the name of this world?", 'meta_1');
    let np = Number(prompt(`How many people in ${worldname}`, '800'));
    NumOfPeople.wholePer = np;
    world_name.innerHTML = worldname;

    const { map } = 지도설정()
    안산범위(map)
    await roadpoint()
    html애니메이션()
    움직(map)
    임시사람(map)
    감염범위()
    timebox()
    playerLocation()
    시간가속()
    막대()
    선()
}

init()