<template>
  <div>
    <div class="container">
      <div class="row">
        <div><br /><br /><br /><br /></div>
        <div class="col-md-4 col-md-offset-4">
          <h1 class="text-center">登 录</h1>
          <div>
            <br />
            <div v-if="!checkSigninMessage" class="alert alert-danger" role="alert">{{SigninMessage}}</div>
          </div>
          <form>
            <div class="form-group has-feedback" :class="{'has-success': checkUsername, 'has-error': !(checkUsernameEmpty || checkUsername)}">
              <input type="text" v-model.trim="username" class="form-control" placeholder="用户名" />
              <span v-if="checkUsername" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
              <span v-if="!(checkUsernameEmpty || checkUsername)" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
              <span v-if="checkUsername" id="inputUsernameSuccess2Status" class="sr-only">(success)</span>
            </div>
            <div class="form-group">
              <div class="form-group has-feedback" :class="{'has-success': checkPassword, 'has-error': !(checkPasswordEmpty || checkPassword)}">
                <input type="password" v-model.trim="password" class="form-control" placeholder="密码" />
                <span v-if="checkPassword" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span v-if="!(checkPasswordEmpty || checkPassword)" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                <span v-if="checkPassword" id="inputPasswordSuccess2Status" class="sr-only">(success)</span>
              </div>
            </div>
            <div class="col-md-4 col-md-offset-1">
              <button type="button" class="btn btn-primary btn-block" @click="checkSigninInfo">登录</button>
            </div>
            <div class="col-md-4 col-md-offset-2">
              <button type="button" class="btn btn-default btn-block" @click="gotoSignup">注册</button>
            </div>
          </form>
          <div><br /><br /><br /></div>
          <router-link to="/" class="btn btn-primary btn-lg btn-block">返 回 主 页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      checkSigninMessage: true,
      SigninMessage: ''
    }
  },
  computed: {
    checkUsername () {
      var flag = false
      var reg = /^[a-zA-Z_]+[a-zA-Z0-9_]{3,19}$/
      if (reg.test(this.username)) {
        flag = true
      }
      return flag
    },
    checkUsernameEmpty () {
      if (this.username === '') {
        return true
      }
      return false
    },
    checkPassword () {
      var flag = false
      var reg = /^[a-zA-Z0-9_+-=,.~!@#$%^&*]{8,16}$/
      if (reg.test(this.password)) {
        flag = true
      }
      return flag
    },
    checkPasswordEmpty () {
      if (this.password === '') {
        return true
      }
      return false
    }
  },
  methods: {
    checkSigninInfo () {
      this.SigninMessage = ''
      if (!(this.checkUsernameEmpty || this.checkUsername) || !(this.checkPasswordEmpty || this.checkPassword)) {
        this.checkSigninMessage = false
        if (!this.checkUsername) {
          this.SigninMessage += ' 用户名不符合要求 '
        }
        if (!this.checkPassword) {
          this.SigninMessage += ' 密码不符合要求 '
        }
      } else {
        this.checkSigninMessage = true
      }
    },
    gotoSignup () {
      this.$router.push({name: 'signup'})
    }
  }
}
</script>
