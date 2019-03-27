<template>
    <div class="col-8 mt-5" style="display:flex; justify-content: center; align-items: start;">
            <form class="text-center border border-light p-5" @submit.prevent="login">

                <p class="h4 mb-4">Sign in</p>

                <!-- Email -->
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" v-model="user.email">

                <!-- Password -->
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="user.password">

                <div class="d-flex justify-content-around">
                    <div>
                        <!-- Remember me -->
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                        </div>
                    </div>
                    <div>
                        <!-- Forgot password -->
                        <a href="" >Forgot password?</a>
                    </div>
                </div>
                

                <!-- Sign in button -->
                <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

                <!-- Register -->
                <p>Not a member?
                    <a href="#" @click="setLocationRegister">Register</a>
                </p>

            </form>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'formLogin',
    computed: {
        ...mapState(["user"])
    },
    methods: {
        ...mapActions(['login']),
        ...mapMutations(['setLocationRegister'])
    }
}
</script>


