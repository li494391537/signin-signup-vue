<template>
  <div>
    <app-header :path="pagePath"></app-header>
    <div class="container">
      <div class="theme-showcase" role="main">
        <div class="jumbotron">
          <h1>
            Page {{pagePath}}<br />
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../common/AppHeader.vue'
export default {
  components: {
    AppHeader
  },
  data () {
    return {
      pagePath: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.pagePath = parseInt(to.params.pageid)
    })
  },
  watch: {
    $route () {
      this.pagePath = parseInt(this.$route.params.pageid)
    }
  }
}
</script>
