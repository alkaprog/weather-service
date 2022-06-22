<template>
    <div class="wrapper">
        <img
            class="weather-icon"
            :src="
                'http://openweathermap.org/img/wn/' +
                this.dayInfo.icon +
                '@2x.png'
            "
            alt="weather-icon"
        />
        <div class="temperature">{{ this.dayInfo.temperature }}°</div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isActive: false,
    }),
    props: {
        dayInfo: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.wrapper {
    min-width: 100px;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
}
.wrapper:hover {
    background: lightgrey;
}
.weather-icon {
    height: 40px;
}
</style>
