<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name: 'App',
    provide() {
        return {
            scrollTop: this.num
        }
    },
    data() {
        return {
            num: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            let scrollTop = window.pageXOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            this.$store.commit('setScrollTop', scrollTop);
        }
    }
}
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
