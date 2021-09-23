<template>
    <div class="connect-btns">
        <yellow-button @click='connect' class="btn" width="250px" height="50px" text="Se connecter"></yellow-button>
        <yellow-button @click='register' class="btn" width="250px" height="50px" text="S'inscrire"></yellow-button>
    </div>
</template>

<script>
import YellowButton from '../../../components/utils/buttons/YellowButton'

export default {
    components: {
        YellowButton
    },
    methods: {
        connect() {
            this.$store.state.headerName = "Connexion";
            this.$router.push('/login')
        },
        register() {
            this.$store.state.headerName = "Inscription";
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped>
.connect-btns {
    margin-left: calc(50% - 125px);
}
.btn {
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>
