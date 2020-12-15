import Vue from 'vue'
import {
    mapGetters
} from 'vuex'

Vue.mixin({
    computed: {
        ...mapGetters(['getUser','userRole'])
    },
})