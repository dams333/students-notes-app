<template>
    <div class="branch">
        <h2 class="branch-name">{{ branch.name }}</h2>
        <div class="branch-note" :class='{"failed": branch.note < 4}'>
            <h3 class="note">{{ branch.note }}</h3>
        </div>
        <img class="finger-icon" src="../../assets/finger.png"/>
    </div>
</template>

<script>

export default {
  props: ['branch']
}

</script>

<style scoped>
.branch {
    width: 75px;
    height: 75px;
    background-color: rgba(215, 221, 233, 0.4);
    border-radius: 10px;
    margin-bottom: 10px;
}

.branch-name {
    font-size: 10px;
    margin-top: 5px;
    width: 70px;
    margin-left: 2.5px;
    margin-right: 2.5px;
    text-align: center;
}

.branch-note {
    width: 40px;
    height: 20px;
    background-color: #FEEAA5;
    color: #CF8421;
    margin-left: 17.5px;
    border-radius: 10px;
    margin-top: 5px;
}
.failed {
    background-color: #FCBAD5;
    color: #E65271;
}

.note {
    font-size: 15px;
    text-align: center;
    margin-top: 1px;
}

.finger-icon {
    width: 15px;
    height: 15px;
    margin-left: 30px;
    transform: rotate(-25deg);
}
</style>
