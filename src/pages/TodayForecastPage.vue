<template>
    <div class="wrap" v-if="this.getWeatherInfoForFourDays">
        <!-- {{ this.getWeatherInfoForFourDays }} -->
        <div class="day-cards">
            <choose-day-card
                v-for="day in this.getWeatherInfoForFourDays"
                :key="day"
                :dayInfo="this.getWeatherInfoForFourDays[day]"
            ></choose-day-card>
        </div>
        <main-day-card :date="new Date()"></main-day-card>
    </div>
</template>

<script>
// import ChooseDayCard from "@/components/ChooseDayCard.vue";
import { mapActions, mapGetters } from "vuex";
import MainDayCard from "../components/MainDayCard.vue";
// import { getWeather } from "../services/api.service.js";
export default {
    components: { MainDayCard },
    mounted() {
        // console.log(123);
        this.refreshForecastForToday();
        this.refreshForecastForFiveDays();
        // console.log(this.getWeatherInfoForFourDays);
        // $state.forecast.
    },
    methods: {
        ...mapActions({
            refreshForecastForToday: "refreshForecastForToday",
            refreshForecastForFiveDays: "refreshForecastForFiveDays",
        }),
    },
    computed: {
        ...mapGetters({
            getForecastForFiveDays: "getForecastForFiveDays",
            getWeatherInfoForFourDays: "getWeatherInfoForFourDays",
        }),
    },
};
</script>

<style scoped>
.wrap {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.day-cards {
    border: 1px black solid;
    height: 100px;
    width: 100%;
}
</style>
