<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        08.Abr.20.8pm
      </p>
      <a href="#" class="card-header-item" @click="$emit('link')">GET ZOOM LINK <span class="link-icon"> </span></a>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        <h2>Comida y bebida</h2>
        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum turpis tortor, pretium dignissim ligula vulputate non. Donec vulputate velit turpis, sit amet fermentum metus mollis eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et arcu mi. Nunc erat nulla, sodales eget odio id, sollicitudin convallis lorem. Sed consectetur feugiat leo eget laoreet. Aenean sed libero aliquet, vehicula purus eu, elementum nibh.</p>
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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
