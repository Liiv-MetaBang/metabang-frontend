<template>
    <swiper-slide class='maemul-list swiper-slide' >
        <div class='chage-btn' @click='changeSize'>
            <i class="fas fa-chevron-up arrow"></i>
        </div>
        <div class='maemul-content' style="background:white">
            <v-dialog
                v-model="dialog"
                width="500"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-img 
                        v-bind="attrs"
                        v-on="on"
                        :src="maemul.thumbnail"
                        class="maemul-img"
                        @click="dialog=true"
                    ></v-img>
                </template>
                <v-carousel v-model="model" style="display: flex; justify-content: center; align-items: center; min-height: 50vh;">
                        <v-carousel-item
                        v-for="(url, i) in urls "
                        :key="i"
                        style="width: 90vw;"
                        >
                        <div style="height: 100%; display: flex; justify-content: center; align-items: center;">
                            <v-img :src="url" style="width: 100%"></v-img>
                        </div>
                        </v-carousel-item>
                </v-carousel>   
                </v-dialog>
            
            <div class='maemul-title'>
                <h3 id="font">{{ maemul.house_name }}</h3>
                <br>
                <div id="font">전세 : {{ maemul.price/1000000 }}백만원</div>
                <div id="font">면적 : {{ maemul.area }}평</div>
            </div>
            <div class="maemul-detail">
                <h2 id="font" style="color:black;text-align:center;margin-top:10px">{{ maemul.house_name }}</h2>
                <div id="font" style="text-align:center">전세 : {{ maemul.price/1000000 }}(단위: 백만원)</div>
                <div id="font" style="text-align:center">준공년도 : {{ maemul.build_date }}년</div>
                <div id="font" style="text-align:center">면적 : {{ maemul.area }}평</div>
                <div id="font" style="text-align:center">위치 : {{ maemul.address }}</div><br>
                <div id="font" style="text-align:center"> 
                    <button id="button" onclick="window.open('https://gather.town/app/kgN3L9h4CdERI4zk/test');">메타버스 입장</button> 
                    <router-link to='/reservation' id="font"><button id="button" >방문예약</button></router-link>
                    <router-link to='/contract' id="font"><button id="button" @click="contract">계약하기</button></router-link>
                </div>
                
                
            </div>
        </div>
    </swiper-slide>
    
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'
import { mapMutations } from 'vuex'
// import 

export default {
    name: 'MaemulList',
    components: {
        SwiperSlide,
    },
    props: {
        maemul: Object
    },
    mounted() {

    },
    data() {
        return {
            state: true,
            dialog: false,
            model: 0,
            urls: [
                "https://dkne.s3.ap-northeast-2.amazonaws.com/detail/dd1.PNG",
                "https://dkne.s3.ap-northeast-2.amazonaws.com/detail/dd2.PNG",
                "https://dkne.s3.ap-northeast-2.amazonaws.com/detail/dd3.PNG",
            ],
          
        }
    },
    methods: {
        ...mapMutations({
            setMaemul: "setMaemul",
        }),
        contract() {
            this.setMaemul(this.maemul)
        },
        changeSize() {
            let swipers = document.querySelectorAll(".swiper-slide")
            let maemulList = document.querySelector("#maemul-list")
            let arrow = document.querySelectorAll(".arrow")
            let content = document.querySelectorAll(".maemul-content")
            let img = document.querySelectorAll(".maemul-img")
            let title = document.querySelectorAll(".maemul-title")
            let detail = document.querySelectorAll(".maemul-detail")
            console.log(document.querySelectorAll(".arrow"))
            
            if (this.state) {
                for (let i=0; i < swipers.length; i++) {
                    swipers[i].style.height = "70vh"
                    arrow[i].classList.remove("fa-chevron-up")
                    arrow[i].classList.add("fa-chevron-down")
                    content[i].style.display = "block"
                    img[i].style.width = "93%"
                    title[i].style.display = "none"
                    detail[i].style.display = "block"
                }
                maemulList.style.height = "70vh"
            } else {
                for (let i=0; i < swipers.length; i++) {
                    swipers[i].style.height = "25vh"
                    arrow[i].classList.add("fa-chevron-up")
                    arrow[i].classList.remove("fa-chevron-down")
                    content[i].style.display = "flex"
                    img[i].style.width = "40%"
                    title[i].style.display = "block"
                    detail[i].style.display = "none"
                }
                maemulList.style.height = "25vh"
            }
            this.state = !this.state
        },
    }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#font{
    font-family: 'NEXON Lv1 Gothic OTF' !important;
    font-weight: 900
}
.maemul-list {
    position: relative;
    width: inherit;
    max-width: 540px;
}
.chage-btn {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background:#545045;
}
.arrow {
    font-size: 1.4rem;
}

.swiper-slide {
    height: 25vh;
    width: 85vw;
    display: flex;
    font-weight: bold;
    background-color: white;
    opacity: 0.9;
    background-position: center;
    background-size: cover;
    border-radius: 12px 12px 12px 12px / 12px 12px 12px 12px;
    position: relative;
}
.maemul-content {
    position: relative;
    margin-top: 22px;
    width: 100%;
    display: flex;
}
.maemul-img {
    position: relative;
    width: 40%;
    max-height: 30vh;
    margin: 10px;
}
.maemul-title {
    position: relative;
    width: 60%;
    margin: 10px;
    overflow: scroll;
    font-family: 'NEXON Lv1 Gothic OTF';
}
.maemul-detail {
    display: none;
    position: relative;
    width: 92%;
    margin: 10px;
    overflow: scroll;
}
#button{
    border:5px solid #545045;
    border-radius:50%;
    background:#545045;
    margin:0 2%;
    font-size:small;
    color:white
}
</style>