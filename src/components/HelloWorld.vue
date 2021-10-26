<template>
    <div id="test">
        <div class='test'>
            <div class='title'>
                test
            </div>
            <div class="content">
              <Certification />
              <Profile />
              <v-select
                :items="['Foo', 'Bar']"
                label="Items"
                @change="test($event)"
              ></v-select>
            </div>
        </div>
    </div>
</template>

<script>
import Certification from "./user/certification/Certificaton.vue"
import Profile from "./user/Profile.vue"

export default {
    components: {
      Certification,
      Profile,
    },
    data() {
      return {
        // swiper
        item:''
      }
    },
    methods: {
      test(e) {
        console.log(e)
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
</style>