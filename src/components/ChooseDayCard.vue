<template>
    <div
        class="wrapper"
        :class="{ active: isActive }"
        @click="this.toggleActive"
    >
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
    methods: {
        toggleActive() {
            console.log(1);
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped>
.wrapper {
    min-width: 100px;
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px blue solid;
    border-radius: 3px;
    cursor: pointer;
}
.weather-icon {
    height: 40px;
}
.wrapper.active {
    border: 3px blue solid;
}
</style>
