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
    <div v-if='step == 2' class="form2">
      <div class="el">
        <yellow-switch-input class="element" width="246px" height="50px" name="Année" :values='[1, 2, 3]' v-model:selected='form.year'></yellow-switch-input>
        <h5 v-if='errors.includes("needYear")' class="field-error">Champs obligatoire</h5>
      </div>
      <div class="el">
        <yellow-switch-input class="element" width="246px" height="50px" name="Option Spécifique" :values='options1.map(option => option.specific_name)' v-model:selected='form.option1'></yellow-switch-input>
        <h5 v-if='errors.includes("needOption1")' class="field-error">Champs obligatoire</h5>
      </div>
      <div class="el" v-if='form.year != 3'>
        <yellow-switch-input class="element" width="246px" height="50px" name="Option Artistique" :values='arts.map(option => option.short_name)' v-model:selected='form.art'></yellow-switch-input>
        <h5 v-if='errors.includes("needArt")' class="field-error">Champs obligatoire</h5>
      </div>
      <div class="el">
        <purple-button @click="step2" class="element" width="250px" height="50px" text="Suite de l'inscription"/>
      </div>
    </div>
    <div v-if='step == 3' class="form2">
      <div class="el" v-if='form.year == 3'>
        <yellow-switch-input class="element" width="246px" height="50px" name="Option Complémentaire" :values='options2.map(option => option.short_name)' v-model:selected='form.option2'></yellow-switch-input>
        <h5 v-if='errors.includes("needOption2")' class="field-error">Champs obligatoire</h5>
      </div>
      <div class="el">
        <yellow-switch-input class="element" width="246px" height="50px" name="Langue 2" :values='langs2.map(option => option.short_name)' v-model:selected='form.lang2'></yellow-switch-input>
        <h5 v-if='errors.includes("needLang2")' class="field-error">Champs obligatoire</h5>
      </div>
      <div class="el">
        <yellow-switch-input class="element" width="246px" height="50px" name="Langue 3" :values='langs3.map(option => option.short_name)' v-model:selected='form.lang3'></yellow-switch-input>
        <h5 v-if='errors.includes("needLang3")' class="field-error">Champs obligatoire</h5>
      </div>
      <div class="el">
        <purple-button @click="step3" class="element" width="250px" height="50px" text="Suite de l'inscription"/>
      </div>
    </div>
  </div>
</template>

<script>
import PurpleButton from '../../../components/utils/buttons/PurpleButton.vue'
import YellowInput from '../../../components/utils/inputs/YellowInput.vue'
import YellowSwitchInput from '../../../components/utils/inputs/YellowSwitchInput.vue'

export default {
  components: { YellowInput, PurpleButton, YellowSwitchInput },
  data() {
    return {
      step: 1,
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        year: '',
        option1: '',
        art: '',
        option2: '',
        lang2: '',
        lang3: ''
      },
      options1: [],
      options2: [],
      arts: [],
      langs2: [],
      langs3: [],
      errors: []
    }
  },
  async created() {
      this.$store.commit('setHeaderName', 'Inscription');
      this.options1 = await this.$store.dispatch("getAllOptions1");
      this.arts = await this.$store.dispatch("getAllArts");
      this.langs2 = await this.$store.dispatch("getAllLangs2");
      this.langs3 = await this.$store.dispatch("getAllLangs3");
      this.options2 = await this.$store.dispatch("getAllOptions2");
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
    step2() {
      if(this.checkSecond()){
        this.errors = [];
        this.step = 3;
      }
    },
    step3() {
      if(this.checkThird()){
        this.registerUser();
      }
    },
    checkSecond() {
      this.errors = [];
      if(!this.form.year){
        this.errors.push('needYear')
      }
      if(!this.form.option1){
        this.errors.push('needOption1')
      }
      if(!this.form.art && this.form.year != 3){
        this.errors.push('needArt')
      }
      return this.errors == 0
    },
    checkThird() {
      this.errors = [];
      if(!this.form.option2 && this.form.year == 3){
        this.errors.push('needOption2')
      }
      if(!this.form.lang2){
        this.errors.push('needLang2')
      }
      if(!this.form.lang3){
        this.errors.push('needLang3')
      }
      return this.errors == 0
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
    },
    registerUser(){
      
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
