<template>
  <div class="form">
    <yellow-input class="element" width="226px" height="50px" placeholder="Pseudo" type="text" v-model:selected='form.username'/>
    <h5 v-if='errors.includes("username")' class="error">Impossible de trouver cet utilisateur</h5>
    <yellow-input class="element" width="226px" height="50px" placeholder="Mot de passe" type="password" v-model:selected='form.password'/>
    <purple-button @click='log' class="element" width="250px" height="50px" text="Connexion"/>
    <h5 v-if='errors.includes("password")' class="error">Le mot de passe ne correpond pas</h5>
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
      },
      errors: []
    }
  },
  methods: {
    async log() {
      this.errors = [];
      this.$store.dispatch('log', this.form)
        .then(res => {
          if(res.status === 404) {
            this.errors.push('username');
          } else if (res.status === 500) {
            this.errors.push('password');
          } else if(res.status === 201) {
            this.$store.dispatch('addCookie', res.user.session)
              .then(() => {
                this.$router.push('/profile')
              })
          }
        })
    }
  },
  created() {
      this.$store.commit('setHeaderName', 'Connexion');
  }
}

</script>

<style scoped>
.form {
    margin-left: calc(50% - 125px);
}
.element {
    margin-top: 15px;
}

.error {
  margin-top: 2px;
  margin-left: 15px;
  font-size: 12px;
}
</style>
