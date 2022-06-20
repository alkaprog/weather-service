<template>
    <div class="wrapper" v-if="this.getforecastForToday">
        <!-- <div class="">{{ this.getforecastForToday }}</div> -->
        <div class="date-block">
            <div class="date">{{ formatDate(new Date()) }}</div>
            <div class="time">
                {{ new Date().getHours() + ":" + new Date().getMinutes() }}
            </div>
        </div>
        <div class="location-name">{{ this.getLocationName }}</div>
        <div class="weather">
            <div class="temperature">
                {{ this.getforecastForToday.main.temp }}
            </div>
            <img
                :src="
                    'http://openweathermap.org/img/wn/' +
                    this.getforecastForToday.weather[0].icon +
                    '@2x.png'
                "
                alt=""
                class="weather-icon"
            />
            <div class="weather-description">
                {{ this.getforecastForToday.weather[0].description }}
            </div>
        </div>

        <div class="hourly-forecast"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDate } from "../services/date.service";
export default {
    computed: {
        ...mapGetters({
            getLocationName: "getLocationName",
            getforecastForToday: "getforecastForToday",
        }),
    },
    methods: {
        formatDate,
    },
    props: {
        date: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
/* @font-face {
    font-family: "YS Text";
    src: url("../fonts/YandexSansText-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
} */

.wrapper {
    /* font-family: "Roboto", sans-serif; */
    font-weight: 600;
    background: #293c73;
    color: white;
    width: 600px;
    height: 200px;
    align-self: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px;
}
.wrapper .date-block {
    display: flex;
}
.wrapper .date-block .time {
    margin-left: 10px;
}
.wrapper .location-name {
    margin-top: 10px;
}
.wrapper .weather {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrapper .weather .temperature {
    font-size: 30px;
}
.wrapper .weather .weather-description {
    font-size: 30px;
}
</style>
