<template>
    <div class="navbar">
        <div class="title">Weather App</div>
        <button class="change-page-btn" @click="$router.push('/')">
            Today
        </button>
        <button class="change-page-btn" @click="$router.push('/3-days')">
            3 days
        </button>
        <button class="change-page-btn" @click="$router.push('/week')">
            Week
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: lightblue;
}
.change-page-btn {
    height: 100%;
    width: 100px;
    outline: none;
    border: none;
    background: inherit;
    margin-left: 10px;
}
.change-page-btn:hover {
    background: blue;
    cursor: pointer;
    color: white;
}
.title{
    margin-left: 10px;
}
</style>
