import { createRouter, createWebHistory } from 'vue-router'
import Product from './views/Product/index.vue'
const routes = [
    { path: '/', component: Product, name: 'product' },
]


export const router = createRouter({
    history: createWebHistory(),
    routes,
})


