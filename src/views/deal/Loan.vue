<template>
    <div id="loan">
        <div class='loan'>
            <div class='title'>
                전세자금대출
            </div>
            <div class="content">
                <LoanList />
            </div>
        </div>
    </div>
</template>

<script>
import LoanList from "../../components/deal/LoanList.vue"

export default {
    components: {
        LoanList
    }
}
</script>

<style>
#loan {
    height: 100vh;
}
.loan {
    height: 100vh;
}
#loan .title {
    height: 8vh;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
}
#loan .content {
    height: 92vh;
    padding: 20px;
}
@media screen and (min-width: 900px) {
  .loan {
    max-width: 580px;
    background-color: gainsboro;
    margin: auto;
  }
}
</style>