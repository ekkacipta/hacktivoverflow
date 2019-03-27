<template>
    <nav class="navbar navbar-expand-lg navbar-light light-color">
        <div class="container">
            <a class="navbar-brand" href="#" @click="setIsLogin"><i class="fab fa-stack-overflow"></i> Stack-OverYou</a>
            <input class="form-control col-sm-6" type="text" placeholder="Search" aria-label="Search">

            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item avatar">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle z-depth-0" alt="avatar image" height="35">
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light">1
                    <i class="fas fa-envelope" style="color: gray;"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <i class="fas fa-inbox" style="color: gray;"></i></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <i class="fas fa-trophy" style="color: gray;"></i></a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <i class="fas fa-question-circle" style="color: gray;"></i></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <i class="fab fa-stack-exchange" style="color: gray;"></i></a>
                </li>
                <button type="button" class="btn btn-light-blue btn-sm" @click="setLogout" v-if="this.$store.state.user.isLogin">Logout</button>
                <button type="button" class="btn btn-light-blue btn-sm" @click="setLocationLogin" v-if="!this.$store.state.user.isLogin">Login</button>
            </ul>
        </div>
    </nav>
    
    
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'navbar',
  methods: {
      ...mapMutations(['setLocationLogin']),
      ...mapMutations(['setLogout', 'setIsLogin'])
  }
};
</script>

<style scoped>

</style>
