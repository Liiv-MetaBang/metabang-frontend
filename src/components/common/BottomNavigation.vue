<template>
  <v-bottom-navigation
    class="footer"
  >
    
    <v-btn @click="gotoChecklist">
    <span style="font-family: 'NEXON Lv1 Gothic OTF'">체크리스트</span>
    <v-icon>fas fa-edit</v-icon>
    </v-btn>


    <v-btn @click="gotoSearch">
      <span style="font-family: 'NEXON Lv1 Gothic OTF'">매물검색</span>
      <v-icon>mdi-domain</v-icon>
    </v-btn>

    
    <Profile />
    

  </v-bottom-navigation>
</template>

<script>
import Profile from "../user/Profile.vue"

  export default {
    components: {
        Profile
    },

    methods:{
        gotoChecklist(){
            this.$router.push(`/checklist`)
        },
        gotoSearch(){
            this.$router.push(`/realestate/search`)
        },
    }
  }
</script>

<style scoped>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.footer {
    padding:2px;
    position: fixed;
    bottom: 0;
}

.theme--light.v-bottom-navigation{
  background-color:#F1F8E9;
  color:black
}
</style>