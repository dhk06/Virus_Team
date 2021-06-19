import './index.css'
import { init as 지도설정 } from './지도기본설정'
import { init as 안산범위 } from './안산범위'
import { init as html애니메이션 } from './사이드메뉴'
import { init as 움직 } from './움직이는사람'
import { init as 감염범위 } from './감염범위'
import { init as timebox } from './타임박스'
import { init as playerLocation } from './플레이어위치'
import { init as 시간가속 } from './시간가속'
import { init as 막대 } from './barGraph'
import { init as 선 } from './lineGraph'

function init(){
    const { map } = 지도설정()
    안산범위(map)
    html애니메이션()
    움직(map)
    감염범위()
    timebox()
    playerLocation()
    시간가속()
    막대()
    선()
}

init()