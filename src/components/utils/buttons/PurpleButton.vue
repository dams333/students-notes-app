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
        background-color: #FCBAD5;
        color: #E65271;
        font-size: 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }
</style>
