<template>
    <div>
        <v-card class="loan-card">
            <div class='loan-header'>
                <h2 class="loan-title">{{ list.name }}</h2>
                <v-chip
                    class="ma-2 loan-chip"
                    color="orange"
                    text-color="white"
                    label
                >
                    {{ list.bank }}
                </v-chip>
            </div>
            <v-divider></v-divider>
            <div class='loan-content'>
                <div class="loan-icongroup">
                    <div class="loan-icon">
                        <img
                            src="../../assets/images/calendar.png"
                            alt="John"
                            class="loan-avatar"
                        >
                        <div class='icon-title'>
                            <h5>최장</h5>
                            <h3>{{ list.term }}</h3>
                        </div>
                    </div>
                    <div class="loan-icon">
                        <img
                            src="../../assets/images/money.png"
                            alt="John"
                            class="loan-avatar"
                        >
                        <div class='icon-title'>
                            <h5>최대</h5>
                            <h3>{{ list.max }}</h3>
                        </div>
                    </div>
                </div>
                <div
                    v-for="(feature, idx) in list.features"
                    :key="idx"
                    class="loan-feature-list"
                >
                    <div>
                        <div class='loan-feature-item'>
                            <h6 class="loan-feature-icon">●</h6>
                            <h4 class="loan-feature-text">{{ feature }}</h4> </div>
                    </div>
                </div>
                <v-card color="grey lighten-3" class="loan-condition">
                    <h5 class='loan-condition-text'>! {{ list.condition }}</h5>
                </v-card>
            </div>
            <div class="loan-footer">
                <v-btn class="loan-btn" color="orange lighten-2" dark :href="list.url">자세히 보기</v-btn>
                <v-btn class="loan-btn" color="brown lighten-1" dark @click="$router.push('/loan/procedure')">대출 받기</v-btn>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "LoanDetail",
    components: {

    },
    props: {
        list: Object,
    },
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {
        console.log(this.list)
    },

}
</script>

<style>
.loan-card {
    padding: 12px;
    margin-bottom: 10px;
    min-height: 30vh;
}
.loan-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.loan-header .loan-title {
    margin-left: 10px;
}
.loan-chip {
    min-width: 6rem;
}
.loan-content {
    margin-top: 10px;
}
.loan-avatar {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 1rem;
}
.loan-icongroup {
    display: flex;
    justify-content: space-around;
}
.loan-icon {
    display: flex;
}
.loan-feature-list {
    padding: 0 20px;
    margin-top: 1rem;
}
.loan-feature-item {
    display: flex;
    align-items: center;
    color: gray;
}
.loan-feature-icon {
    margin-right: 0.7rem;
}
.loan-feature-text {
}
.loan-condition {
    margin-top: 0.5rem;
    padding: 0.5rem 1.4rem;
    background-color: lightgray;
}
.loan-condition-text {
    color: red;
}
.loan-footer {
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
}
.loan-btn {
    width: 9rem;
}
</style>