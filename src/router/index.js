import { createRouter,createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:HomePage,
        },
        {
            path:'/login',
            component:LoginPage
        }
    ]
})
export default router;