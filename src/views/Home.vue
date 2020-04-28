<template>
  <div class="wrapper">
    <div class="section cards">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-8">
            <Card msg="Welcome to Your Vue.js App" @link="showModal = true" />
          </div>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-8">
            <Card msg="Welcome to Your Vue.js App" @link="showModal = true" />
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
                <Modal msg="Welcome to Your Vue.js App" @close="showModal = false"/>
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

export default {
  name: 'Home',
  components: {
    Card,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>
