import { createRouter,createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue'
import RankPage from '../views/RankPage.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:HomePage,
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