import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Dashhome from '../views/Dashhome.vue'
import AppRoles from '../views/AppRoles.vue'
import DesignStudio from '../views/DesignStudio.vue'
import ManageMenu from '../views/ManageMenu.vue'
import ManagePages from '../views/ManagePages'
import Settings from '../views/UpdateProfile.vue'
import HelpCenter from '../views/HelpCenter.vue'

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/dashboard',
    name: 'Dashhome',
    component: Dashhome,
    meta: {requiresAuth: true}
  },
  {
    path: '/app-roles',
    name: 'AppRoles',
    component: AppRoles,
    meta: {requiresAuth: true}
  },
  {
    path: '/design-studio',
    name: 'DesignStudio',
    component: DesignStudio,
    meta: {requiresAuth: true}
  },
  {
    path: '/manage-pages',
    name: 'ManagePages',
    component: ManagePages,
    meta: {requiresAuth: true}
  },
  {
    path: '/manage-menu',
    name: 'ManageMenu',
    component: ManageMenu,
    meta: {requiresAuth: true}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {requiresAuth: true}
  },
  {
    path: '/help',
    name: 'HelpCenter',
    component: HelpCenter,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/login");
  }else {
    next();
  }
})

export default router
