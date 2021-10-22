import Login from './views/user/Login.vue'
import Join from './views/user/Join.vue'
import FeedMain from './views/feed/IndexFeed.vue'
import Components from './views/Components.vue'
import RealestateSearch from './views/realestate/Search.vue'
import Checklist from './views/contract/Checklist.vue'
import Test from './components/HelloWorld.vue'
import Reservation from './views/contract/Reservation.vue'
import Loan from './views/deal/Loan.vue'
import Procedure from "./views/deal/Procedure.vue"
import Remit from "./views/deal/Remit.vue"
import Contract from './views/contract/Contract.vue'

export default [


    {
        path : '/',
        name : 'Login',
        component : Login
    },
    {
        path : '/user/join',
        name : 'Join',
        component : Join
    },
    {
        path : '/feed/main',
        name : 'FeedMain',
        component : FeedMain
    },
    {
        path : '/components',
        name : 'Components',
        component : Components
    },
    {
        path : '/realestate/search',
        name : 'RealestateSearch',
        component : RealestateSearch
    },
    {
        path: '/checklist',
        name: 'Checklist',
        component: Checklist
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
    },
    {
        path: '/loan',
        name: 'Loan',
        component: Loan
    },
    {
        path: "/loan/procedure",
        name: "Procedure",
        component: Procedure
    },
    {
        path: "/remit",
        name: "Remit",
        component: Remit
    },
    {
        path: '/contract',
        name:'Contract',
        component: Contract
    }
]
