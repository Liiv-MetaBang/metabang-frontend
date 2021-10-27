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
        계약 확인
      </h1>
    </div>

    <div class="wrapB">
      <div>
        <div class="d-flex" style="overflow: auto">
          <v-checkbox v-model="disabled" label="Disabled"></v-checkbox>
        </div>

        <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>계약한 매물</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-img :src="maemul.thumbnail"> </v-img>

              <div class="maemul-detail">
                <h2
                  id="font"
                  style="color: black; text-align: center; margin-top: 10px"
                >
                  {{ maemul.house_name }}
                </h2>

                <div id="font" style="text-align: center">
                  전세 : {{ maemul.price / 1000000 }}백만원
                </div>
                <div id="font" style="text-align: center">
                  준공년도 : {{ maemul.build_date }}년
                </div>
                <div id="font" style="text-align: center">
                  면적 : {{ maemul.area }}평
                </div>
                <div id="font" style="text-align: center">
                  위치 : {{ maemul.address }}
                </div>
                <div id="font" style="text-align: center">
                  층수 : {{ maemul.layer }}층
                </div>
                <br />
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>계약서</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-img src="../../../public/img/계약서.jpeg"></v-img>
              <br />
              <div class="sign">
                <div>
                  <span>임차인</span>

                  <v-img class="lessor-sign" :src="lessor.sign"> </v-img>
                </div>
                <div>
                  <span>임대인</span>

                  <v-img class="lessor-sign" :src="user.sign"> </v-img>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>결제 내역</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="maemul-detail">
                <h2
                  id="font"
                  style="color: black; text-align: center; margin-top: 10px"
                >
                  결제 완료
                </h2>

                <div id="font" style="text-align: center">
                  출금계좌 : {{ user.account }}
                </div>
                <div id="font" style="text-align: center">
                  입금계좌 : {{ lessor.account }}
                </div>
                <div id="font" style="text-align: center">
                  보낸금액: {{ maemul.price / 1000000 }}백만원
                </div>
                <div id="font" style="text-align: center">
                  일자 : {{ today }}
                </div>
                <br />
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <br /><br />
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from "../../components/common/BottomNavigation";

export default {
  components: {
    BottomNavigation,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    maemul() {
      return this.$store.state.maemul;
    },
    user() {
      return this.$store.state.user;
    },
    lessor() {
      return this.$store.state.lessor;
    },
    today() {
      return this.$store.state.today;
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

.v-application .text-h5 {
  font-family: "NEXON Lv1 Gothic OTF" !important;
}

#font {
  font-family: "NEXON Lv1 Gothic OTF" !important;
  font-weight: 900;
}

.sign {
  display: flex;
}

.lessor-sign {
  border: solid 2px;
  width: 150px;
  height: 84px;
  margin-right: 22px;
}
</style>
