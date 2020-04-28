<template>
  <div id="app">
    <nav class="level top-navbar">
      <div class="level-item has-text-centered together-alone">
        <div class="logo">
          <img src="./assets/together.svg" class="together" />
          <img src="./assets/alone.svg" class="alone" />
        </div>
      </div>
    </nav>
    <router-view/>
    <nav class="level foot-navbar">
      <div class="level-item has-text-centered">
        <p>Lavate las manos &copy;</p>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
