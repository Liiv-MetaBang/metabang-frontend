<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600" height="1300">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          휴대폰 인증
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 lighten-2" style="background-color:yellow; font-family: 'NEXON Lv1 Gothic OTF' !important;">
          본인인증
        </v-card-title>
        <div v-if="certification">
          <v-card-text style="height: 70vh; padding:20px;">
            <div style="height:30vh; position: relative;">
              <v-img
                src="../../../assets/images/success.png"
                width="120px"
                style="position: absolute; bottom: 0; left: 25vw"
              ></v-img>
            </div>
            <div style="margin-top: 5vh; display:flex; justify-content:center;">
              <h2>본인 인증이 완료되었습니다!</h2>
            </div>
          </v-card-text>
        </div>
        <div v-else>
          <v-card-text
            style="display: flex; flex-direction: column; height: 70vh; padding:20px; justify-content: space-between;"
          >
            <div>
              <div class="cert-text">
                <h4 style="margin-bottom: 5px;">이름</h4>
                <v-text-field
                  single-line
                  solo
                  hide-details
                  v-model="name"
                ></v-text-field>
              </div>
              <div class="cert-text">
                <h4 style="margin-bottom: 5px;">주민등록번호</h4>
                <v-row style="align-items: center">
                  <v-col cols="5">
                    <v-text-field
                      single-line
                      solo
                      hide-details
                      v-model="RRN"
                    ></v-text-field>
                  </v-col>
                  <p style="margin: 0; display: flex; align-items: center;">
                    -
                  </p>
                  <v-col cols="2">
                    <v-text-field
                      single-line
                      solo
                      hide-details
                      v-model="RRNN"
                    ></v-text-field>
                  </v-col>
                  <p style="margin: 0 2px; display: flex; align-items: center;">
                    ●
                  </p>
                  <p style="margin: 0 2px; display: flex; align-items: center;">
                    ●
                  </p>
                  <p style="margin: 0 2px; display: flex; align-items: center;">
                    ●
                  </p>
                  <p style="margin: 0 2px; display: flex; align-items: center;">
                    ●
                  </p>
                  <p style="margin: 0 2px; display: flex; align-items: center;">
                    ●
                  </p>
                  <p style="margin: 0 2px; display: flex; align-items: center;">
                    ●
                  </p>
                </v-row>
              </div>
              <div class="cert-text">
                <h4 style="margin-bottom: 5px;">휴대폰번호</h4>
                <v-text-field
                  single-line
                  solo
                  hide-details
                  v-model="phoneNum"
                ></v-text-field>
              </div>
              <v-btn
                v-if="phoneCheck"
                :loading="loading"
                :disabled="loading"
                color="secondary"
                @click="sendText"
                width="100%"
              >
                인증번호 보내기
              </v-btn>
              <v-btn v-else color="secondary" disabled width="100%">
                인증번호 보내기
              </v-btn>
              <div class="cert-text">
                <h4 style="margin-bottom: 5px;">인증번호</h4>
                <v-text-field
                  single-line
                  solo
                  hide-details
                  v-model="certText"
                ></v-text-field>
              </div>
            </div>
            <v-btn color="orange" @click="certify" width="100%">
              인증 확인
            </v-btn>
          </v-card-text>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" text @click="close">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Certification",
  data() {
    return {
      dialog: false,
      loader: null,
      loading: false,
      name: "",
      RRN: "",
      RRNN: "",
      phoneNum: "",
      phoneCheck: false,
      certText: "",
      id: "zzzzzzzz",
      certification: false,
    };
  },
  methods: {
    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    sendText() {
      this.id = this.makeid();
      this.loader = "loading";
      setTimeout(() => {
        this.certText = this.id;
      }, 3000);
    },
    certify() {
      if (this.id === this.certText) {
        this.$store.state.checkList.certification = true;
        this.$store.commit("setMeFlag",true);
      } else {
        alert("인증 번호가 일치하지 않습니다.");
      }
    },
    close() {
      this.dialog = false;
      this.$router.go();
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
    phoneNum() {
      if (
        this.phoneNum.length === 11 &&
        this.RRN.length === 6 &&
        this.RRNN.length === 1 &&
        this.name
      ) {
        this.phoneCheck = true;
      } else {
        this.phoneCheck = false;
      }
    },
    name() {
      if (
        this.phoneNum.length === 11 &&
        this.RRN.length === 6 &&
        this.RRNN.length === 1 &&
        this.name
      ) {
        this.phoneCheck = true;
      } else {
        this.phoneCheck = false;
      }
    },
    RRNN() {
      if (
        this.phoneNum.length === 11 &&
        this.RRN.length === 6 &&
        this.RRNN.length === 1 &&
        this.name
      ) {
        this.phoneCheck = true;
      } else {
        this.phoneCheck = false;
      }
    },
    RRN() {
      if (
        this.phoneNum.length === 11 &&
        this.RRN.length === 6 &&
        this.RRNN.length === 1 &&
        this.name
      ) {
        this.phoneCheck = true;
      } else {
        this.phoneCheck = false;
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.cert-text {
  margin: 10px 0;
}
</style>
