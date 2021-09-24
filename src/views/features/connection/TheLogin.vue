<template>
  <div class="form">
    <yellow-input class="element" width="226px" height="50px" placeholder="Pseudo" type="text" v-model="form.username"/>
    <yellow-input class="element" width="226px" height="50px" placeholder="Mot de passe" type="password" v-model="form.password"/>
    <purple-button @click='log' class="element" width="250px" height="50px" text="Connexion"/>
  </div>
</template>

<script>
import PurpleButton from '../../../components/utils/buttons/PurpleButton.vue'
import YellowInput from '../../../components/utils/inputs/YellowInput.vue'

export default {
  components: { YellowInput, PurpleButton },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    log() {
      this.$router.push('/profile')
      this.$store.state.headerName = "Mon Profil";
    }
  }
}

</script>

<style scoped>
.form {
    margin-left: calc(50% - 125px);
}
.element {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>
