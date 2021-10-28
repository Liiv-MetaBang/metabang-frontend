import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const state = {
    isUser: false,
    user: {
        account: "123456-01-112233",
        email: "Kookmin@gmail.com",
        role: 1,
        user_name: "김국민",
        sign: '',
        gender: 0,
        age: 22,
        reason: 4,
    },
    lessor: {
        account: "987654-02-445566",
        email: "lessor@gmail.com",
        role: 2,
        user_name: "박대인",
        sign: 'data:image/png;base64,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',
    },
    amount: "",
    today: "",
    filtering: {
        si: "",
        gu: "",
        maxprice:"",
        minprice:"",
    },
    maemul: {
        address: '',
        area: '',
        build_date: '',
        house_id: '',
        house_name: '',
        lat: '',
        layer: '',
        lng: '',
        price: '',
        thumbnail: '',
    },
    checkList: {
        loan: false,
        right: false,
        certification: false,
        special: false,
        date: false,
    },
    flag:{
        loan_flag:false,
        contract_flag:false,
        me_flag:false,
    }
}

const mutations = {
    setAmount(state, amount) {
        state.amount = amount
    },
    setSign(state, sign) {
        state.user.sign = sign
    },
    setUser(state, user) {
        state.user = user
    },
    setDate(state, today) {
        state.today = today
    },
    setFiltering(state, filtering) {
        state.filtering = filtering
    },
    setMaemul(state, maemul) {
        state.maemul = maemul
    },
    setCheckList(state, checkList) {
        state.checkList = checkList
    },
    setLoanFlag(state, flag){
        /* state.flag = {
        loan_flag:false,
        mamul_flag:false
        }*/
        state.flag.loan_flag=flag
    },
    setMeFlag(state,flag){
        state.flag.me_flag=flag
    },
    setContractFlag(state, flag){
        state.flag.contract_flag=flag
    }
    // setRight(state, right) {
    //     state.maemul.right = right
    // },
    // setLoan(state, loan) {
    //     state.maemul.loan = loan
    // },
    // setCertification(state, certification) {
    //     state.maemul.certification = certification
    // },
    // setSpecial(state, special) {
    //     state.maemul.special = special
    // },
    // setDate(state, date) {
    //     state.maemul.date = date
    // }
}

const getters = {
    
}

const actions = {
    
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        }),
    ],
})