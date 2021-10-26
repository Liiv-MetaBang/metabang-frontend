<template>
  <div class="wrap components-page">
    <div class="wrap">
      <h1
        style="background:yellowgreen; height:60px; display: flex; justify-content: center; align-items: center;"
      >
        방문 예약 📞
      </h1>
    </div>
    <div class="wrapB">
      <br /><br /><br /><br />
      <div style="text-align:center">
        <img src="../../../public/img/라무.png" />
      </div>
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="date"
          :counter="10"
          :rules="dateRules"
          label="날짜"
          required
        ></v-text-field>

        <v-select
          v-model="time"
          :items="items"
          :rules="[(v) => !!v || '시간을 선택해주세요~']"
          label="시간"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || '동의하셔야 계속 할 수 있어요!']"
          label="방문예약 내용을 다시 확인하셨나요?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="yellow"
          class="mr-4"
          @click="validate"
          style="margin:1% 17%;"
        >
          예약하기
        </v-btn>

        <v-btn color="orange" class="mr-4" @click="reset" style="margin:1% 17%">
          재작성
        </v-btn>
      </v-form>
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
  data: () => ({
    date: "",
    dateRules: [
      (v) => !!v || "날짜를 기입하세요!",
      // (v) => /.+@.+\..+/.test(v) || "Date must be valid",
      (v) => (v && v.length <= 10) || "Date must be less than 10 characters",
    ],
    select: null,
    items: [
      "09:00~10:00",
      "10:00~11:00",
      "1:00~2:00",
      "2:00~3:00",
      "3:00~4:00",
      "4:00~5:00",
      "5:00~6:00",
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
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
  background: linear-gradient(to right, yellow, yellowgreen);
  width: 100%;
}

.wrap {
  padding-bottom: 0px;
}
</style>
