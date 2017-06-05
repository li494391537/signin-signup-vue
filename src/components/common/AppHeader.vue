<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">lirui</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li :class="{active : isPage[0]}">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="{active : isPage[1]}">
              <router-link to="/page/1">Page 1</router-link>
            </li>
            <li :class="{active : isPage[2]}">
              <router-link to="/page/2">Page 2</router-link>
            </li>
            <li :class="{active : isPage[3]}">
              <router-link to="/page/3">Page 3</router-link>
            </li>
            <li :class="{active : isPage[4]}">
              <router-link to="/page/4">Page 4</router-link>
            </li>
            <li :class="{active : isPage[5]}">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
          <ul v-if="isLogin" class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Your Name
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/">个人信息</router-link>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <router-link to="/">注销</router-link>
                </li>
              </ul>
            </li>
          </ul>
          <ul v-else class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/signin">登陆</router-link>
            </li>
            <li>
              <router-link to="/signup">注册</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['path'],
  data () {
    return {
      isPage: [false, false, false, false, false, false],
      isLogin: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      for (let i = 0; i < 6; i++) {
        this.$set(this.isPage, i, false)
      }
      this.$set(this.isPage, this.path, true)
    }
  },
  watch: {
    path () {
      this.fetchData()
    }
  }
}
</script>
