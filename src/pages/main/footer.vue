<template>
    <div class="_footer">
        <div class="_container">
            <div class="_footer-left">
                <template v-for="(el, index) in linkList">
                    <router-link
                        :to="el.url"
                        :key="index"
                        :active-class="'_active'">{{el.name}}
                    </router-link>
                </template>
                <p>©️2021 Blue Ridge BM Group Corp.</p>
            </div>
            <div class="_footer-right">
                <img src="../../assets/images/logo/logo-light.svg" alt="">
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    ._footer {
        width: 100%;
        height: 238px;
        display: flex;
        justify-content: center;
        background-color: #000000;

        ._container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        ._footer-left {
            a {
                color: #FFFFFF;
                font-size: 16px;
                margin-right: 50px;
                transition: all .3s ease;

                &:nth-last-of-type(1) {
                    margin-right: 0;
                }

                &:hover {
                    color: #9BC456;
                }
            }

            ._active {
                color: #9BC456;
                font-weight: 500;
            }

            p {
                font-size: 12px;
                color: #7D7F8C;
                margin-top: 24px;
            }
        }
    }

    @media (max-width: 768px) {
        ._footer {
            padding: 0 11px;
            position: relative;
            height: 200px;

            ._container {
                padding: 0 !important;
                align-items: flex-start;
            }

            ._footer-left {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: 110px;

                a {
                    display: flex;
                    font-size: 14px;
                    margin: 0;
                }

                p {
                    width: 100%;
                    text-align: center;
                }
            }

            ._footer-right {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                text-align: center;
                padding-top: 12px;

                img {
                    height: 47px;
                }
            }
        }
    }
</style>
