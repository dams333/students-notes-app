<template>
    <div class="graduation">
        <h3 class="graduation-title">{{ graduation.name }}</h3>
        <div class="graduation-note" :class='{"notValid": !graduation.valid}'>
            <h4 class="graduation-note-text">{{ graduation.note }}</h4>
        </div>
    </div>
</template>

<script>

export default {
    props: ['graduation']
}

</script>

<style scoped>
.graduation {
    width: 100%;
    margin-left: 7px;
    margin-right: 7px;
}

.graduation-title {
    text-align: center;
    font-size: 13px;
}

.graduation-note {
    width: 100%;
    height: 35px;
    background-color: #FEEAA5;
    color: #CF8421;
    border-radius: 10px;
}

.notValid {
    background-color: #FCBAD5;
    color: #E65271;
}

.graduation-note-text {
    text-align: center;
    font-size: 20px;
    padding-top: 7px;
}
</style>
