

import Login from './views/user/Login.vue'
import Join from './views/user/Join.vue'
import FeedMain from './views/feed/IndexFeed.vue'
import Components from './views/Components.vue'
import Checklist from './views/contract/Checklist.vue'
import Reservation from './views/contract/Reservation.vue'

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
        path: '/checklist',
        name: 'Checklist',
        component: Checklist
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
    },
]
