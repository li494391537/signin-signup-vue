<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  store,
  name: 'app',
  components: {
  }
}
</script>
