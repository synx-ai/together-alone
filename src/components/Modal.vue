<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title card-modal-header-title">
        Link de Zoom
      </p>
      <a href="#" class="card-modal-header-item" @click="$emit('close')">X</a>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        <p class="card-description">Por seguridad de nuestra comunidad y control requerimos un correo para poder darte nuestro super chido link, no te vamos a spamear ☺︎ </p>
        <br />
        <input class="input" type="email" placeholder="Text input">
      </div>
    </div>
    <footer class="card-footer">
      <button href="#" class="card-footer-item">Demen Link!</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    msg: String
  },
  data() {
    return {
      validEmail: false
    }
  }
}
</script>
