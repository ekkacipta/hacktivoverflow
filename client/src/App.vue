<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="row">
      <div class="container" style="display: flex;">
        <SideBar/>
        <MainBody v-if="this.$store.state.user.isLogin && this.$store.state.user.location == 'home'"/>
        <formLogin v-if="!this.$store.state.user.isLogin && this.$store.state.user.location == 'login'"/>
        <formRegis v-if="!this.$store.state.user.isLogin && this.$store.state.user.location == 'register'"/>
        <formQnA v-if="this.$store.state.user.isLogin && this.$store.state.user.location == 'QnA'"/>
        <insideQuestion v-if="this.$store.state.user.isLogin && this.$store.state.user.location == 'inside' "/>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import SideBar from '@/components/sidebar.vue'
import MainBody from '@/components/mainBody.vue'
import formLogin from '@/components/loginForm.vue'
import formRegis from '@/components/registerForm.vue'
import formQnA from '@/components/formQnA.vue'
import insideQuestion from '@/components/insideQuestion.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    SideBar,
    MainBody,
    formLogin,
    formRegis,
    formQnA,
    insideQuestion,
  }
};
</script>
