<template>
  <div class="wrap components-page">
    <div class="wrapB">
      <router-link to="/">
        <v-btn class="ma-2" outlined fab color="indigo" @click="fetchList()">
          필터
        </v-btn>
      </router-link>
      <div id="map"></div>

      <swiper id="maemul-list" class="swiper" :options="swiperOption">
        <MaemulList
          v-for="(maemul, idx) in maemuls"
          :key="idx"
          :maemul="maemul"
        />
      </swiper>
    </div>
  </div>
</template>

<script>
import houserest from "../../api/HouseHttpCommon.js";
import MaemulList from "../../components/main/MaemulList.vue";
import { Swiper } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "RealestateSearch",
  components: {
    MaemulList,
    Swiper,
  },
  data() {
    return {
      map: null,
      realestates: null,
      conditions: {},

      maemuls: {},
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      this.fetchList();
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
      this.setCondition();

      houserest
        .axios({
          url: "/filter",
          method: "post",
          data: this.conditions,
        })
        .then((res) => {
          console.log(res.data);

          this.realestates = res.data;
          this.setMarkers();

          this.maemuls = res.data;
        })
        .catch(() => {
          // 통신 실패
          console.log("통신 실패");
        });
    },
    setCondition() {
      console.log(this.gu);
      this.conditions.address = "영등포구 신길동";
      this.conditions.high_layer = 10000000;
      this.conditions.low_layer = this.minprice;
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
      clusterer.addMarkers(markers);

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
      this.maemuls = filterList;
      console.log(filterList);
    },
  },
  computed: {
    si() {
      return this.$store.state.filtering.si;
    },
    gu() {
      return this.$store.state.filtering.gu;
    },
    minprice() {
      return this.$store.state.filtering.minprice;
    },
    maxprice() {
      return this.$store.state.filtering.maxprice;
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
#maemul-list {
  max-width: 540px;
  height: 25vh;
  position: fixed;
  bottom: 10px;
  margin: 0 auto;
  left: 0;
  right: 0;
  transition: all 300ms;
}
</style>