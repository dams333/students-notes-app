<template>
    <nav class="header">
        <h2 class="header-name">{{ $store.state.headerName }}</h2>
    </nav>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #8CBBF1;
}

.header-name {
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin-left: 15px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
</style>
