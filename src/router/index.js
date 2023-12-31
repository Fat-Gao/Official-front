import { createRouter, createWebHistory } from "vue-router";
import AddUs from '../components/AddUs';
import AboutUs from '../components/AboutUs';
import ESG from '../components/ESG';
import Products from '../components/Products';
import Login from '../components/Login';
import Home from '../components/Home';

const routes =[
    {
        path: "/",
        redirect:'/home',
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/addus',
        component: AddUs
    },
    {
        path:'/aboutus',
        component: AboutUs
    },
    {
        path:'/esg',
        component: ESG
    },
    {
        path:'/products',
        component: Products
    },
    {
        path:'/login',
        component:Login
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
