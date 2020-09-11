<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    this.getUser()
    this.getCarCout()
  },
  methods: {
    getUser() {
      this.axios.get('/user').then( (res) => {
        // to-do 保存到vuex里面
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCarCout() {
      this.axios.get('/carts/products/sum').then( (res) => {
        // to-do 保存到vuex里面
       this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">

@import './assets/scss/reset.scss';
@import './assets/scss/base.scss';
@import './assets/scss/config.scss';
@import './assets/scss/btn.scss';

</style>
