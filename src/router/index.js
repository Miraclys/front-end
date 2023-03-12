import { createRouter,createWebHistory } from "vue-router";
import LoginPage from '../views/LoginPage.vue'
import RankPage from '../views/RankPage.vue'
import App from '../App.vue'
import HomePage from '../views/HomePage.vue'

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
            path:'/login',
            component:LoginPage
        },
        {
            path:'/rank',
            component:RankPage
        }
    ]
})
export default router;