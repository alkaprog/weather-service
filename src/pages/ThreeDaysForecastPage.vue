<template>
    <div>
        <div class="day-select-block">
            <!-- <div>{{ this.get() }}</div> -->
            <div v-for="day of this.weatherForecast" :key="day.date">
                <choose-day-card :dayInfo="day"></choose-day-card>
            </div>
        </div>
        <div class="selectedDay"></div>
    </div>
</template>

<script>
import ChooseDayCard from "../components/ChooseDayCard.vue";

import {
    getCityCoords,
    getWeatherByCoords,
    getThreeDaysForecast,
} from "../services/api.service.js";
export default {
    components: { ChooseDayCard },
    async mounted() {
        this.weatherForecast = await getThreeDaysForecast("Rostov-on-Don");
    },
    data: () => ({
        weatherForecast: [],
    }),
    methods: {
        async get() {
            const weather = await getWeatherByCoords("Rostov-on-Don");
            console.log(weather);
            const temp = await getCityCoords("Rostov-on-Don");
            console.log(temp);
            const temp2 = await getThreeDaysForecast("Rostov-on-Don");
            console.log(temp2);
            return JSON.stringify(123);
        },
    },
};
</script>

<style scoped>
.day-select-block {
    width: 900px;
    display: flex;
    justify-content: space-around;
}
</style>
