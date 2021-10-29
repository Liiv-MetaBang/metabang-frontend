<template>
  <div id="remit">
    <div class="remit">
      <div class="title">
        이체
      </div>
      <div class="content">
        <v-card class="remit-card">
          <div class="sender">
            <v-img
              class="remit-character"
              src="../../assets/images/characters/비비1.png"
            ></v-img>
            <div class="sender-text">
              <h4 class="sender-title">보내는 사람</h4>
              <div>
                <h2>{{ user.user_name }}</h2>
              </div>
            </div>
          </div>
          <h4 class="sender-title">출금 계좌번호</h4>
          <div class="remit-account">
            <v-avatar size="1.5rem" class="remit-icon">
              <img src="../../assets/images/kblogo.png" />
            </v-avatar>
            <h3>{{ user.account }}</h3>
          </div>
          <v-divider></v-divider>
        </v-card>
        <div class="amount">
          <div class="amount-text">{{ amount }}원</div>
        </div>
        <v-img
          class="remit-sendImg"
          src="../../assets/images/receive-amount.png"
        ></v-img>
        <v-card class="remit-card" style="margin:0">
          <div class="lessor">
            <v-img
              class="remit-character"
              src="../../assets/images/characters/콜리1.png"
            ></v-img>
            <div class="lessor-text">
              <h4 class="lessor-title">받는 사람</h4>
              <div>
                <h2>{{ lessor.user_name }}</h2>
              </div>
            </div>
          </div>
          <h4 class="lessor-title">입금 계좌번호</h4>
          <div class="remit-account">
            <v-avatar size="1.5rem" class="remit-icon">
              <img src="../../assets/images/kblogo.png" />
            </v-avatar>
            <h3>{{ lessor.account }}</h3>
          </div>
          <v-divider></v-divider>
        </v-card>
        <v-btn class="remit-btn" color="#FFCC00" @click="remit">송금하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Remit",
  components: {},
  data() {
    return {};
  },
  methods: {
    remit() {
      this.$store.state.checkList.right = true;

      const today = new Date();

      const year = today.getFullYear();
      const month = ("0" + (today.getMonth() + 1)).slice(-2);
      const day = ("0" + today.getDate()).slice(-2);
      const hour = ("0" + today.getHours()).slice(-2);
      const minute = ("0" + today.getMinutes()).slice(-2);

      const dateString = `${year}년 ${month}월 ${day}일 ${hour}:${minute}`;
      this.setDate(dateString);
      this.$router.push("/remit/complete");
    },
    ...mapMutations({
      setDate: "setDate",
    }),
  },
  mounted() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    lessor() {
      return this.$store.state.lessor;
    },
    amount() {
      return this.$store.state.amount;
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

#remit {
  height: 100vh;
}
.remit {
  height: 100vh;
}
#remit .title {
  height: 8vh;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  font-family: "NEXON Lv1 Gothic OTF" !important;
}
#remit .content {
  height: 92vh;
  padding: 20px;
  position: relative;
}
@media screen and (min-width: 900px) {
  .remit {
    max-width: 580px;
    margin: auto;
  }
}
.remit-card {
  margin-top: 4vh;
  margin-bottom: 3vh;
  padding: 2rem 2rem 1rem 2rem;
}
.remit-box {
  margin-top: 2vh;
  margin-bottom: 3vh;
}
.sender {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2vh;
}
.remit-character {
  max-width: 3rem;
}
.sender-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sender-title {
  color: gray;
}
.remit-account {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 3px;
}
.remit-icon {
  margin: 0 5px;
}
.lessor {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2vh;
}
.lessor-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lessor-title {
  color: gray;
}
.remit-sendImg {
  max-width: 4rem;
  margin: auto;
}
.amount {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: end;
}
.amount-text {
  font-size: 1.2rem;
  color: gray;
  margin: 0;
}
.remit-btn {
  width: 100%;
  margin-top: 4vh;
}
</style>
