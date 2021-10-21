<template>
    <div id="procedure">
        <div class='procedure'>
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
export default {

}
</script>

<style>
#procedure {
    height: 100vh;
}
.procedure {
    height: 100vh;
}
#procedure .title {
    height: 8vh;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
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