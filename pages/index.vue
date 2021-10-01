<template>
<div class=container>
<b-carousel
  id="carousel"
  :interval="3500"
  controls
  indicators
  img-width="1024"
  img-height="480"
  style="text-shadow: 1px 1px 2px #333;">
  <div v-for="slide in slides" :key="slide">
    <b-carousel-slide class="img-fluid w-100"
  :img-src="slide">
    </b-carousel-slide>
  </div>
  </b-carousel>
</div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 3,
        paginationEnabled: false
      }
    }
  }
}
</script>

<style>
.container{
  max-width: 50%;
}
img {
  object-fit: contain;
  min-width: 100%;
  min-height: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
} 



</style>
<script src="../assets/imagenes.js" /> 