<template>
    <div id="test">
        <div class='test'>
            <div class='title'>
                test
            </div>
            <div class="content">
                <Certification />=
                <swiper id="maemul-list" class="swiper" :options="swiperOption">
                  <MaemulList v-for="(maemul, idx) in maemuls" :key="idx" />
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import Certification from "./user/certification/Certificaton.vue"
import MaemulList from "./main/MaemulList.vue"
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    components: {
      Certification,
      MaemulList,
      Swiper,
      
    },
    data() {
      return {
        // swiper
        maemuls: {
          1: {},
          2: {},
          3: {},
          4: {}
        },
        swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
}
</script>

<style>
#test {
    height: 100vh;
}
.test {
    height: 100vh;
}
#test .title {
    height: 8vh;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
}
#test .content {
    height: 92vh;
    padding: 20px;
    overflow: scroll;
}
@media screen and (min-width: 900px) {
  .test {
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