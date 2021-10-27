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
        계약서 작성하기 📑
      </h1>
    </div>

    <div class="wrapB">
      <div style="text-align: center; margin-top: 45%">
        <img src="../../../public/img/아거.png" />
      </div>
      <v-row justify="center">
        <h2
          style="
            text-align: center;
            color: black;
            font-family: 'NEXON Lv1 Gothic OTF';
          "
        >
          집 계약이 얼마 남지 않았어요!🎉
        </h2>
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#FDD835" dark v-bind="attrs" v-on="on">
              계약서 보기
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span
                class="text-h5"
                style="
                  font-family: 'NEXON Lv1 Gothic OTF';
                  border: solid;
                  border-color: red;
                "
                >계약서</span
              >
            </v-card-title>
            <v-img src="../../../public/img/계약서.jpeg"></v-img>
            <DrawingCanvas />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                확인
              </v-btn>
              <v-btn color="red darken-1" text @click="dialog = false">
                취소
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <br /><br />
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from "../../components/common/BottomNavigation";
import DrawingCanvas from "../../components/contract/DrawingCanvas";

export default {
  components: {
    BottomNavigation,
    DrawingCanvas,
  },
  data() {
    return {
      dialog: false,
    };
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
</style>
