<template>
    <div class="wrap components-page" style="background:linear-gradient(to bottom, yellow, orange); ">
        <div class="wrapB">
            <div class="wrap">
                <h1 id="subject">METABANG</h1>
                <br>
                <v-img src="../../../public/img/kb.png"></v-img>
                <br>
                <v-row>
                    <v-col cols="9" style="display: flex; margin:0 auto;">
                        <v-select @change="setSi($event)" :items="districts" label="도/광역시"></v-select>
                        <v-select @change="setGu($event)" :items="cities" label="시/군/구"></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="9" style="display:flex;margin:0 auto;">
                        <v-text-field
                        label="최소(백만원)"
                        :rules="rules"
                        hide-details="auto"
                        v-model="minPrice"
                        ></v-text-field>
                        
                        <v-text-field
                        label="최대(백만원)"
                        :rules="rules"
                        hide-details="auto"
                        v-model="maxPrice"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <br>
                    
                <v-col cols="9" style="display: flex; margin:auto;width:140px; margin:auto ">
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
export default {
    name:"Main",
    data(){
        return{
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
        loader:null,
        loading: false,
        rules: [
        value => !!value || '필수입니다!',
        value => (value && value.length >= 1) || 'Min 1 characters',
        ],
        si:"",
        gu:"",
        minprice:'',
        maxPrice:'',
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 2000)
        this.loader = null
      },
    },
    methods: {
        setSi(a){
            this.si = a
            //console.log(a)
        },
        setGu(a){
            this.gu = a
            //console.log(a)
        },
        setPrice(){
            this.$store.state.filtering.minprice = this.minPrice
            this.$store.state.filtering.maxprice = this.maxPrice
            this.$store.state.filtering.si = this.si
            this.$store.state.filtering.gu = this.gu
            //console.log(this.minPrice)
            //console.log(this.maxPrice)
        }
    },

}
</script>

<style scoped>
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#subject{
    font-family: 'NEXON Lv1 Gothic OTF';
    color:goldenrod;
    text-align:center
}
.v-btn__content{
    font-family: 'NEXON Lv1 Gothic OTF' !important;
}
</style>