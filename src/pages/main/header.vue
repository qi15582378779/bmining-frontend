<template>
    <div class="_main-header"
        :class="{'_fixed': isShow}"
        data-0="background-color: rgba(255, 255, 255, 0);"
        data-300="background-color: rgba(255, 255, 255, 1);">
        <div class="_header-left">
            <div>
                <div class="_header-menu" @click="openClick">
                    <img src="../../assets/images/menu.svg" alt="">
                </div>
                <img class="_header-logo _logo-light" src="../../assets/images/logo/logo-light.svg"
                    alt=""
                    data-0="opacity: 1" data-300="opacity: 0">
                <img class="_header-logo _logo-dark" src="../../assets/images/logo/logo-dark.svg"
                    alt=""
                    data-0="opacity: 0" data-300="opacity: 1">
            </div>
        </div>

        <div class="_header-right" :class="{'_open': isOpen}" @click.self="closeClick">
            <ul>
                <li class="_app-logo">
                    <img src="../../assets/images/logo/logo-dark.svg" alt="">
                </li>
                <li v-for="(el, index) in navList"
                    :key="index"
                    class="_app-li"
                    @click="closeClick"
                >
                    <router-link
                        :to="el.url"
                        :active-class="'_active'"
                        data-0="color: rgb(255, 255, 255);"
                        data-300="color: rgb(30, 35, 65);"
                    >{{el.name}}
                        <img src="../../assets/images/bor.svg" alt="" class="_bor-img">
                    </router-link>
                </li>
            </ul>
        </div>

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
                    name: 'INVESTORS',
                    url: '/investors'
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
            this.isOpen = true;
        },
        closeClick() {
            this.isOpen = false;
            console.log('isOpen===>', this.isOpen)
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

            ._header-menu {
                display: none;
            }

            ._header-logo {
                height: 45px;
                position: absolute;
                top: 0;
                left: 0;
                transition: all .2s ease;
            }
        }

        ._header-right {
            ul {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
            }

            ._app-logo {
                display: none;
            }

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

            ._header-left {
                width: 100%;
                height: 100%;
                background-color: #ffffff;

                & > div {
                    width: 100%;
                    height: 100%;

                    ._header-menu {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        width: 24px;
                        margin-left: 11px;

                        img {
                            width: 100%;
                        }
                    }

                    ._header-logo {
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }

                    ._logo-light {
                        opacity: 0 !important;
                    }

                    ._logo-dark {
                        opacity: 1 !important;
                    }
                }
            }

            ._header-right {
                position: fixed;
                display: block;
                width: 0;
                height: 100vh;
                background: rgba(0, 0, 0, 0.5);
                top: 0;
                left: 0;
                z-index: 100;
                transition: all .2s;
                overflow: hidden;

                &._open {
                    width: 100%;
                }

                ul {
                    display: block;
                    width: calc(100% - 55px);
                    height: 100%;
                    background: #ffffff;

                    li {
                        width: 100%;
                        margin: 0;
                        overflow: hidden;

                        &._app-logo {
                            height: 122px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            img {
                                height: 47px;
                            }
                        }

                        &._app-li {
                            height: 60px;

                            a {
                                display: flex;
                                align-items: center;
                                width: 100%;
                                height: 100%;
                                padding: 0 24px;
                                border-bottom: 1px solid #F0F0F0;
                                color: #1E2341 !important;

                                &:hover, &._active {
                                    color: #345FFA !important;
                                    background: #E9E9E9;
                                    border-bottom-color: #E9E9E9;
                                    font-weight: bold;

                                    ._bor-img {
                                        display: none;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
