<template>
    <div class="register flex">
        <div class="main-content vh-100 w-100 bg-light-gray pt5 pb3">
            <div class="form-container bg-white mw7 center pa4 ">
                <h1>Login</h1>
                <p>This is where you login to <span class="fw5 italic">manage</span> your location and menu items</p>
                <form @submit.prevent="pressed" class="measure center tl">
                    <div class="mv3">
                        <label>Email</label>
                        <input type="email" class="db mt2 pa2 w-100" v-model="login.email" placeholder="email">
                    </div>
                    <div class="mv3">
                        <label>Password</label>
                        <input type="password" class="db mt2 pa2 w-100" v-model="login.password" placeholder="password">
                    </div>
                    <div class="mv3">
                        <button type="submit" class="w-100 f6 link dim br1 ph3 pv2 mb2 dib white ve_primary_bg">Login</button>
                    </div>
                </form>
                <div class="mv3 w-100 tc link underline"><a>Forgot your password?</a></div>
                <div class="tc"> Form Input Debug: {{ login }}</div>
            </div><!-- /Form Container -->
            <div class="cta-container mw7 center flex pt4 pb2 ve_accent_bg white fw5">
                <div class="w-60 pa4 f4 tl">
                    Not a visuEats account holder?
                </div>
                <div class="w-40 tr pa4">
                    <a class="f5 link dim br1 ph3 pv2 mb2 dib white ve_primary_bg" @click="cta">contact us</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//import firebase

    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: '',
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
            }, //pressed
            cta () {
                alert("Trigger Secret Contact Form")
            }
        } //methods
    }
</script>

<style scoped>
    button {
        border:none;
    }
</style>