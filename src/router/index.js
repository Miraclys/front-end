import { createRouter,createWebHistory } from "vue-router";
import RankPage from '../views/RankPage.vue'
import App from '../App.vue'
import HomePage from '../views/HomePage.vue'
// import PlusPage from '../views/PlusPage.vue'
import LoginPage from '../views/LoginPage.vue'
import UserPage from '../views/UserPage.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            // 访问根路径重定向到/home
            path: '/',
            redirect: '/login'
        },
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
        },
        {
            path:'/rank/user',
            component:UserPage
        }
    ]
})
export default router;