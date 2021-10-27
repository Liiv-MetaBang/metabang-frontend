<template>
  <div class="wrap components-page">
    <div class="wrap">
      <h1
        style="background:yellow; height:60px; display: flex; justify-content: center; align-items: center;"
      >
        방문 예약 📞
      </h1>
    </div>
    <div class="wrapB">
      <br /><br /><br /><br /><br><br>
      <div style="text-align:center">
        <img src="../../../public/img/라무.png" />
      </div>
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="날짜"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>

          <v-date-picker v-model="date" no-title scrollable color="orange">
            <v-spacer></v-spacer>

            <v-btn text color="#00C853" @click="$refs.menu.save(date)">
              확인
            </v-btn>
            <v-btn text color="#FF5722" @click="menu = false">
              취소
            </v-btn>
          </v-date-picker>
        </v-menu>

        <!--
        <v-text-field
          v-model="date"
          :counter="10"
          :rules="dateRules"
          label="날짜"
          required
        ></v-text-field>
        -->

        <v-select
          v-model="time"
          :items="items"
          :rules="[(v) => !!v || '시간을 선택해주세요~']"
          label="시간"
          required
          prepend-icon="mdi-alarm"
        ></v-select>

        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || '동의하셔야 계속 할 수 있어요!']"
          label="방문예약 내용을 다시 확인하셨나요?"
          required
          @click="check"
        ></v-checkbox> -->

        <!--
        <v-btn
          :disabled="!valid"
          color="yellow"
          class="mr-4"
          @click="validate"
          style="margin:1% 17%;"
        >
          예약하기
        </v-btn>
        -->
        <br><br>
        <v-row
          style="display: flex; justify-content:center; align-items: center;"
        >
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="gray lighten-2"
                  style="background:gray; color:white"
                  v-bind="attrs"
                  v-on="on"
                  disabled
                  v-if="valid"
                  
                >
                  예약하기
                </v-btn>
                <v-btn
                  color="red lighten-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  v-else
                  @click="validate"
                >
                  예약하기
                </v-btn>
              </template>

              <v-card>
                <v-card-title
                  class="text-h5 lighten-2"
                  style="background:#FFEB3B;font-family: 'NEXON Lv1 Gothic OTF';"
                >
                  METABANG
                </v-card-title>

                <v-card-text
                  style="margin:5% 0; font-family: 'NEXON Lv1 Gothic OTF';font-size:medium"
                >
                  방문 예약이 완료되었습니다!
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="gray" text @click="confirm">
                    확인
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          <div style="width: 50px;"></div>
          <v-btn color="orange" style="color:white" @click="reset">
            재작성
          </v-btn>
        </v-row>
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
    // date: "",
    // dateRules: [
    //   (v) => !!v || "날짜를 기입하세요!",
    //   (v) => (v && v.length <= 10) || "Date must be less than 10 characters",
    // ],
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
    check: false,
    checkbox: false,
    time: false,

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    dialog: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    confirm() {
      this.dialog = false;
      this.$router.push(`/`);
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
