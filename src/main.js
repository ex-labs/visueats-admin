import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import firebase from "firebase/app";
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //userstate: loggedout
  },
})

//Firebase Config on EX acct
const firebaseConfig = {
  apiKey: "AIzaSyBoRo7374SssRmP-gODLUucbNiKIdcoqIg",
  authDomain: "visueats-9f422.firebaseapp.com",
  databaseURL: "https://visueats-9f422.firebaseio.com",
  projectId: "visueats-9f422",
  storageBucket: "visueats-9f422.appspot.com",
  messagingSenderId: "824201418139",
  appId: "1:824201418139:web:f5bdf25ea714b2c3383d3e",
  measurementId: "G-7RZ1TEWM88"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Make sure user is shown as still logged in if route is refreshed - **Fix

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

//new Vue({
  //router,
  //render: h => h(App)
//}).$mount('#app')
