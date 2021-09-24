<template>
  <div>
    <add-quick-note />
    <current-year />
    <blue-button class="btn" width="200px" height="50px" text="Détails des notes"/>
  </div>
</template>

<script>
import AddQuickNote from '../components/features/AddQuickNote'
import CurrentYear from '../components/features/CurrentYear/CurrentYear.vue'
import BlueButton from '../components/utils/buttons/BlueButton.vue'

export default {
  components: {
    AddQuickNote,
    CurrentYear,
    BlueButton
  }
}

</script>

<style scoped>
.btn {
  margin-left: calc(50% - 100px);
  margin-top: 20px;
}
</style>
