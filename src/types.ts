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
    infection: boolean
}

export interface numP {
    wholePer: number,
    Infectious: number,
    Resistent: number
}