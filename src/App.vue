<template>
  <div id="app">
    <nav class="level top-navbar navbar is-fixed-top">
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
        <p>Lávate las manos ☺︎</p>
      </div>
    </nav>
  </div>
</template>
