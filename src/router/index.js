import { createRouter,createWebHistory } from "vue-router";
import RankPage from '../views/RankPage.vue'
import App from '../App.vue'
import HomePage from '../views/HomePage.vue'
import PlusPage from '../views/PlusPage.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:App,
        },
        {
            path:'/home',
            component:HomePage
        },
        {
            path:'/plus',
            component:PlusPage
        },
        {
            path:'/rank',
            component:RankPage
        }
    ]
})
export default router;