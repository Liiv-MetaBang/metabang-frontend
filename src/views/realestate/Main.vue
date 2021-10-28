<template>
  <div
    class="wrap components-page"
    style="background:linear-gradient(to bottom, yellow, orange); "
  >
    <div class="wrapB">
      <div class="wrap">
        <h1 id="subject">METABANG</h1>
        <br />
        <v-img src="../../../public/img/kb.png"></v-img>
        <br />
        <v-row>
          <v-col cols="9" style="display: flex; margin:0 auto;">
            <v-select
              @change="setSi($event)"
              :items="districts"
              label="도/광역시"
            ></v-select>
            <v-select
              @change="setGu($event)"
              :items="cities"
              label="시/군/구"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="9" style="display:flex;margin:0 auto;">
            <v-text-field
              label="최소(백만원)"
              :rules="rules"
              hide-details="auto"
              v-model="minprice"
            ></v-text-field>

            <v-text-field
              label="최대(백만원)"
              :rules="rules"
              hide-details="auto"
              v-model="maxprice"
            ></v-text-field>
          </v-col>
        </v-row>

        <br />

        <v-col
          cols="9"
          style="display: flex; margin:auto;width:140px; margin:auto "
        >
          <router-link to="/realestate/search">
            <v-btn
              class="ma-2"
              :loading="loading"
              :disabled="loading"
              color="orange"
              @click="setPrice($event)"
              style="width:100px; margin:auto;"
            >
              매물찾기
            </v-btn>
          </router-link>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Main",
  data() {
    return {
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
        "세종특별자치시",
        "제주특별자치도",
      ],
      cities: [
      ],
      loader: null,
      loading: false,
      rules: [
        (value) => !!value || "필수입니다!",
        (value) => (value && value.length >= 1) || "Min 1 characters",
      ],
      si: "",
      gu: "",
      minprice: "",
      maxprice: "",
      gungu: {
        서울특별시: [
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
        부산광역시: ['중구','해운대구','동구','서구','부산진구','사하구','남구','수영구','영도구','동래구','금정구','강서구','북구','사상구','기장군','연제구'],
        인천광역시: ['강화군','중구','부평구','웅진군','동구','남동구','미추홀구','서구','연수구','계양구'],
        대구광역시: ['중구','남구','수성구','동구','서구','달서구','북구','달성군'],
        대전광역시: ['대덕구','중구','동구','서구','유성구'],
        광주광역시: ['남구','동구','서구','북구','광산구'],
        울산광역시: ['중구','남구','동구','북구'],
        경기도: ['수원시','성남시','의정부시','안양시','부천시','광명시','평택시','동두천시','안산시','고양시','과천시','구리시','남양주시','오산시','시흥시','군포시','의왕시','하남시','용인시','파주시','이천시','안성시','김포시','화성시','광주시','양주시','포천시','여주시','연천군','가평군','양평군'],
        강원도: ['태백시','정선군','춘천시','평창군','인제군','양구군','양양군','속초시','삼척시','원주시','강릉시','화천군','칠원군','동해시','홍천군','횡성군','영월군','고성군'],
        충청북도: ['청주시','충주시','제천시','영동군','진천군','괴산군','옥천군','보은군','증평군','음성군','단양군'],
        충청남도: ['계룡시','부여군','서산시','천안시','당진시','보령시','아산시','태안군','금산군','홍성군','청양군','공주시','예산군','논산시','서천군'],
        전라북도: ['진안군','전주시','정읍시','익산시','김제시','고창군','임실군','부안군','장수군','완주군','남원시','순창군','군산시','무주군'],
        전라남도: ['곡성군','장성군','영암군','나주시','고흥군','담양군','해남군','무안군','목포시','순천시','보성군','완도군','여수시','화순군','함평군','장흥군','진도군','영광군','신안군','구례군','광양시','강진군'],
        경상북도: ['영주시','영천시','영덕군','문경시','청송군','봉화군','김천시','울진군','고령군','경산시','성주군','포항시','상주시','청도군','안동시','구미시','의성군','칠곡군','경주시','예천군','울릉군','군위군','영양군'],
        경상남도: ['김해시','양산시','사천시','거창군','합천군','함안군','진주시','창녕군','의령군','거제시','밀양시','남해군','하동군','통영시','창원시','고성군','함양군','산청군'],
        세종특별자치시:[],
        제주특별자치도: [],
      },
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 2000);
      this.loader = null;
    },
  },
  methods: {
    setSi(a) {
      this.si = a;
      this.cities = this.gungu[a];
    },
    setGu(a) {
      this.gu = a;
      //console.log(a)
    },
    setPrice() {
      this.setFiltering({
        si: this.si,
        gu: this.gu,
        maxprice: this.maxprice,
        minprice: this.minprice,
      });
    },
    ...mapMutations({
      setFiltering: "setFiltering",
    }),
  },
};
</script>

<style scoped>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
#subject {
  font-family: "NEXON Lv1 Gothic OTF";
  color: goldenrod;
  text-align: center;
}
.v-btn__content {
  font-family: "NEXON Lv1 Gothic OTF" !important;
}
</style>
