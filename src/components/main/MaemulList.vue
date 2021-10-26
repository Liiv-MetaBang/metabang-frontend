<template>
    <swiper-slide class='maemul-list swiper-slide'>
        <div class='chage-btn' @click='changeSize'>
            <i class="fas fa-chevron-up arrow"></i>
        </div>
        <div class='maemul-content'>
            <v-dialog
                v-model="dialog"
                width="500"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-img 
                        :src="maemul.thumbnail"
                        class="maemul-img"
                        @click="dialog=true"
                    ></v-img>
                </template>
                <v-carousel v-model="model">
                    <v-carousel-item
                    v-for="(url, i) in urls "
                    :key="i"
                    >
                        <v-img :src="url"></v-img>
                    </v-carousel-item>
                </v-carousel>   
                </v-dialog>
            
            <div class='maemul-title'>
                <h3>{{ maemul.house_name }}</h3>
                <div>전세 {{ maemul.price }}</div>
                <div>준공년도({{ maemul.build_date }})</div>
                <div>면적 {{ maemul.area }}㎡</div>
            </div>
            <div class="maemul-detail">
                {{ maemul }}
            </div>
        </div>
    </swiper-slide>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'
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
                "https://dkne.s3.ap-northeast-2.amazonaws.com/1.PNG",
                "https://dkne.s3.ap-northeast-2.amazonaws.com/detail/d1.PNG",
                "https://dkne.s3.ap-northeast-2.amazonaws.com/detail/d2.PNG",
                "https://dkne.s3.ap-northeast-2.amazonaws.com/detail/d3.PNG", 
            ],
        }
    },
    methods: {
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
}
.maemul-detail {
    display: none;
    position: relative;
    width: 100%;
    margin: 10px;
    overflow: scroll;
}
</style>