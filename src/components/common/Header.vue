<template>
    <div class="header-default">

        <button class="menu" v-if="!isBack"></button>
        <button v-if="isBack" class="back">
            <i class="fas fa-chevron-left"></i>
        </button>

        <h4 class="title" >
            {{headerTitle}}
        </h4>

        <button v-if="rightText" class="right-text" :class="{disabled:isDisabled}" :disabled="isDisabled">
            {{rightText}}
        </button>

        <button class="btn-search" v-if="isSearch">
            <i class="fas fa-search"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: "header",
        props : ['headerTitle', 'isBack', 'isSearch', 'rightText', 'isDisabled'],
    }
</script>

<style>
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
