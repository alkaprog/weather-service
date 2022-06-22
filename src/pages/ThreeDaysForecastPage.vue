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
import ChooseDayCard from "../components/SmallWeatherCard.vue";

import {
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
};
</script>

<style scoped>
.day-select-block {
    width: 900px;
    display: flex;
    justify-content: space-around;
}
</style>
