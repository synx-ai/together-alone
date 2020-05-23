<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title card-modal-header-title">
        Link de Zoom
      </p>
      <a href="#" class="card-modal-header-item" @click="onCloseClick">X</a>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        <p class="card-description">Por seguridad de nuestra comunidad y control requerimos un correo para poder darte nuestro super chido link, no te vamos a spamear ☺︎ </p>
        <br />
        <form id="email-post">
          <input v-if="!registered" class="input" id="email" v-model="email" type="email" name="email" placeholder="Escribe tu correo aquí...">
          <input v-else class="input" id="email" v-model="linkURL" type="email" name="email" readonly>
        </form>
      </div>
    </div>
    <footer class="card-footer">
      <button v-if="!registered" href="#" class="card-footer-item" @click="checkForm" :disabled="!validEmail">Demen Link!</button>
      <button v-else href="#" class="card-footer-item" @click="onCloseClick">Gracias por el Link!</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    eventId: String,
    zoomURL: String,
    videoURL: String,
    registered: Boolean
  },
  localStorage: {
    localRegistry: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      validEmail: false,
      email: null,
      linkURL: ''
    }
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();

      if (this.validEmail) {
        this.validEmail = false;

        const axios = require('axios');

        axios.get('https://script.google.com/macros/s/AKfycbxGzecIvdnBmfgFy1mf4AnW4ODXZbPwva7UxCYFaU6eDA2AyY9z/exec', {
          params: {
            "email": this.email,
            "event": this.eventId
          }
        }).then(() => {

          if (this.zoomURL === undefined || this.zoomURL === null || this.zoomURL === '') {
            this.linkURL = this.videoURL;
          } else {
            this.linkURL = this.zoomURL;
          }

          this.registered = true;
        })

        return true;
      }
    },
    onCloseClick: function () {
      if (this.registered) {
        var registry = this.$localStorage.get('localRegistry');

        registry[this.eventId] = true;

        this.$localStorage.set('localRegistry', registry);
      }

      //this.registered = false;
      this.validEmail = false;
      this.email = '';

      this.$emit('close');
    },
    isValidEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    createLink: (zoomURL, videoURL) => {
      if (videoURL) {
        return videoURL;
      }

      return zoomURL;
    }
  },
  watch: {
    email () {
      if (this.email) {
        if (this.isValidEmail(this.email)) {
          this.validEmail = true;
        } else {
          this.validEmail = false;
        }
      } else {
        this.validEmail = false;
      }
    },
    zoomURL () {
      console.log('zoom', 'z: ', this.zoomURL, 'v: ', this.videoURL);
      this.linkURL = this.createLink(this.zoomURL, this.videoURL)
    },
    videoURL () {
      console.log('video', 'z: ', this.zoomURL, 'v: ', this.videoURL);
      this.linkURL = this.createLink(this.zoomURL, this.videoURL)
    }
  }
}
</script>
