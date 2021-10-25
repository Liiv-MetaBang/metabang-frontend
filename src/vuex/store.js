import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    isUser: false,
    user: {
        account: "123456-01-112233",
        email: "test@gmail.com",
        role: 1,
        user_name: "김국민"
    },
    lessor: {
        account: "987654-02-445566",
        email: "lessor@gmail.com",
        role: 2,
        user_name: "박대인"
    },
    amount: "",
    today: "",
    filtering: {
        si: "",
        gu: "",
        price:"",
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})