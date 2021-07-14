<template>
    <div class="_footer">
        <div class="_footer-container">
            <div>
                ©️2021 Blue Ridge Mining Group Corp.
            </div>
            <div>
                <template v-for="(el, index) in linkList">
                    <router-link
                        :to="el.url"
                        :key="index"
                        :active-class="'_active'">{{el.name}}
                    </router-link>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer-index',
    data() {
        return {
            linkList: [
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    ._footer {
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: center;
        margin-top: -75px;
        position: relative;
        z-index: 99;

        ._footer-container {
            width: 1280px;
            height: 100%;
            border-top: 1px solid #E0E5FF;
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                align-items: center;

                &:nth-of-type(1) {
                    font-size: 16px;
                    color: #292C2F;
                }

                &:nth-of-type(2) {
                    a {
                        display: flex;
                        margin-right: 32px;
                        transition: all .2s;
                        color: var(--col-main);

                        &:hover {
                            margin-top: -4px;
                        }

                        i {
                            font-size: 24px;
                        }

                        &:nth-last-of-type(1) {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        ._footer {
            padding: 0 19px;

            ._footer-container {
                width: 100%;
                justify-content: space-around;
                /*flex-flow: row-reverse ;*/
                flex-wrap: wrap;

                & > div {
                    width: 100%;
                    justify-content: center;

                    &:nth-of-type(1) {
                        font-size: 12px;
                    }

                    &:nth-of-type(2) {
                        a {
                            i {
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
