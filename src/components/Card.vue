<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ date }}
      </p>
      <a href="#" class="card-header-item" @click="$emit('linkRequested', eventId, zoomURL, videoURL)">GET ZOOM LINK <span class="link-icon"> </span></a>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        <h2>{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
        <br />
        <div class="columns">
          <div class="column">
            <img src="../assets/deliverisi.png" />
            <h5>Deliverisi</h5>
            <p>Lorem ipsum</P>
          </div>
          <div class="column">
            <img src="../assets/the_juices.png" />
            <h5>The Juices Flowing</h5>
            <p>Lorem ipsum</P>
          </div>
          <div class="column">
            <img src="../assets/the_juices.png" />
          </div>
          <div class="column">
            <img src="../assets/the_juices.png" />
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
    videoURL: String
  }
}
</script>
