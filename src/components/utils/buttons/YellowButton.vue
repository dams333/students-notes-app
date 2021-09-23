<template>
    <button class="yellow-btn" :style='{"width": width, "height": height}'>{{ text }}</button>
</template>

<script>

export default {
    props: ['width', 'height', 'text']
}
</script>

<style scoped>
    .yellow-btn {
        background-color: #FEEAA5;
        color: #CF8421;
        font-size: 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
</style>
