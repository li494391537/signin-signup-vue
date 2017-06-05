<template>
  <div>
    <app-header :path="5"></app-header>
    <div class="container">
      <div class="jumbotron">
        <h1>Hello, world!</h1>
        <p>并不知道该放什么</p>
        <p>
          <router-link to="/about" class="btn btn-primary btn-lg" role="button">Learn more</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../common/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>
