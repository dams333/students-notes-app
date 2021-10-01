<template>
  <div class="form">
    <div v-if='step == 1' class="form1">
      <div class="el">
        <yellow-input class="element" width="226px" height="50px" placeholder="Pseudo" type="text" v-model:selected='form.username'/>
        <h5 v-if='errors.includes("needUsername")' class="field-error">Champs obligatoire</h5>
        <h5 v-if='errors.includes("alreadyUsed")' class="field-error">Pseudo déjà utilisé</h5>
      </div>
        <div class="el">
        <yellow-input class="element" width="226px" height="50px" placeholder="Mot de passe" type="password" v-model:selected='form.password'/>
        <h5 v-if='errors.includes("needPassword")' class="field-error">Champs obligatoire</h5>
        <h5 v-if='errors.includes("biggerPassword")' class="field-error">Le mot de passe doit contenir au moins 8 charactères</h5>
      </div>
      <div class="el">
        <yellow-input class="element" width="226px" height="50px" placeholder="Confirmer le mot de passe" type="password" v-model:selected='form.confirmPassword'/>
        <h5 v-if='errors.includes("needConfirm")' class="field-error">Champs obligatoire</h5>
        <h5 v-if='errors.includes("passwordMatch")' class="field-error">Les mots de passe ne correspondent pas</h5>
        <purple-button @click="step1" class="element" width="250px" height="50px" text="Suite de l'inscription"/>
      </div>
    </div>
  </div>
</template>

<script>
import PurpleButton from '../../../components/utils/buttons/PurpleButton.vue'
import YellowInput from '../../../components/utils/inputs/YellowInput.vue'

export default {
  components: { YellowInput, PurpleButton },
  data() {
    return {
      step: 1,
      form: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      errors: []
    }
  },
  created() {
      this.$store.commit('setHeaderName', 'Inscription');
  },
  methods: {
    async step1() {
      if(this.checkFirst()){
        if(await this.$store.dispatch('isPseudoUsable', this.form.username)){
          this.errors = [];
          this.step = 2;
        }else {
          this.errors.push('alreadyUsed');
        }
      }
    },
    checkFirst() {
      this.errors = [];
      if(!this.form.username){
        this.errors.push('needUsername')
      }
      if(!this.form.password){
        this.errors.push('needPassword')
      }
      if(!this.form.confirmPassword){
        this.errors.push('needConfirm')
      }
      if(this.form.password && this.form.password.length < 8){
        this.errors.push('biggerPassword')
      }
      if(this.form.password != this.form.confirmPassword){
        this.errors.push('passwordMatch')
      }
      return this.errors == 0
    }
  }
}

</script>

<style scoped>
.el {
  width: 250px;
}
.el {
    margin-left: calc(50% - 125px);
}
.element {
    margin-top: 15px;
}
.field-error{
  margin-bottom: 5px;
  margin-left: 15px;
  font-size: 12px;
}
</style>
