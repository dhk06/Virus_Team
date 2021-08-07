import { mylocate } from './constants'
import { moveOpts, variable } from './variable'

export function init(){
    setInterval(() => { // 플레이어 위치 표시
        if(moveOpts.key == ''){
            mylocate.style.filter = 'opacity(0%) drop-shadow(0 0 3px black)';
            variable.panto = false;
        } else {
            mylocate.style.filter = 'opacity(100%) drop-shadow(0 0 3px black)';
        }
    }, 50)
}