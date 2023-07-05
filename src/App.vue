<script>
import MainPage from './pages/MainPage.vue'

export default{
  components: {
    MainPage
  }

}
</script>

<template>
  <MainPage />
</template>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

body{
  background: #fff;
  place-items: start;
}

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
