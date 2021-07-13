import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        scrollTops: 0
    },
    getters: {
        scrollTops(state) {
            return state.scrollTops
        }
    },
    mutations: {
        setScrollTop(state, val) {
            state.scrollTops = val
        }
    }
})
