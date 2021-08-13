<template>
    <div class="_operation">
        <div class="_operation-bg">
            <div>
                <p>Cryptocurrency Mining</p>
                <p>Defends the value of decentralized network in the digital world</p>
            </div>
        </div>

        <ul class="_operation-list" :class="{'_active-list': activeListFlag}">
            <template v-if="appFlag">
                <li v-for="(el, index) of txtList" :key="index">
                    <div class="_list-img" :style="'background-image: url(' + el.imgUrl +')'"
                        v-if="el.isShow"></div>
                    <!--                    <img :src="el.imgUrl" alt="" v-if="el.isShow">-->
                    <div v-if="!el.isShow">
                        <p></p>
                        <p v-html="el.txt"></p>
                    </div>
                </li>
            </template>
            <template v-else>
                <li v-for="(el, index) of appTxtList" :key="index">
                    <img :src="el.imgUrl" alt="" v-if="el.isShow">
                    <div v-if="!el.isShow">
                        <p>{{el.title}}</p>
                        <p v-html="el.txt"></p>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'operation',
    data() {
        return {
            txtList: [
                {
                    imgUrl: require('../../assets/images/operation/operation-1.png'),
                    isShow: true
                },
                {
                    isShow: false,
                    // title: 'Mining',
                    txt: 'Our mining operations are primarily conducted in <span>North America</span>. Our Bitcoin miners and ethereum miners are located in various states in the <span>United States</span> and <span>Canada</span>.'
                },
                {
                    isShow: false,
                    // title: 'Mine hosting service',
                    txt: 'We deployed Bitcoin and Ethereum miners in North Carolina, Pennsylvania, Tennessee, Alberta and Quebec. Transaction mandates are settled in Singapore.'
                },
                {
                    isShow: true,
                    imgUrl: require('../../assets/images/operation/operation-2.png'),
                },
                // {
                //     isShow: true,
                //     imgUrl: require('../../assets/images/operation/operation-3.png'),
                // },
                // {
                //     isShow: false,
                //     title: 'Mine',
                //     txt: 'we’re strategically positioned to remain at the forefront of the cryptocurrency mining market.'
                // },
            ],
            appTxtList: [
                {
                    imgUrl: require('../../assets/images/operation/operation-1.png'),
                    isShow: true
                },
                {
                    isShow: false,
                    title: 'Mining',
                    txt: 'Our mining operations are primarily conducted in <span>North America</span>. Our Bitcoin miners and ethereum miners are located in various states in the <span>United States</span> and <span>Canada</span>.'
                },
                {
                    isShow: true,
                    imgUrl: require('../../assets/images/operation/operation-2.png'),
                },
                {
                    isShow: false,
                    title: 'Mine hosting service',
                    txt: 'We deployed Bitcoin and Ethereum miners in North Carolina, Pennsylvania, Tennessee, Alberta and Quebec. Transaction mandates are settled in Singapore.'
                },
                // {
                //     isShow: true,
                //     imgUrl: require('../../assets/images/operation/operation-3.png'),
                // },
                // {
                //     isShow: false,
                //     title: 'Mine',
                //     txt: 'we’re strategically positioned to remain at the forefront of the cryptocurrency mining market.'
                // },
            ],
            activeListFlag: false,
            timer: null,
            appFlag: window.innerWidth > 768
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.activeListFlag = true
        }, 100)
    },
    destroyed() {
        clearTimeout(this.timer)
    }
}
</script>

<style scoped lang="scss">
    ._operation {
        width: 100%;
        touch-action: pan-y;

        ._operation-bg {
            width: 100%;
            height: 460px;
            background-image: url("../../assets/images/operation/operation-bg.png");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            p:nth-of-type(1) {
                font-weight: 500;
                font-size: 60px;
                line-height: 60px;
                color: #5277FB;
                text-shadow: 4px 3px 4px rgba(113, 142, 255, 0.2);
                margin-bottom: 12px;
            }

            p:nth-of-type(2) {
                font-size: 28px;
                line-height: 28px;
                color: #FFFFFF;
            }

            p {
                animation: tranTop 1s ease-in-out;
            }
        }

        ._operation-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 1550px;
            max-width: 100%;
            margin: 0 auto;

            li {
                width: 50%;
                height: 456px;
                display: flex;
                align-items: center;
                opacity: 0;
                transform: translate(20px, 20px);
                transition: all .6s ease;
                background-color: #1A2229;

                img {
                    width: 100%;
                    height: 100%;
                }

                ._list-img {
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: auto 100%;
                    background-repeat: no-repeat;
                }

                &:nth-of-type(odd) {
                    /*justify-content: flex-end;*/
                    padding-right: 38px;
                }

                &:nth-of-type(even) {
                    padding-left: 38px;
                }

                &:nth-of-type(2) div {
                    width: 620px;
                }

                &:nth-of-type(3) div {
                    width: 600px;
                }

                &:nth-of-type(6) div {
                    width: 600px;
                }

                & > div {
                    p {
                        span {
                            color: #fff;
                        }

                        &:nth-of-type(1) {
                            font-size: 36px;
                            line-height: 36px;
                            color: #ffffff;
                            /*margin-bottom: 22px;*/
                        }

                        &:nth-of-type(2) {
                            font-size: 24px;
                            line-height: 34px;
                            color: #ffffff;
                            font-family: "Bangla MN";

                            ::v-deep span {
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }

        ._active-list {
            li {
                transform: translate(0, 0);
                opacity: 1;

                &:nth-of-type(1) {
                    transition-delay: 0s;
                }

                &:nth-of-type(2) {
                    transition-delay: .1s;
                }

                &:nth-of-type(3) {
                    transition-delay: .2s;
                }

                &:nth-of-type(4) {
                    transition-delay: .3s;
                }

                &:nth-of-type(5) {
                    transition-delay: .4s;
                }

                &:nth-of-type(6) {
                    transition-delay: .5s;
                }
            }
        }
    }

    @media (max-width: 768px) {
        ._operation {
            ._operation-bg {
                height: 230px;
                background-position: center;
                background-size: auto 100%;

                p {
                    &:nth-of-type(1) {
                        font-size: 26px;
                        line-height: 26px;
                    }

                    &:nth-of-type(2) {
                        font-size: 14px;
                        line-height: 14px;
                    }
                }
            }

            ._operation-list {
                flex-wrap: wrap;

                li {
                    width: 100%;
                    height: auto;
                    padding: 0 !important;

                    img {
                        height: 232px;
                    }

                    & > div {

                        p {
                            &:nth-of-type(1) {
                                font-size: 26px;
                                line-height: 26px;
                                color: #fff;
                            }

                            &:nth-of-type(2) {
                                font-size: 18px;
                                line-height: 32px;
                            }
                        }
                    }

                    &:nth-of-type(2n) {
                        padding: 31px 24px !important;
                    }
                }
            }
        }
    }
</style>
