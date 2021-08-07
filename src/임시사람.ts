class Heap<T>{
    private arr:{score:number, data:T}[] = [];
    constructor(){}
    private heapifyInc(num:number):boolean{
        if(num === 0) return true;
        const arr = this.arr;
        const pum = Math.floor(num / 2);
        const cur = arr[num];
        const nex = arr[pum];
        if(cur.score < nex.score){
            arr[num] = nex;
            arr[pum] = cur;
            return this.heapifyInc(pum);
        } else {
            return true;
        }
    }
    
    push(data:T, score:number){
        if(isNaN(score)) throw Error('score 숫자를 쓰세요');
        const num = this.arr.push({ data, score }) - 1;
        return this.heapifyInc(num);
    }
    
    private heapifyDec(num = 0):boolean{
        const n2 = (num + 1) * 2;
        const n1 = n2 - 1;
        const arr = this.arr;
        const cur = arr[num];
        const nex1 = arr[n1];
        const nex2 = arr[n2];
        if(nex2){
            let pick: number;
            if(nex2.score > nex1.score){
                pick = n1;
            } else {
                pick = n2;
            }
            const nex = arr[pick];
            if(nex.score < cur.score){
                arr[pick] = cur;
                arr[num] = nex;
                return this.heapifyDec(pick);
            }
            return true;
        } else if(nex1){
            if(nex1.score < cur.score){
                arr[n1] = cur;
                arr[num] = nex1;
            }
            return true;
        } else {
            return true;
        }
    }
    pop(){
        if(this.isEmpty()) return null;
        const arr = this.arr;
        const now = arr[0];
        const cur = arr.pop();
        if(arr.length !== 0) {
            arr[0] = cur;
            this.heapifyDec();
        }
        return now.data;
    }
    isEmpty(){
        if(this.arr.length === 0) return true;
        return false;
    }
}


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const moveStart = (circle:kakao.maps.Circle, startPoint = Math.floor(Math.random() * pointData.length)) => {
    //     const codes = findPath(startPoint);
    //     const way = codes[0];
    //     const END = way[way.length - 1];
    //     const history = codes[1];
    //     const Y:number = pointData[way[0]].latlng.getLat();
    //     const X:number = pointData[way[0]].latlng.getLng();
    //     const position = new kakao.maps.LatLng(Y, X);
    //     circle.setPosition(position)
    //     let from = pointData[way[0]];
    //     let to = pointData[way[1]];
    //     const speed = 100000;
    //     let i = 0;
    //     let index = 0;
    //     const moving = () => {
        
        //         const prex = from.latlng.getLng();
        //         const prey = from.latlng.getLat();
        //         const nexx = to.latlng.getLng();
        //         const nexy = to.latlng.getLat();
        //         const dist = ((nexx - prex) ** 2 + (nexy - prey) ** 2) ** 0.5 * speed;
        
        //         const X = (i * nexx + (dist - i) * prex) / dist;
        //         const Y = (i * nexy + (dist - i) * prey) / dist;
//         const position = new kakao.maps.LatLng(Y, X);
//         circle.setPosition(position);

//         i++;

//         if(i >= dist){
    //             i = 0;
    //             index++;
    //             if(way.length - 1 === index){
        //                 moveStart(circle, END);
        //                 return;
        //             }
        //             from = pointData[way[index]];
        //             to = pointData[way[index + 1]];
        //         }   
        //         requestAnimationFrame(moving);
        //     };
        //     moving();
        //     return { X, Y };
        // }
        
        // const findPath = (startPoint:number) => {
            // const r = startPoint;
            // let chooseLineNum:number = Math.floor(Math.random() * pointData.length);
            
            // const findWay = (start , goal: number):[number[], []] => {
                // const history = [];
                // const heap = new Heap();
                // let data = start;
                // history[data.data] = data;
                
                // while(goal != data.data){
                    // let n = data.data;
                    // for(let i = 0; i < pointData[n].lines.length; i++){
                        //     if(typeof history[pointData[n].lines[i]] === 'undefined'){
                            //         let pytha = ((pointData[n].latlng.getLat() - pointData[pointData[n].lines[i]].latlng.getLat()) ** 2 + (pointData[n].latlng.getLng() - pointData[pointData[n].lines[i]].latlng.getLng() ** 2)) * 0.5
                            //         heap.push({data:pointData[n].lines[i], pre:n, score:pytha + data.score}, pytha + data.score)
                            //     }
                            // }
                            // for(let i = 0; i < history.length; i++){
                                //     data = heap.pop();
                                //     if(typeof history[data.data] === 'undefined'){
                                    //         history[data.data] = data;
                                    //         break;
                                    //     }
                                    // }
                                    // }
                                    
                                    // let obj = history[goal];
                                    // const list:number[] = [];
                                    // const total = obj.score;
                                    // while(obj.pre !== -1){
                                        // let pre = obj.pre;
//             list.push(obj.data);
//             obj = history[pre];
//         }
//         list.reverse()
//         list.unshift(r);
//         console.log(list)
//         return [list, history];
//     }

//     while(chooseLineNum === r){
    //         chooseLineNum = Math.floor(Math.random() * pointData.length);
    //     }
    //     return findWay({data:r, score:0, pre:-1}, chooseLineNum)
    // };
    
    
    // =======================================================================================================================================================================
    // =======================================================================================================================================================================
    
    
    import { pointData, lineData } from './roadPoint';
    import { arriveClick } from './variable'
    import { P_inf } from './constants';
    
    type pd = {
    name:string;
    latlng:kakao.maps.LatLng;
    lines:number[];
}
type ld = {
    road_id: number;
    linePath: kakao.maps.LatLng[];
    points:number[];
}
export let per_click:boolean = false;

export function init(map: kakao.maps.Map) {
    let locNum:number = null;
    locNum = Math.floor(Math.random() * pointData.length);
    // locNum = 341;

    const circle = new kakao.maps.Circle({
        center : pointData[locNum].latlng, // 원의 중심좌표
        radius: 20, // 미터 단위의 원의 반지름
        strokeOpacity: 0, // 선의 불투명도 1에서 0 사이의 값이며 0에 가까울수록 투명
        fillColor: 'red', // 채우기 색깔
        fillOpacity: 1 // 채우기 불투명도
    });

    kakao.maps.event.addListener(circle, 'click', function(mouseEvent){
        if(!per_click){
            P_inf.style.display = 'block';
            P_inf.style.filter = 'opacity(100%)'
            per_click = true;
        }
        console.log(per_click);
    })

    circle.setMap(map)
    let lineNum:number;
    let nexNum:number;
    function autoMoving(circle:kakao.maps.Circle, speed:number, lineNum:number, from:kakao.maps.LatLng) {
        const followRoad = () =>{
            let index = 0;
            let i = 0;
            let n:1|-1 = null;
            const fx = from.getLat();
            const fy = from.getLng();
            const fl_x = lineData[lineNum].linePath[i].getLat();
            const fl_y = lineData[lineNum].linePath[i].getLng();
            const result = (((fx - fl_x) ** 2 + (fy - fl_y) ** 2) ** 0.5);
            const check = () =>{
                if(n == 1){
                    return i >= lineData[lineNum].linePath.length - 1;
                }else{
                    return i <= 0;
                }
            }
            if(result <= 0.0002){
                i = 0
                n = 1;
            }else{
                i = lineData[lineNum].linePath.length - 1;
                n = -1;
            }
            const moving1road = () => {
                const prex = lineData[lineNum].linePath[i].getLng();
                const prey = lineData[lineNum].linePath[i].getLat();
                const nexx = lineData[lineNum].linePath[i + n].getLng();
                const nexy = lineData[lineNum].linePath[i + n].getLat();
                const dist = ((nexx - prex) ** 2 + (nexy - prey) ** 2) ** 0.5 * speed;
                const X = (index * nexx + (dist - index) * prex) / dist;
                const Y = (index * nexy + (dist - index) * prey) / dist;
                const position = new kakao.maps.LatLng(Y, X);
                circle.setPosition(position);
                map.setCenter(circle.getPosition());
                index++;
    
                if(index >= dist){
                    index = 0;
                    i += n;
                    if(check()){
                        if(!per_click){
                            findmove();
                        }
                        return;
                    }
                }
                requestAnimationFrame(moving1road);
            };
            moving1road();
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
            console.log(picks);
            if(!picks.length){
                continue;
            }
            nexNum = picks[Math.floor(picks.length * Math.random())]; // 도착할 point number
            // const to = pointData[nexNum]; // arrive point
            const speed = 50000;
            autoMoving(circle, speed, lineNum, from.latlng);
            locNum = Number(nexNum);
            break;
        }
    }

    findmove();
    
    document.onkeyup = (e:any) =>{
        if(per_click){
            if(e.keyCode == 27){
                P_inf.style.display = 'none';
                P_inf.style.filter = 'opacity(0%)'
                per_click = false;
                console.log(per_click);
                findmove();
            }
        }
    }
}

