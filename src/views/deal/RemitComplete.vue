<template>
    <div id="remit-complete">
        <div class='remit-complete'>
            <div class='title'>
                이체
            </div>
            <div class="content">
                <v-img class="complete-img" src="../../assets/images/characters/비비2.png"></v-img>
                <div class="complete-text" style="font-family: NEXON Lv1 Gothic OTF' !important;">
                    <div class="complete-text-amount" >{{ amount }}원</div>
                    <h3>송금 완료</h3>
                </div>
                <div class="complete-box" style="font-family: NEXON Lv1 Gothic OTF' !important;">
                    <div class="complete-lessor">
                        <div class='complete-lessor-title'>
                            받는 사람
                        </div>
                        <div class='complete-lessor-content'>
                            {{ lessor.user_name }}
                        </div>
                    </div>
                    <div class="complete-lessor">
                        <div class='complete-lessor-title'>
                            날짜
                        </div>
                        <div class='complete-lessor-content'>
                            {{ today }}
                        </div>
                    </div>
                    <v-btn color="#FFCC00" class="complete-btn" @click="gotoChecklist">확인</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    },
    computed: {
        amount() {
            return this.$store.state.amount
        },
        lessor() {
            return this.$store.state.lessor
        },
        today() {
            return this.$store.state.today
        }
    },
    methods:{
        gotoChecklist(){
            this.$router.push(`/checklist`)
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

#remit-complete {
    height: 100vh;
}
.remit-complete {
    height: 100vh;
}
#remit-complete .title {
    height: 8vh;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellowgreen;
    font-family: "NEXON Lv1 Gothic OTF" !important;
}
#remit-complete .content {
    height: 92vh;
    padding: 20px;
    position: relative;
}
@media screen and (min-width: 900px) {
  .remit-complete {
    max-width: 580px;
    margin: auto;
  }
}
.complete-img {
    margin: 15vh auto 0 auto;
    max-width: 40vw;
}
.complete-text {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-top: 3vh;
    color: gray;
    font-size: 1.5rem;
    font-family: "NEXON Lv1 Gothic OTF" !important;
}
.complete-box {
    margin-top: 18vh;
}
.complete-lessor {
    background-color: rgb(240, 240, 240);
    display: flex;
    margin: 0.4rem 1rem;
    font-size: 1rem;
    color: rgb(60, 60, 60);
    border-radius: 6px 6px 6px 6px / 6px 6px 6px 6px;
}
.complete-lessor-title {
    
    text-align: center;
    width: 30%;
}
.complete-lessor-content {
    width: 70%;
    text-align: end;
    padding-right: 10px;
}
.complete-btn {
    display: flex;
    width: 90%;
    margin:  5vh auto 0 auto;
}
</style>