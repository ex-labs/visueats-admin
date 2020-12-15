<template>
    <div class="logout flex">
        <div class="main-content vh-100 w-100 bg-light-gray pt5 pb3">
            <div class="container mw7 center pa5 bg-white">
                <h1>Logout</h1>
                <p>Sign out of this application by clicking below. This is a temporary page</p>
                <div class="btn-container">
                    <button @click="signOut">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";

    export default {
        methods: {
            async signOut() {
                try {
                    const data = await firebase.auth().signOut();
                    console.log("signoutdata ", data);
                    this.$router.replace({name:"Home"} )
                }catch(err) {
                    console.log(err)
                }  

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>