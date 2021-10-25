<template>
    <swiper-slide class='maemul-list swiper-slide'>
        <div class='chage-btn' @click='changeSize'>
            <i class="fas fa-chevron-up arrow"></i>
        </div>
        <div class='maemul-content'>
            <v-img 
                src="https://mblogthumb-phinf.pstatic.net/20110705_81/cafewell_1309826331390kSd4p_JPEG/%25EB%2595%2585%25EC%25BD%25A9%25EC%25A7%2591%25EB%2582%25B4%25EB%25B6%25801.jpg?type=w800"
                class="maemul-img"
            ></v-img>
            <div class='maemul-title'>
                {{ maemul }}
            </div>
        </div>
    </swiper-slide>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'MaemulList',
    components: {
        SwiperSlide,
    },
    props: {
        maemul: Object
    },
    data() {
        return {
            state: true,
        }
    },
    methods: {
        changeSize() {
            let swipers = document.querySelectorAll(".swiper-slide")
            let maemulList = document.querySelector("#maemul-list")
            let arrow = document.querySelector(".arrow")
            let content = document.querySelectorAll(".maemul-content")
            let img = document.querySelectorAll(".maemul-img")
            console.log(createImageBitmap)
            
            if (this.state) {
                for (let i=0; i < swipers.length; i++) {
                    swipers[i].style.height = "70vh"
                    arrow.classList.remove("fa-chevron-up")
                    arrow.classList.add("fa-chevron-down")
                    content[i].style.display = "block"
                    img[i].style.width = "93%"
                }
                maemulList.style.height = "70vh"
            } else {
                for (let i=0; i < swipers.length; i++) {
                    swipers[i].style.height = "25vh"
                    arrow.classList.add("fa-chevron-up")
                    arrow.classList.remove("fa-chevron-down")
                    content[i].style.display = "flex"
                    img[i].style.width = "40%"
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
    width: 40%;
    max-height: 30vh;
    margin: 10px;
}
.maemul-title {
    margin: 10px;
}
</style>