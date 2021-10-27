<template>
    <div class="drawing">
        <div class='sign'>
            <div>
                <span style="font-family: 'NEXON Lv1 Gothic OTF';">임차인</span>

                <v-img class="lessor-sign" :src="lessor.sign">
                </v-img>
                
            </div>
            <div>
                <span style="font-family: 'NEXON Lv1 Gothic OTF';">임대인</span>
                <vue-drawing-canvas
                    ref="VueCanvasDrawing"
                    class='canvas'
                    width="150"
                    height="80"
                    margin="0"
                    :lock="disabled"
                />
                <v-btn @click="reset">초기화</v-btn>

                <v-btn @click="save">
                    <span v-if="!disabled">완료</span>
                    <span v-else>수정</span>
                </v-btn>
            </div>
        </div>
        
        <v-img :src="user.sign"></v-img>
    </div>
</template>

<script>
import VueDrawingCanvas from 'vue-drawing-canvas';

export default {
    components: {
        VueDrawingCanvas,
    },
    data() {
        return {
            disabled: false,
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        lessor() {
            return this.$store.state.lessor
        },
    },
    methods: {
        reset() {
        },
        save() {
            var canvas = document.querySelector('.canvas')
            this.$store.state.user.sign = canvas.toDataURL()
            if (this.disabled) {
                this.$refs.VueCanvasDrawing.reset()
            }
            this.disabled = !this.disabled
        }
    }
}
</script>

<style>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.drawing {
    display: block;
    width: 330px;
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
.canvas {
    border: solid 2px;
    display: block;
    margin: 0;
}
</style>