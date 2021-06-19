const resultDiv = document.querySelector<HTMLDivElement>('#resultDiv')

export function init(){

    var container = document.getElementById('map');

    var options = { // 지도 기본 설정
        center: new kakao.maps.LatLng(37.32191655510652, 126.83084311183287), //지도의 중심좌표
        minLevel: 2,
        maxLevel: 6,  
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
        // 클릭한 위도, 경도 정보 가져오기
        let latlng = mouseEvent.latLng;
        
        let message = '클릭한 위치의 좌표 (위도,경도) : ' + latlng.getLat() + ', ' + latlng.getLng();

        resultDiv.innerHTML = `${message}`;
    });

    return {
        map
    }
}