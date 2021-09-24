<template>
  <div class="quick-note">
        <h3 class="quick-element quick-title">Ajouter une note rapide</h3>
        <yellow-branch-input :selected='form.branch' @update:selected='updateBranch($event)' class="quick-element" width="220px" height="35px" :branches='branches'/>
        <yellow-categorie-input v-model:selected='form.categorie' class="quick-element" width="220px" height="35px" :categories='branches[form.branch]' />
        <yellow-note-input v-model:selected='form.note' class="quick-element quick-element-center" width="75px" height="35px"/>
        <purple-button @click="checkForm" width="100px" height="35px" style="margin-left: calc(50% - 50px);" text="Valider" class="quick-element"/>
  </div>
</template>../utils/inputs/YellowBranchInput.vue

<script>
import PurpleButton from '../utils/buttons/PurpleButton'
import YellowBranchInput from '../utils/inputs/YellowBranchInput'
import YellowNoteInput from '../utils/inputs/YellowNoteInput'
import YellowCategorieInput from '../utils/inputs/YellowCategorieInput'

export default {
    components: {
        YellowBranchInput,
        YellowCategorieInput,
        PurpleButton,
        YellowNoteInput
    },
    data() {
        return {
            form: {
                branch: '',
                categorie: '',
                note: 4
            },
            branches: {
                'Français': ['Test complet', 'Test de vocabulaire'],
                'Mathématiques': ['Test complet', 'Piqures'],
                'Allemand': ['Test complet'],
                'Application des Mathématiques': ['Test complet', 'Piqures']
            }
        }
    },
    methods: {
        updateBranch(e) {
            this.form.branch = e;
            this.form.categorie = this.branches[e][0];
        },
        checkForm() {

        }
    }
}

</script>

<style scoped>
.quick-note {
    height: 240px;
    width: 300px;
    background-color: rgba(215, 221, 233, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.quick-element {
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
}

.quick-title {
    text-align: center;
}
</style>
