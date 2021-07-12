<template>
    <div class="_main-header">
        <div class="_header-left">
            <div>
                <i class="iconfont" v-html="isOpen ? '&#xe61f;' : '&#xe61e;'"
                    @click="openClick"></i>
                <img class="_header-logo" src="../../assets/images/logo/logo.svg" alt="">
            </div>

            <a :name="appUrl" target="_blank" class="_h5-app">Enter app</a>
        </div>

        <ul class="_header-right" :class="{'_open': isOpen}">
            <li v-for="(el, index) in navList" :key="index" @click="toUrl(el.url)">
                <a :href="el.anchor">{{el.name}}</a>
                <img src="../../assets/images/bor.svg" alt="" class="_bor-img">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'header-index',
    data() {
        return {
            isOpen: false,
            navList: [
                {
                    name: 'ABOUT US',
                    anchor: '#about_us'
                },
                {
                    name: 'OPERAITION',
                    anchor: '#operation'
                },
                {
                    name: 'TEAM',
                    anchor: '#team'
                },
                {
                    name: 'CONTACT',
                    anchor: '#contact'
                }
            ]
        }
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

        ._header-left {
            display: flex;
            align-items: center;
            height: 100%;

            i {
                display: none;
            }

            img {
                height: 44px;
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
                    transition: all .5s;
                }

                a {
                    font-size: 16px;
                    color: #ffffff;
                    transition: all .5s;
                }

                &:hover {
                    a {
                        color: #9BC456;
                    }

                    ._bor-img {
                        transform: translateX(-50%) scale(1, 1);
                    }
                }


                ._active {
                    color: #9BC456;
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
