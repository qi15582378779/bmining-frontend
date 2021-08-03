<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name: 'App',
    data() {
        return {
            i: 0,
            isRouterAlive: false
        }
    },
    created() {
        setTimeout(() => {
            require(['skrollr'], function (skrollr) {
                console.log('skrollr', skrollr)
                skrollr.init();
                document.getElementById('screen-loading').style.display = 'none';
                document.getElementById('app').style.display = 'block';
            });
        }, 1000)
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

            const scroll = scrollTop - this.i;
            this.i = scrollTop;
            if (scroll < 0) {
                // console.log('up');
                this.$store.commit('setScrollDirection', 'up')
            } else {
                // console.log('down');
                this.$store.commit('setScrollDirection', 'down')
            }
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
