<template>
    <div id="nav">
        <nav class="flex justify-between bb b--white-10 ve_primary_bg">
            <a class="logo link white-70 hover-white no-underline flex items-center pa3" href="" @click="backHome">
                <img src="../assets/ve_light.png" alt="VisuEats">
            </a>
            <div class="flex-grow pa3 flex items-center">
                <router-link to="/" class="f6 link dib white dim mr3 mr4-ns">Home</router-link>
                <router-link to="/demo" class="f6 link dib white dim mr3 mr4-ns">Demo</router-link>
                <router-link to="/register" class="f6 link dib white dim mr3 mr4-ns">Register</router-link>
                <router-link to="/login" v-if="!LoggedIn" class="f6 link dib white dim mr3 mr4-ns">Sign In</router-link>
                <router-link to="/logout" v-else class="f6 link dib white dim mr3 mr4-ns">Logout</router-link>
                <span class="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20">{{ LoginState }}</span>
            </div>
        </nav>
    </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";

    export default {
        created(){
            firebase.auth().onAuthStateChanged(user=>{
                if(user){
                    this.LoggedIn = true;
                    this.LoginState = "Logged In";
                } else {
                    this.LoggedIn = false;
                    this.LoginState = "Logged Out";
                }
            })
        },
        data(){
            return {
                Loggedin: false,
                LoginState: "Logged Out"
            }
        },
        methods: {
            async signOut() {
                try {
                    const data = await firebase.auth().signOut();
                    console.log("signoutdata ", data);
                    this.$router.replace({name:"Login"} )
                }catch(err) {
                    console.log(err)
                }  

            },
            signIn() {
                this.$router.replace({name:"Login"})
            },
            backHome() {
                this.$router.replace({ name:"Dashhome"})
            }
        } //Methods
    }
</script>

<style scoped>
    
    .logo img {
        max-width: 100px;
    }

</style>