<template>
  <div id="app">
    <div class="center-container">
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

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .center-container {
    height: 100vh;
    background-color: transparent;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }

</style>
