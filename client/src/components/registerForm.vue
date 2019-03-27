<template>
    <div class="col-8 mt-5" style="display:flex; justify-content: center; align-items: start;">
        <form class="text-center border border-light p-5" @submit.prevent="register">

            <p class="h4 mb-4">Sign up</p>

            <div class="form-row mb-4">
                <div class="col">
                    <!-- First name -->
                    <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" v-model="user.firstName">
                </div>
                <div class="col">
                    <!-- Last name -->
                    <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" v-model="user.lastName">
                </div>
            </div>

            <!-- E-mail -->
            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" v-model="user.email">

            <!-- Password -->
            <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" v-model="user.password">
            <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                At least 8 characters and 1 digit
            </small>


            <!-- Newsletter -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
                <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
            </div>

            <!-- Sign up button -->
            <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

            <!-- Social register -->
            <p>or sign up with:</p>

            <a type="button" class="light-blue-text mx-2">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a type="button" class="light-blue-text mx-2">
                <i class="fab fa-twitter"></i>
            </a>
            <a type="button" class="light-blue-text mx-2">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a type="button" class="light-blue-text mx-2">
                <i class="fab fa-github"></i>
            </a>

            <hr>

            <!-- Terms of service -->

        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
    name: 'register',
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapActions(['register'])
    }
}
</script>
