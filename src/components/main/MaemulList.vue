<template>
    <swiper-slide class='maemul-list swiper-slide'>
        <div class='chage-btn' @click='changeSize'>
            <i class="fas fa-chevron-up arrow"></i>
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
            
            if (this.state) {
                for (let i=0; i < swipers.length; i++) {
                    swipers[i].style.height = "50vh"
                    arrow.classList.remove("fa-chevron-up")
                    arrow.classList.add("fa-chevron-down")
                }
                maemulList.style.height = "50vh"
            } else {
                for (let i=0; i < swipers.length; i++) {
                    swipers[i].style.height = "25vh"
                    arrow.classList.add("fa-chevron-up")
                    arrow.classList.remove("fa-chevron-down")
                }
                maemulList.style.height = "25vh"
            }
            this.state = !this.state
        },
    }
}
</script>

<style lang="scss" scoped>
.maemule-list {
    position: relative;
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
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: rgb(185, 185, 185);
    opacity: 0.4;
    background-position: center;
    background-size: cover;
    transition: all 300ms;
    border-radius: 12px 12px 12px 12px / 12px 12px 12px 12px;
}
</style>