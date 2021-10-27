<template>
  <div class="wrap components-page" style="background: #FFCC80">
    <div class="wrapB"> 
      <div style="display: flex; justify-content:center; align-items: center; "> 
        <img src="../../../public/img/비비.png" style="width:50px;height:50px">
        <v-btn class="ma-2" outlined color="white" @click="$router.push('/')"
        style="font-family: 'NEXON Lv1 Gothic OTF';">
          필터
        </v-btn>

        <div class="ma-2">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="white"
                v-bind="attrs"
                v-on="on"
                @click="recommendDongBasedAI()"
              >
                AI 동네 추천
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h6 orange lighten-2" style="font-family: 'NEXON Lv1 Gothic OTF' !important;">
                {{ dialogTitle }}
              </v-card-title>

              <v-card-text style="margin:5px 0;font-size:medium;font-family: 'NEXON Lv1 Gothic OTF'; ">
                <br>
                {{ dialogText }}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="orange"
                  text
                  @click="dialog = false"
                  v-if="dialogExitVisibility"
                  style="font-family: 'NEXON Lv1 Gothic OTF' !important" 

                >
                  닫기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>

      <div id="map"></div>

      <swiper id="maemul-list" class="swiper" :options="swiperOption">
        <MaemulList
          v-for="(maemul, idx) in maemuls"
          :key="idx"
          :maemul="maemul"
        />
      </swiper>
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import houserest from "../../api/HouseHttpCommon.js";
import userrest from "../../api/UserHttpCommon.js";
import MaemulList from "../../components/main/MaemulList.vue";
import { Swiper } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import BottomNavigation from "../../components/common/BottomNavigation";

export default {
  name: "RealestateSearch",
  components: {
    MaemulList,
    Swiper,
    BottomNavigation,
  },
  data() {
    return {
      map: null,
      realestates: null,
      filterConditions: {},
      userInfo: {},

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

      dialog: false,
      dialogTitle: "AI가 결과를 도출하는 중입니다.",
      dialogText: "잠시만 기다려주세요.",
      dialogExitVisibility: false,

      location: new Map(),
    };
  },
  mounted() {
    this.setLocation();

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
    setLocation() {
      this.location.set("신길동", {
        lat: 37.49721718198739,
        lng: 126.9158540688247,
      });
      this.location.set("당산동", {
        lat: 37.53273457121389,
        lng: 126.90124980812696,
      });
    },
    fetchList() {
      this.setFilterCondition();

      houserest
        .axios({
          url: "/filter",
          method: "post",
          data: this.filterConditions,
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
    setFilterCondition() {
      this.filterConditions.address = this.gu;
      this.filterConditions.high_price = this.maxprice * 1000000;
      this.filterConditions.low_price = this.minprice * 1000000;
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(
          this.location.get("신길동").lat,
          this.location.get("신길동").lng
        ),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);

      this.fetchList();
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
    setUserInfo() {
      this.userInfo.age = this.user.age;
      this.userInfo.gender = this.user.gender;
      this.userInfo.reason = this.user.reason;
    },
    recommendDongBasedAI() {
      this.setUserInfo();

      userrest
        .axios({
          url: "/recommand",
          method: "post",
          data: this.userInfo,
        })
        .then((res) => {
          console.log(res.data);

          // modal setting
          this.dialogTitle = this.gu + " " + res.data;
          this.dialogText =
            "고객님의 맞춤 동네는 " +
            this.dialogTitle +
            "입니다. 지도를 통해 매물을 둘러볼 수 있습니다.";
          this.dialogExitVisibility = true;

          this.moveMapCenter(res.data);
        })
        .catch(() => {
          // 통신 실패
          console.log("통신 실패");
        });
    },
    moveMapCenter(dong) {
      var moveLatLon = new kakao.maps.LatLng(
        this.location.get(dong).lat,
        this.location.get(dong).lng
      );

      // 지도 중심을 이동
      this.map.setCenter(moveLatLon);
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
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
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
  bottom: 50px;
  margin: 0 auto;
  left: 0;
  right: 0;
  transition: all 300ms;
  background:#FFCC80;
}
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.components-page {
  padding-top: 0px !important;
}
.v-btn__content{
  font-family: "NEXON Lv1 Gothic OTF" !important; 
}
</style>
