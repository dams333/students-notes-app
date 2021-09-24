<template>
    <input :type="type" :placeholder='placeholder' class="yellow-input" :style='{"width": width, "height": height}'/>
</template>

<script>

export default {
    props: ['width', 'height', 'placeholder', 'type']
}
</script>

<style scoped>
    .yellow-input {
        background-color: #FEEAA5;
        color: #CF8421;
        font-size: 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 17px;
        border: solid 2px transparent;
        padding-left: 10px;
        padding-right: 10px;
    }
    .yellow-input:focus {
        border: solid 2px #CF8421;
    }
    ::placeholder {
        color: #CF8421;
    }
    :-ms-input-placeholder{
       color: #CF8421;
    }
    ::-ms-input-placeholder{
        color: #CF8421;
    }
</style>
