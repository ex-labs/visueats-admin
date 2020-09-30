<template>
    <div class="register flex">
        <div class="main-content vh-100 w-100 bg-light-gray pt5 pb3">
            <div class="form-container bg-white mw7 center pa4 ">
                <h1>Register for an Account</h1>
                <p>This is a demo <span class="fw5 italic">View</span> for testing Admin Authentication</p>
                <form @submit.prevent="pressed" class="measure center tl">
                    <div class="mv3">
                        <label>Email</label>
                        <input type="email" class="db mt2 pa2 w-100" v-model="register.email" placeholder="email">
                    </div>
                    <div class="mv3">
                        <label>Password</label>
                        <input type="password" class="db mt2 pa2 w-100" v-model="register.password" placeholder="password">
                    </div>
                    <div class="mv4">
                        <input type="checkbox" v-model="register.terms"> I have read the Privacy Policy and agree to the Terms of Service.
                    </div>
                    <div class="mv3">
                        <button type="submit" class="w-100 f6 link dim br1 ph3 pv2 mb2 dib white ve_primary_bg">Register</button>
                    </div>
                </form>
                <div class="tc"> Form Input Debug: {{ register }}</div>
            </div><!-- /Form Container -->
        </div>
    </div>
</template>

<script>

//import firebase

    export default {
        data() {
            return {
                register: {
                    email: '',
                    password: '',
                    terms: ''
                }
            }
        }, //data
        methods: {
            async pressed() {
                //try {
                    //console.log('hello')
                //}.catch(err) {
                    //console.log(err)
                //}
            }
        } //methods
    }
</script>

<style scoped>
    button {
        border:none;
    }
</style>