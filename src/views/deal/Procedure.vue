<template>
    <div id="procedure">
        <div class='procedure'>
            <div class='title'>
                전세자금대출
            </div>
            <div class="content">
                <Progress />
            </div>
        </div>
    </div>
</template>

<script>
import Progress from "../../components/deal/Progress.vue"
export default {
    components: {
        Progress,
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

#procedure {
    height: 100vh;
}
.procedure {
    height: 100vh;
    background-color: #F8F6E7;

}
#procedure .title {
    height: 8vh;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellowgreen;
    font-family: "NEXON Lv1 Gothic OTF" !important;
}
#procedure .content {
    height: 92vh;
    padding: 20px;
}
@media screen and (min-width: 900px) {
  .procedure {
    max-width: 580px;
    margin: auto;
  }
}
</style>