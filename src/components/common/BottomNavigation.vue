<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
    class="footer"
  >

    <v-btn @click="gotoChecklist">
    <span>체크리스트</span>
    <v-icon>fas fa-edit</v-icon>
    </v-btn>


    <v-btn @click="gotoSearch">
      <span>매물검색</span>
      <v-icon>mdi-domain</v-icon>
    </v-btn>

    <v-btn @click="gotoProfile">
      <span>프로필</span>

      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 0 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return '#66BB6A'
          case 1: return 'teal'
          case 2: return '#FFC107'
          default: return 'yellow'
        }
      },
    },
    methods:{
        gotoChecklist(){
            this.$router.push(`checklist`)
        },
        gotoSearch(){
            this.$router.push(`realestate/search`)
        },
        gotoProfile(){
            
        }
    }
  }
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
}
</style>