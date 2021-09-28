<template>
    <nav class="header">
        <div class="center">
            <h2 class="header-name">{{ $store.state.headerName }}</h2>
            <div v-if='$store.state.validSessionCookie === true' @click="goToProfile" class="header-profile-click">
                <img class="header-profile-icon" src="../assets/user.svg"/>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    methods: {
        goToProfile() {
            this.$router.push('/profile')
        }
    },
    created() {
        this.$store.dispatch('isSessionCookieValid');
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #8CBBF1;
    z-index: 2;
}

.center {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
}

.header-name {
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 20px;
}

.header-profile-click {
    width: 35px;
    height: 35px;
    float: right;
    margin-right: 15px;
    cursor: pointer;
    margin-top: 13px;
}

.header-profile-icon {
    width: 100%;
    height: 100%;
}
</style>
