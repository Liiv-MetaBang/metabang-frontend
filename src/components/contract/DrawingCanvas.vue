<template>
    <div class="drawing">

        <vue-drawing-canvas
            ref="VueCanvasDrawing"
            class='canvas'
            width="200"
            height="140"
            margin="0"
            :lock="disabled"
        />
        <div class="canvas-btns">
            <v-btn @click="reset">초기화</v-btn>

            <v-btn @click="save">
                <span v-if="!disabled">완료</span>
                <span v-else>수정</span>
            </v-btn>
        </div>
        <v-img :src="user.sign" style="max-height: 60px; max-width: 80px;"></v-img>
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
    },
    methods: {
        reset() {
            console.log(this.image)
            this.$refs.VueCanvasDrawing.reset()
            console.log("reset")
        },
        save() {
            var canvas = document.querySelector('.canvas')
            this.$store.state.user.sign = canvas.toDataURL()
            this.disabled = !this.disabled
        }
    }
}
</script>

<style>
.drawing {
    display: block;
    width: 204px;
}
.canvas {
    border: solid 2px;
    display: block;
    margin: 0;
}
</style>