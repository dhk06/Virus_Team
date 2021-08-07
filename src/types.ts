export interface People {
    position: {
        x: number,
        y: number
    }
    velocity: {
        x: number,
        y: number
    }
    circle: kakao.maps.Circle,
    color: string,
    infection: boolean,
    die: boolean,
    fatalityRate: number,
    locNum: number
}

export interface numP {
    wholePer: number,
    Infectious: number,
    Recovered: number,
    deadPer: number
}