<template>
    <button class="blue-btn" :style='{"width": width, "height": height}'>{{ text }}</button>
</template>

<script>

export default {
    props: ['width', 'height', 'text']
}
</script>

<style scoped>
    .blue-btn {
        background-color: #8CBBF1;
        color: #175980;
        font-size: 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
</style>
