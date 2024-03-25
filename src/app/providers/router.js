import {createRouter, createWebHistory} from "vue-router";
import {routerPathsEnum} from "@/shared/routerPathsEnum.js";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: routerPathsEnum.main,
            name: "Main",
            meta: {
                title: "Main"
            },
            component: () => import("@/pages/main/")
        },
        {
            path: '/:pathMatch(.*)*',
            name: "Not Found",
            meta: {
                title: "Not Found"
            },
            component: () => import("@/pages/error404/")
        }
    ]
})