<template>
  <div id="app">
    <div :class='[
    {"center-container": center},
    {"container-not-centerd": !center}
    ]'>
      <the-header></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data() {
    return {
      center: true
    }
  },
  watch: {
      '$route' () {
        this.center = !(this.$route.path === "/current");
      }
    }
}

</script>

<style>
 * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  html {
    height: 100%;
    min-height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #FDFDFE;
  }

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .center-container {
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }

  .container-not-centerd {
    display: block;
    top: 0;
    left: 0;
    justify-content: center;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: 0ms;
    transition-delay: 0ms;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
  textarea:focus, input:focus{
    outline: none;
  }

</style>
