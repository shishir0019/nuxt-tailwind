<template>
  <header class="container mx-auto p-6 md:p-12">
    <div class="flex justify-between items-center">
      <img :src="img.logo" alt="logo">
      <div><button><img :src="img.menu" alt="menu"></button></div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      img: {
        logo: require('@/assets/img/logo.png'),
        menu: require('@/assets/img/menu.png'),
      }
    }
  }
}
</script>

<style>

</style>