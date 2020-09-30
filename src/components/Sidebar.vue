<template>
    <div class="sidebar fl w-20 pv2 vh-100">
        <div class="sidebar-top pv3 ph2 white">
            <div class="white f7 mb3"><!-- remove for production -->
                Component: Sidebar Menu
            </div><!-- /RM element -->
            <div class="tc">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you">
                <h1 class="f3 mb2">Mimi W.</h1>
                <h2 class="f5 fw4 gray mt0">Role: <span>{{ role }}</span></h2>
            </div>
        </div>
        <div class="sidebar-menu bt">
            <ul class="sb-menu ph0 tl">
                <li class="white f4 pv2 ph4">
                    <router-link to="/" class="white">Dashboard</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/" class="white">App Roles</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/" class="white">Design Studio</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/" class="white">Manage Menu</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/" class="white">Manage Pages</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            role: String
        }
    }
</script>

<style scoped>
    .sidebar {
        background-color: #036669;
    }

    .sidebar-menu {
        border-color: #3d8082;
    }

    .sidebar-menu ul {
        list-style: none;;
    }

    .sb-menu a {
        text-decoration: none;
    }
</style>