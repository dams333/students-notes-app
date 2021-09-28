<template>
  <div>
    <add-quick-note />
    <current-year @click="goToCurrentYear"/>
    <blue-button @click="goToCurrentYear" class="btn" width="200px" height="50px" text="Détails des notes"/>
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
  },
  methods: {
    goToCurrentYear() {
      this.$router.push('/current')
    }
  },
  created() {
      this.$store.commit('setHeaderName', 'Profil');
  }
}

</script>

<style scoped>
.btn {
  margin-left: calc(50% - 100px);
  margin-top: 20px;
}
</style>
