<template>
  <div class="wrap components-page">
    <div class="wrapB">
      <div style="display: flex; justify-content: space-between;">
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
          <v-btn class="ma-2" outlined fab color="indigo">
            검색
          </v-btn>
        </div>
      </div>

      <div id="map" style="width:500px;height:700px;"></div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6f0cd3f675a4d46c711e67d3a74d7398";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.51924223760834, 126.92716681223602),
        level: 7,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  },
};
</script>
