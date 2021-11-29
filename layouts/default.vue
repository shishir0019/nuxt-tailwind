<template>
  <div class="h-screen w-screen">
      <Header />
      <main class="">
          <nuxt/>
      </main>
      <Footer />
  </div>
</template>

<script>
export default {
    middleware: ['auth', 'init'],
    data(){
        return{
            bg: require('@/assets/img/bg1.svg')
        }
    },
    mounted(){
        window.document.body.style.backgroundImage = `url(${this.bg})`;
    }
}
</script>

<style>

</style>