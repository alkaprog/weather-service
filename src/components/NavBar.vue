<template>
    <div class="navbar">
        <h1 class="title">Weather App</h1>
        <button @click="$router.push('/')">Today</button>
        <button @click="$router.push('/3-days')">3 days</button>
        <button @click="$router.push('/week')">Week</button>
    </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    width: 100%;
    height: 100px;
    background: lightblue;
}
</style>
