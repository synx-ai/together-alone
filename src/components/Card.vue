<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ date }}
      </p>
      <a href="#" class="card-header-item" @click="$emit('linkRequested', eventId, zoomURL, videoURL)">{{videoMessage}} <span class="link-icon"> </span></a>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        <h2>{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
        <br />
        <div class="is-hidden-tablet is-marging-less">
          <div class="columns is-mobile">
            <div class="column">
              <figure class="image is-square">
                <img :src="picture1">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-square">
                <img :src="picture2">
              </figure>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column">
              <figure class="image is-square">
                <img :src="picture3">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-square">
                <img :src="picture4">
              </figure>
            </div>
          </div>
        </div>
        <div class="is-hidden-mobile">
          <div class="columns">
            <div class="column">
              <figure class="image is-square">
                <img :src="picture1">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-square">
                <img :src="picture2">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-square">
                <img :src="picture3">
              </figure>
            </div>
            <div class="column">
              <figure class="image is-square">
                <img :src="picture4">
              </figure>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h5>{{ presenter }}</h5>
            <p>{{ bio }}</P>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    eventId: String,
    title: String,
    description: String,
    date: String,
    zoomURL: String,
    videoURL: String,
    presenter: String,
    bio: String,
    picture1: String,
    picture2: String,
    picture3: String,
    picture4: String
  },
  computed: {
    videoMessage: function () {
      var previousDate = Date.parse('2020.' + this.date.replace("pm", " pm"));
      var today = new Date;

      return previousDate < (Date.parse(today)) ? 'GET VIDEO': 'GET ZOOM LINK';
    }
  }
}
</script>
