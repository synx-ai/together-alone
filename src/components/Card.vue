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
            <img :src="picture1" />
          </div>
          <div class="column">
            <img :src="picture2" />
          </div>
          <div class="column">
            <img :src="picture3" />
          </div>
          <div class="column">
            <img :src="picture4" />
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
  }
}
</script>
