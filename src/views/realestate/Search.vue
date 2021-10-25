<template>
  <div class="wrap components-page">
    <div class="wrapB">
      <div
        class="search"
        style="display: flex; justify-content: space-between;"
      >
        <v-row dense style="width: 70vw">
          <div style="display: flex;">
            <v-col cols="3" style="padding:0;">희망 지역:</v-col>
            <v-col cols="9" style="padding:0; display: flex;">
              <v-select :items="districts" label="도/광역시" solo></v-select>
              <v-select :items="cities" label="시/군/구" solo></v-select>
            </v-col>
          </div>

          <div style="display: flex;">
            <v-col cols="3" style="padding:0;">
              희망 가격대: <br />
              (단위: 천만원)
            </v-col>
            <v-col
              cols="8"
              style="display: flex; padding:0; vertical-align: middle;"
            >
              <v-col cols="5" style="padding:0;">
                <v-text-field type="number" label="최솟값" solo></v-text-field>
              </v-col>
              <v-col cols="1" style="padding:0; align: vertical;">
                ~
              </v-col>
              <v-col cols="5" style="padding:0;">
                <v-text-field label="최댓값" solo></v-text-field>
              </v-col>
            </v-col>
          </div>
        </v-row>
        <div>
          <v-btn class="ma-2" outlined fab color="indigo" @click="fetchList()">
            검색
          </v-btn>
        </div>
      </div>

      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import houserest from "../../api/HouseHttpCommon.js";

export default {
  name: "RealestateSearch",
  components: {},
  data() {
    return {
      map: null,
      districts: [
        "서울특별시",
        "부산광역시",
        "인천광역시",
        "대구광역시",
        "대전광역시",
        "광주광역시",
        "울산광역시",
        "경기도",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주특별자치도",
      ],
      cities: [
        "종로구",
        "중구",
        "용산구",
        "성동구",
        "광진구",
        "동대문구",
        "중랑구",
        "성북구",
        "강북구",
        "도봉구",
        "노원구",
        "은평구",
        "서대문구",
        "마포구",
        "양천구",
        "강서구",
        "구로구",
        "금천구",
        "영등포구",
        "동작구",
        "관악구",
        "서초구",
        "강남구",
        "송파구",
        "강동구",
      ],
      realestates: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6f0cd3f675a4d46c711e67d3a74d7398&libraries=clusterer";
      document.head.appendChild(script);
    }
  },
  methods: {
    fetchList() {
      houserest
        .axios({
          url: "",
          method: "get",
        })
        .then((res) => {
          console.log(res.data);
          this.realestates = res.data;
          this.setMarkers();
        })
        .catch(() => {
          // 통신 실패
        });
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.49721718198739, 126.9158540688247),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
    },
    setMarkers() {
      var clusterer = new kakao.maps.MarkerClusterer({
        map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 4, // 클러스터 할 최소 지도 레벨
      });

      const imageSrc =
          "https://cdn-icons-png.flaticon.com/512/5884/5884978.png",
        imageSize = new kakao.maps.Size(50, 50),
        imageOption = { offset: new kakao.maps.Point(25, 40) };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      var markers = [];
      for (var i = 0; i < this.realestates.length; i++) {
        // 마커를 생성합니다
        markers[i] = new kakao.maps.Marker({
          // map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(
            this.realestates[i].lat,
            this.realestates[i].lng
          ), // 마커를 표시할 위치
          title: this.realestates[i].house_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
      console.log(markers);
      clusterer.addMarkers(markers);
      console.log(clusterer);

      this.addFilterListEvent();
    },
    addFilterListEvent() {
      kakao.maps.event.addListener(
        this.map,
        "tilesloaded",
        this.filterListByLatLng
      );
    },
    filterListByLatLng() {
      // 지도 영역정보를 얻어옵니다
      var bounds = this.map.getBounds();

      // 영역정보의 남서쪽 정보를 얻어옵니다
      var swLatlng = bounds.getSouthWest();

      // 영역정보의 북동쪽 정보를 얻어옵니다
      var neLatlng = bounds.getNorthEast();

      var filterList = this.realestates.filter(
        (realestate) =>
          realestate.lat >= swLatlng.getLat() &&
          realestate.lat <= neLatlng.getLat() &&
          realestate.lng >= swLatlng.getLng() &&
          realestate.lng <= neLatlng.getLng()
      );

      console.log(filterList);
    },
  },
};
</script>
<style>
.serarch {
  height: 40vh;
}
#map {
  height: 60vh;
  width: 100%;
}
@media screen and (min-width: 900px) {
  .loan {
    max-width: 580px;
    margin: auto;
  }
}
</style>
