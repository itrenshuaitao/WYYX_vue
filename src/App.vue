<template>
  <div id="app">
    <router-view/>
    <FooterTap/>
  </div>
</template>

<script>



import FooterTap from "./components/FooterTap/FooterTap";
export default {
  name: 'app',
  components: {FooterTap},
  comments:{
    FooterTap
  }

}
</script>

<style>
  #app{
    height: 100%;
  }

</style>
