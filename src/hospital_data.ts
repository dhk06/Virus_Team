const hospital_data = {
    hospital_1_data: {
        path: [
            new kakao.maps.LatLng(37.322605335572995, 126.8297779763478),
            new kakao.maps.LatLng(37.32134378898662, 126.82970748786231),
            new kakao.maps.LatLng(37.3212252956456, 126.83190776595863),
            new kakao.maps.LatLng(37.3225319245432, 126.83200075535811),
        ],
        entrance: 614
    },
    hospital_2_data: {
        path: [
            new kakao.maps.LatLng(37.3320780395757, 126.80809749140077),
            new kakao.maps.LatLng(37.33149439694833, 126.80935145979302),
            new kakao.maps.LatLng(37.32858110188657, 126.80751965906758),
            new kakao.maps.LatLng(37.32945262893015, 126.80600546922433),
        ],
        entrance: 661
    },
    hospital_3_data: {
        path: [
            new kakao.maps.LatLng(37.30809331839797, 126.85629083850739),
            new kakao.maps.LatLng(37.309717922020695, 126.85856638533957),
            new kakao.maps.LatLng(37.31184164022694, 126.8563062655128),
            new kakao.maps.LatLng(37.31036104750009, 126.85394018121707),
        ],
        entrance: 232
    }
}


export function init(map: kakao.maps.Map){
    const hospital_1 = new kakao.maps.Polygon({
        path: hospital_data.hospital_1_data.path,
        strokeWeight: 2,
        strokeColor: 'red',
        strokeOpacity: 0.8,
        fillColor: 'white',
        fillOpacity: 0.7
    })

    const hospital_2 = new kakao.maps.Polygon({
        path: hospital_data.hospital_2_data.path,
        strokeWeight: 2,
        strokeColor: 'red',
        strokeOpacity: 0.8,
        fillColor: 'white',
        fillOpacity: 0.7    
    })

    const hospital_3 = new kakao.maps.Polygon({
        path: hospital_data.hospital_3_data.path,
        strokeWeight: 2,
        strokeColor: 'red',
        strokeOpacity: 0.8,
        fillColor: 'white',
        fillOpacity: 0.7
    })

    hospital_1.setMap(map);
    hospital_2.setMap(map);
    hospital_3.setMap(map);
}