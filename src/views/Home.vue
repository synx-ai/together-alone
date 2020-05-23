<template>
  <div class="wrapper">
    <div class="section cards">
      <div class="container">
        <div v-for="e in events" :key="e[0]">
          <div class="columns is-mobile is-centered">
            <div class="column is-8">
              <Card :eventId="e[0]"
                    :title="e[1]"
                    :description="e[2]"
                    :date="e[3]"
                    :zoomURL="e[4]"
                    :videoURL="e[5]"
                    :presenter="e[6]"
                    :bio="e[7]"
                    :picture1="e[8]"
                    :picture2="e[9]"
                    :picture3="e[10]"
                    :picture4="e[11]"
                    @linkRequested="onLinkRequest" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal is-active" v-show="showModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="section cards">
          <div class="container">
            <div class="columns is-mobile is-centered">
              <div class="column is-10">
                <Modal :eventId="currentEventId"
                       :zoomURL="currentZoomURL"
                       :videoURL="currentVideoURL"
                       :registered="currentRegistered"
                       @close="showModal = false"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'

const axios = require('axios');

export default {
  name: 'Home',
  components: {
    Card,
    Modal
  },
  data() {
    return {
      showModal: false,
      currentEventId: 'none',
      currentZoomURL: '',
      currentVideoURL: '',
      currentRegistered: false,
      events: []
    }
  },
  mounted() {
    let docId = '1ALGuKZdAmQFYDsJhWxHdscsfj0YugOxuYJwrkNrTK-E';
    let apiKey = 'AIzaSyDqglUyr1ZuOxnIj6jv7274JLbH7zCf2v4';
    let values = 'A2:AZ100';

    let url = 'https://content-sheets.googleapis.com/v4/spreadsheets/' + docId + '/values/'+ values +'?access_token='+ apiKey +'&key='+ apiKey

    console.log(this.$localStorage.get('localRegistry'));

    axios.get(url)
    .then(resp => {
      this.events = resp.data.values.reverse();
    })
  },
  methods: {
    onLinkRequest (eventId, zoomURL, videoURL) {
      this.showModal = true;
      this.currentEventId = eventId;
      this.currentZoomURL = zoomURL;
      this.currentVideoURL = videoURL;

      var registry = this.$localStorage.get('localRegistry');

      console.log(eventId, eventId in registry, registry);

      this.currentRegistered = (eventId in registry) ? true : false;

      console.log(eventId, 'zoom: ', zoomURL, 'video: ', videoURL);
    }
  }
}
</script>
