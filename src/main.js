import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import router from './router'
import store from './store'
import '@/utils/mixins'
Vue.config.productionTip = false
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
  if (user) {
    firebase.database().ref('users/' + user.uid).once('value', (snap) => {
      var userProfile = snap.val()
      store.commit('setUser', userProfile)
      // mouting the app after all the data and roles are assigned
      mountApp()
    })
  } else {
    console.log(' not logged in ')
    store.commit('setUser', null)
    // mouting the app after all the data and roles are reset
    mountApp()
  }

  function mountApp() {
    Vue.prototype.$fb = firebase
    if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  }
})

//new Vue({
//router,
//render: h => h(App)
//}).$mount('#app')