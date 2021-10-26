<template>
  <div class="wrap components-page">
    <div class="wrap">
      
      <h1
        style="background:yellowgreen; height:60px; display: flex; justify-content: center; align-items: center;"
      >
        계약 체크리스트 📃
      </h1><br>
    </div>
    
    <div class="wrapB">
      <div style="text-align:center">
      <img src="../../../public/img/키키.png">
      </div>
      <v-list subheader three-line>
        <v-subheader style="font-size:18px;font-family:'NEXON Lv1 Gothic OTF'"
          >배성재님~ <br>계약전에 체크리스트를 꼭 확인하세요!</v-subheader
        >

      </v-list>

      <v-divider></v-divider>

      <v-list flat subheader three-line>
        <v-subheader style="font-size:20px; font-family:'NEXON Lv1 Gothic OTF'"
          >[Checklist]</v-subheader
        >

        <v-list-item-group v-model="settings" multiple active-class="">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>대출</v-list-item-title>
                <v-list-item-subtitle
                  >월/전세 자금 대출이 가능한 집인지 체크!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>권리</v-list-item-title>
                <v-list-item-subtitle
                  >등기부등본을 확인해보기!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>본인 확인</v-list-item-title>
                <v-list-item-subtitle
                  >계약시 본인/대리인인지 확인하고 대리인이면 위임장과
                  인감증명서 체크하기!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>사항</v-list-item-title>
                <v-list-item-subtitle
                  >계약서 내용에 특약사항, 협의사항
                  확인하기!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>확정일자</v-list-item-title>
                <v-list-item-subtitle
                  >입주하고 전입신고할 때 확정일자 받기!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-progress-linear v-model="skill" color="yellow" height="25">
        <template v-slot:default="{ value }">
          <strong style="font-family:'NEXON Lv1 Gothic OTF'"
            >{{ Math.ceil(value) }}%</strong
          >
        </template>
      </v-progress-linear>
      </div>
    
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from "../../components/common/BottomNavigation";

export default {
  name: "checklist",
  components: {
    BottomNavigation,
  },
  data: () => {
    return {
      settings: [],
      skill: 50,
    };
  },
};
</script>

<style scoped>
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.components-page{
    padding-top:0px;
}

.components-page .header-default{
    background:linear-gradient(to right, plum, pink);
    width:100%
}

.v-responsive__content{
    width:100px;
}

</style>
