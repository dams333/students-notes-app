<template>
    <div class="current-year">
        <h3 class="current-element current-title">Année en cours</h3>
        <div class="current-graduation">
            <graduation v-for='(graduation, index) in graduations' :key='index' :graduation='graduation'/>
        </div>
    </div>
</template>

<script>
import Graduation from './Graduation.vue'

export default {
  components: { Graduation },
    data() {
        return {
            graduations: [
                {
                    name: 'Panier',
                    note: '18 / 16',
                    valid: true
                },
                {
                    name: 'Total',
                    note: '39 / 36',
                    valid: true
                },
                {
                    name: 'Insufffisantes',
                    note: '5 / 4',
                    valid: false
                }
            ]
        }
    }
}

</script>

<style scoped>
.current-year {
    height: 100px;
    width: 300px;
    background-color: rgba(215, 221, 233, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
}

.current-element {
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
}

.current-title {
    text-align: center;
}

.current-graduation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
}
</style>
