<template>
    <div class="sidebar fl w-20 pv2 vh-100">
        <div class="sidebar-top pv3 ph2 white">
            <div class="white-70 f6 lh-copy mb3"><!-- remove for production -->
                Component: Sidebar Menu
            </div><!-- /RM element -->
            <div class="tc">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you">
                <h1 class="f3 mb2">Mimi W.</h1>
                <h2 class="f6 fw4 white-70 mt0">Role: <span>{{ role }}</span></h2>
            </div>
        </div>
        <div class="sidebar-menu bt">
            <ul class="sb-menu ph0 tl">
                <li class="white f4 pv2 ph4">
                    <router-link to="/dashboard" class="white flex"><i class="material-icons pr3">addchart</i> Dashboard</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/app-roles" class="white flex"><i class="material-icons pr3">people</i> App Roles</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/design-studio" class="white flex"><i class="material-icons pr3">art_track</i> Design Studio</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/manage-menu" class="white flex"><i class="material-icons pr3">map</i> Menu</router-link>
                </li>
                <li class="white f4 pv2 ph4">
                    <router-link to="/manage-pages" class="white flex"><i class="material-icons pr3">library_books</i> Manage Pages</router-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-extra bt">
            <ul class="sb-menu tl ph4 mv3">
                <li class="pv1">
                    <router-link class="white-80 pv1 flex" to="/help"><span> <i class="material-icons pr2">help_outline</i> Help Center</span></router-link>
                </li>
                <li>
                    <router-link class="white-80 pv1 flex" to="/settings"><span> <i class="material-icons pr2">settings</i> Settings</span></router-link>
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

    .sidebar-menu, .sidebar-extra {
        border-color: #3d8082;
    }

    .sidebar-menu, .sidebar-extra ul {
        list-style: none;;
    }

    .sb-menu a {
        text-decoration: none;
    }

    .material-icons {
       font-size: 20px;
    }
</style>