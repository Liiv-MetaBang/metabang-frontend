<template>
    <div id="remit">
        <div class='remit'>
            <div class='title'>
                송금하기
            </div>
            <div class="content">
                <v-card class="remit-box sender">
                    <h5>출금 계좌번호</h5>
                    <v-avatar size='1.5rem'>
                        <img
                            src="../../assets/images/kblogo.png"
                        >
                    </v-avatar>
                </v-card>
                <v-card class="remit-box recipient">

                </v-card>
                <v-card class="remit-box amount">

                </v-card>
                <v-card class="remit-box sign">

                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

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
    background-color: gainsboro;
}
#remit .content {
    height: 92vh;
    padding: 20px;
}
@media screen and (min-width: 900px) {
  .remit {
    max-width: 580px;
    margin: auto;
  }
}
.remit-box {
    margin-top: 2vh;
    height: 18vh;
}
</style>