import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        scrollTop: 0
    },
    getters: {
        getScrollTop(state) {
            return state.scrollTop
        }
    },
    mutations: {
        setScrollTop(state, val) {
            console.log('val', val)
            state.scrollTop = val
        }
    }
})
