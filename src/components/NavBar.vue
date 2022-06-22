<template>
    <div class="navbar">
        <div class="title">Weather App</div>
        <button
            class="btn today"
            :class="activeTab == 'today' ? true : false"
            @click="$router.push('/')"
        >
            Сегодня
        </button>
        <button
            class="btn three-days"
            :class="isActive"
            @click="$router.push('/3-days')"
        >
            3 дня
        </button>
        <button
            class="btn week"
            :class="isActive"
            @click="$router.push('/week')"
        >
            Неделя
        </button>
    </div>
</template>

<script>
export default {
    data: () => ({
        activeTab: "today",
    }),
};
</script>

<style scoped>
.navbar {
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #293c73;
}
.btn {
    margin-left: 10px;
    color: white;
    height: 100%;
    width: 100px;
    outline: none;
    border: none;
    background: inherit;
}
.btn:hover {
    background: lightgray;
    cursor: pointer;
    color: #293c73;
}
.btn.active {
    background: lightgray;
}

.title {
    margin-left: 10px;
}
</style>
