import TodayForecastPage from "../pages/TodayForecastPage.vue";
import ThreeDaysForecast from "../pages/ThreeDaysForecastPage.vue";
import WeekForecast from "../pages/WeekForecastPage.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        component: TodayForecastPage,
    },
    {
        path: "/3-days",
        component: ThreeDaysForecast,
    },
    {
        path: "/week",
        component: WeekForecast,
    },
    {
        path: "/:city",
        component: TodayForecastPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
