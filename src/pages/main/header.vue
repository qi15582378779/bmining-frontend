<template>
    <div class="_main-header"
        :class="{'_fixed': isShow}"
        data-0="background-color: rgba(255, 255, 255, 0);"
        data-300="background-color: rgba(255, 255, 255, 1);">
        <div class="_header-left">
            <div>
                <i class="iconfont" v-html="isOpen ? '&#xe61f;' : '&#xe61e;'"
                    @click="openClick"></i>
                <img class="_header-logo _logo-light" src="../../assets/images/logo/logo-light.svg"
                    alt=""
                    data-0="opacity: 1" data-300="opacity: 0">
                <img class="_header-logo _logo-dark" src="../../assets/images/logo/logo-dark.svg"
                    alt=""
                    data-0="opacity: 0" data-300="opacity: 1">
            </div>
        </div>

        <ul class="_header-right" :class="{'_open': isOpen}">
            <li v-for="(el, index) in navList" :key="index">
                <router-link
                    :to="el.url"
                    :active-class="'_active'"
                    data-0="color: rgb(255, 255, 255);"
                    data-300="color: rgb(30, 35, 65);">{{el.name}}
                    <img src="../../assets/images/bor.svg" alt="" class="_bor-img">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'header-index',
    data() {
        return {
            isOpen: false,
            navList: [
                {
                    name: 'ABOUT US',
                    url: '/about-us'
                },
                {
                    name: 'OPERAITION',
                    url: '/operation'
                },
                {
                    name: 'TEAM',
                    url: '/team'
                },
                {
                    name: 'CONTACT',
                    url: '/contact'
                }
            ],
            a: 255,
            b: 255,
            c: 255,
            isShow: false
        }
    },
    computed: {
        ...mapGetters({
            scrollTop: 'getScrollTop',
            direction: 'getDirection'
        })
    },
    watch: {
        scrollTop: {
            handler(val) {
                this.isShow = val >= 300;
                if (this.direction === 'down' && val <= 300) {
                    this.a = this.a <= 30 ? 30 : (this.a - val / 10);
                    this.b = this.b <= 35 ? 35 : (this.b - val / 10);
                    this.c = this.c <= 65 ? 65 : (this.c - val / 10);
                }

                if (this.direction === 'up' && val <= 300) {
                    this.a = this.a >= 255 ? 255 : (this.a + val / 20);
                    this.b = this.b >= 255 ? 255 : (this.b + val / 20);
                    this.c = this.c >= 255 ? 255 : (this.c + val / 20);
                }

                if (val > 300) {
                    this.a = 30;
                    this.b = 35;
                    this.c = 65
                }

                if (val < 1) {
                    this.a = 255;
                    this.b = 255;
                    this.c = 255
                }
            },
            deep: true
        },
        $route: {
            handler() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            },
            deep: true
        },
    },
    methods: {
        openClick() {
            this.isOpen = !this.isOpen;
            console.log('isOpen===>', this.isOpen)
        },
        toUrl(url) {
            if (window.innerWidth <= 768) {
                this.isOpen = false;
            }
            window.open(url)
        }
    }
}
</script>

<style scoped lang="scss">
    ._main-header {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0 44px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        transition: all .5s;

        ._header-left {
            display: flex;
            align-items: center;
            height: 100%;

            & > div {
                display: flex;
                align-items: center;
                position: relative;
                height: 44px;
            }

            i {
                display: none;
            }

            img {
                height: 45px;
                position: absolute;
                top: 0;
                left: 0;
                transition: all .2s ease;
            }

            ._h5-app {
                display: none;
            }
        }

        ._header-right {
            display: flex;
            align-items: center;

            li {
                margin-right: 100px;
                cursor: pointer;
                position: relative;

                &:nth-last-of-type(1) {
                    margin-right: 0;
                }

                ._bor-img {
                    position: absolute;
                    bottom: -17px;
                    left: 50%;
                    transform: translateX(-50%) scale(0, 0);
                    transition: all .3s;
                }

                a {
                    font-size: 16px;
                    transition: all 1s;
                    color: #ffffff;

                    &:hover, &._active {
                        color: #9BC456 !important;

                        ._bor-img {
                            transform: translateX(-50%) scale(1, 1);
                        }
                    }
                }
            }
        }
    }

    ._fixed {
        box-shadow: 0 4px 4px rgba(249, 218, 218, 0.25);

        ._header-right {
            li {
                a {
                    &:hover, &._active {
                        color: #345FFA !important;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        ._main-header {
            height: 64px;
            padding: 0;
            position: relative;
            margin-bottom: -64px;

            ._header-left {
                width: 100%;
                padding: 0 10px;
                justify-content: space-between;

                & > div {
                    display: flex;
                    align-items: center;
                }

                i {
                    display: block;
                    color: var(--col-main);
                    font-size: 20px;
                    margin-right: 12px;
                }

                img {
                    height: 22px;
                }

                ._h5-app {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--col-bg);
                    border-radius: 8px;
                    width: 64px;
                    height: 22px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 8px;
                }
            }


            ._header-right {
                position: fixed;
                display: block;
                width: 100%;
                height: 0;
                background: #ffffff;
                top: 64px;
                left: 0;
                z-index: 100;
                transition: all .2s;
                overflow: hidden;

                &._open {
                    height: 100vh;
                }

                li {
                    width: 100%;
                    height: 32px;
                    margin-right: 0;
                    display: flex;
                    align-items: center;
                    padding: 0 14px;
                    font-size: 12px;
                    margin-bottom: 14px;

                    &:nth-of-type(1) {
                        margin-top: 14px;
                    }


                    color: #292C2F;

                    &:hover {
                        background: #F4F4F4;
                        color: var(--col-main);
                    }

                    &:nth-last-of-type(1) {
                        display: none;
                    }
                }
            }
        }
    }
</style>
