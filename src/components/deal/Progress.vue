<template>
    <div class="progress">
        <v-img class="progress-img" src="../../assets/images/friends2.png"></v-img>
        <div class="progress-content-before">
            <h2 class="progress-text">대출 진행중</h2>
            <div class="progress-loading">
                <beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
            </div>
        </div>
        <div class="progress-content-after">
            <h2 class="progress-text">대출 완료!</h2>
            <v-btn 
            color="yellow lighten-1"
            dark
            class="progress-sendBtn" 
            @click="$router.push('/remit')"
            style="color:black"
            >송금하기</v-btn>
        </div>
    </div>
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'

export default {
    components: {
        BeatLoader,
    },
    data() {
        return  {
            color: '#FDD835',
            size: '1.2em',
            radius: '2px'
        }
    },
    mounted() {
        setTimeout(() => {
            document.querySelector(".progress-content-before").style.display = "none"
            document.querySelector(".progress-content-after").style.display = "flex"
            
        }, 2000);
    }
}
</script>
    
<style>
.progress {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.progress-img {
    margin-top: 30vh;
    max-width: 300px;
}
.progress-content-before {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.progress-content-after {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.progress-text {
    margin-top: 1rem;
    color: rgb(80, 89, 97);
}
.progress-loading {
    margin-top: 1rem;
}
.progress-sendBtn {
    margin-top: 7vh;
}
</style>