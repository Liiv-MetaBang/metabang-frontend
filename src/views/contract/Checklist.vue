<template>
  <div class="wrap components-page">
    <div class="wrap">
      <h1
        style="
          background: yellowgreen;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        계약 체크리스트 📃
      </h1>
      <br />
    </div>

    <div class="wrapB">
      <div style="text-align: center">
        <img src="../../../public/img/키키.png" />
      </div>
      <v-list subheader three-line>
        <v-subheader
          style="font-size: 18px; font-family: 'NEXON Lv1 Gothic OTF'"
          >{{ name }}님 <br />계약전에 체크리스트를 꼭 확인하세요!</v-subheader
        >
      </v-list>

      <v-divider></v-divider>

      <v-list flat subheader three-line>
        <v-list-item-group multiple active-class="">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action @click="changeSkill(0)">
                <v-checkbox
                  :input-value="active"
                  v-model="checkbox[0]"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>매물</v-list-item-title>
                <v-list-item-subtitle
                  >방 둘러보고 매물의 등기부등본을
                  확인해보기!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action @click="changeSkill(1)">
                <v-checkbox
                  :input-value="active"
                  v-model="checkbox[1]"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>대출</v-list-item-title>
                <v-list-item-subtitle>
                  거래시 대출 필요 여부를 결정하고 월/전세 자금 대출이 가능한
                  집인지 체크하기!</v-list-item-subtitle
                >
                <span style="color:red" @click="gotoLoan"
                  >혹시 대출이 필요하신가요?</span
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action @click="changeSkill(2)">
                <v-checkbox
                  :input-value="active"
                  v-model="checkbox[2]"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>본인 확인</v-list-item-title>
                <v-list-item-subtitle
                  >계약시 본인 인증하고 모두가 본인인지 확인하기!
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action @click="changeSkill(3)">
                <v-checkbox
                  :input-value="active"
                  v-model="checkbox[3]"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>계약서</v-list-item-title>
                <v-list-item-subtitle
                  >계약서 작성하면서 특약사항, 협의사항
                  확인하기!</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action @click="changeSkill(4)">
                <v-checkbox
                  :input-value="active"
                  v-model="checkbox[4]"
                ></v-checkbox>
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
          <strong style="font-family: 'NEXON Lv1 Gothic OTF'"
            >{{ Math.ceil(value) }}%</strong
          >
        </template>
      </v-progress-linear>
    </div>

    <div
      v-if="skill === 100"
      style="display:flex; justify-content:center;flex-direction:column;align-items:center"
    >
      <h2
        style="font-family: 'NEXON Lv1 Gothic OTF';color:red;text-align:center"
      >
        축하합니다~ 체크리스트 100% 달성!
      </h2>
      <img
        src="../../../public/img/콜리.png"
        style="width:150px;height:auto"
      /><br />
      <button id="complete" @click="gotoConfirm">계약 내용 확인</button>
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
  methods: {
    changeSkill(index) {
      console.log(this.checkbox);
      if (this.checkbox[index]) {
        this.skill += 20;
      } else {
        this.skill -= 20;
      }
    },
    gotoConfirm() {
      this.$router.push(`/confirm`);
    },
    gotoLoan() {
      this.$router.push(`/loan`);
    },
  },
  data: () => {
    return {
      skill: 0,
      checkbox: [false, false, false, false, false],
    };
  },
  created() {
    //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
    //console.log(this.$route.params.loan_flag)
    //console.log("!!!!!!!!!!----------------")
    //console.log(this.$store.state.flag.loan_flag)
    if (this.$store.state.flag.loan_flag) {
      this.checkbox[1] = true;
      this.skill += 20;
    }
    if (this.$store.state.flag.me_flag){
      this.checkbox[2]=true;
      this.skill+=20;
    }
    if (this.$store.state.flag.contract_flag){
      this.checkbox[3]=true;
      this.skill+=20;
    }
  },
  props: {
    loan_flag: { type: Boolean, default: false },
    me_flag:{type:Boolean, default:false},
  },
  computed: {
    name() {
      return this.$store.state.user.user_name;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.components-page {
  padding-top: 0px;
}

.components-page .header-default {
  background: linear-gradient(to right, plum, pink);
  width: 100%;
}

.v-responsive__content {
  width: 100px;
}

#complete {
  background: orange;
  color: white;
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: large;
  padding: 2%;
}
</style>
