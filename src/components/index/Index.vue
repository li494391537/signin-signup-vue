<template>
  <div>
    <app-header :path="0"></app-header>
    <div class="container">
      <div class="theme-showcase" role="main">
        <div class="jumbotron">
          <h1>
            登陆&注册&权限管理系统
          </h1>
          <p>
            Sign in, Sign up and Authority Management System
          </p>
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
  }
}
</script>
