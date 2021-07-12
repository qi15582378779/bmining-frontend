<template>
    <div class="_main"
        :class="[switchClassName(activeIndex), {'_an-bg': bgShow}]"
        :style="{'background-color': switchBgColor(prev)}">
        <HeaderCom/>
        <div class="_main-container">
            <div class="_token-img">
                <div :class="[{'_show-an': topGifFlag}]">
                    <template v-for="(el, index) in tokenList">
                        <div :key="index"
                            @click="switchClick(index)"
                            @mouseover="imgHover(el)"
                            @mouseleave="imgLeave(el)"
                            :style="{'height': el.height}"
                            :class="[{'_active': activeIndex === index}, {'_an-top': topImgFlag}]">
                            <img :src="el.defaultImg" alt="" :class="{'_opacity-1': el.isShow}">
                            <img :src="el.activeImg" alt="" :class="{'_opacity-0': !el.isShow}">
                        </div>
                    </template>
                </div>

                <!--                <img src="../../assets/images/main/top-bg.gif" alt=""-->
                <!--                    :class="['_token-bg',{'_show-gif': topGifFlag}]"/>-->
            </div>

            <div class="_content">
                <div class="_content-left">
                    <div class="_left-top">
                        <p>Switch</p>
                        <p>on your wealth</p>
                        <p>Switch allows true asset movement and liquidity redistribution
                            cross-chain</p>
                    </div>

                    <div class="_left-center">
                        <el-button>Learn more</el-button>
                        <el-button @click="toApp"><i class="iconfont">&#xe61d;</i>Enter app
                        </el-button>
                    </div>

                    <div class="_left-bottom">
                        <p>BE THE FIRST TO TRY SWITCH</p>
                        <button @click="showModal">
                            <span>RESERVE YOUR E-MAILBE</span>
                            <span><i class="iconfont">&#xe611;</i></span>
                        </button>
                    </div>
                </div>
                <div class="_content-right">
                    <template v-for="(el, index) in chainBg">
                        <svga :src="el" :key="index" :options="options"
                            class="_right-img"
                            :class="{'_opacity-1': activeIndex === index}"/>
                    </template>
                </div>
            </div>
        </div>
        <FooterCom/>
        <email-modal :visible="isShow" :theme="switchClassName(activeIndex)" @close="closeModal"/>
    </div>
</template>

<script>
import HeaderCom from './header';
import FooterCom from './footer';
import {svga} from 'vue-svga'
import EmailModal from './email-modal'


export default {
    name: 'index',
    components: {HeaderCom, FooterCom, EmailModal, svga},
    data() {
        return {
            email: null,
            isShow: false,
            activeIndex: -1,
            prev: -1,
            activeName: 'eth',
            timer: null,
            bgShow: false,
            topGifFlag: false,
            topImgFlag: false,
            tokenList: [
                {
                    name: 'eth',
                    height: window.innerWidth < 768 ? '80px' : '159px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/eth-default.svg'),
                    activeImg: require('../../assets/images/main/eth-active.svg')
                },
                {
                    name: 'bnb',
                    height: window.innerWidth < 768 ? '60px' : '119px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/bnb-default.svg'),
                    activeImg: require('../../assets/images/main/bnb-active.svg')
                },
                {
                    name: 'ht',
                    height: window.innerWidth < 768 ? '100px' : '199px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/ht-default.svg'),
                    activeImg: require('../../assets/images/main/ht-active.svg')
                },
                {
                    name: 'fantom',
                    height: window.innerWidth < 768 ? '80px' : '159px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/fantom-default.svg'),
                    activeImg: require('../../assets/images/main/fantom-active.svg')
                },
                {
                    name: 'solana',
                    height: window.innerWidth < 768 ? '61px' : '122px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/solana-default.svg'),
                    activeImg: require('../../assets/images/main/solana-active.svg')
                },
                {
                    name: 'polygon',
                    height: window.innerWidth < 768 ? '80px' : '159px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/polygon-default.svg'),
                    activeImg: require('../../assets/images/main/polygon-active.svg')
                },
                {
                    name: 'xDai',
                    height: window.innerWidth < 768 ? '51px' : '101px',
                    isShow: false,
                    defaultImg: require('../../assets/images/main/xDai-default.svg'),
                    activeImg: require('../../assets/images/main/xDai-active.svg')
                },
            ],
            chainBg: [
                './svga/eth.svga',
                './svga/bnb.svga',
                './svga/ht.svga',
                './svga/fantom.svga',
                './svga/solana.svga',
                './svga/polygon.svga',
                './svga/xDai.svga',
            ],
            options: {
                loop: 0,
                fillMode: 'forwards',
                playMode: 'forwards',
                startFrame: 0,
                endFrame: 0,
                autoPlay: true
            },
            time1: null,
            time2: null,
            time3: null,
            time4: null,
            time5: null,
            time6: null,
            time7: null,
            time8: null,
            time9: null,
            time10: null,
            time11: null,
            time12: null,

            prevFlag: false
        }
    },
    mounted() {
        this.switchClick(0)
    },
    methods: {
        showModal() {
            this.isShow = true;
        },
        closeModal() {
            this.isShow = false;
        },
        imgHover(item) {
            item.isShow = true;
        },
        imgLeave(item) {
            item.isShow = false
        },
        switchClick(index) {
            clearTimeout(this.time1);
            clearTimeout(this.time2);
            clearTimeout(this.time3);
            clearInterval(this.timer);
            clearTimeout(this.time4);
            clearTimeout(this.time5);
            clearTimeout(this.time6);
            clearTimeout(this.time9);
            clearTimeout(this.time10);
            clearTimeout(this.time11);

            if (this.prevFlag) {
                this.prev = this.activeIndex;
            }
            this.prevFlag = true;
            if (this.activeIndex !== index) {
                this.bgShow = false;
                this.topGifFlag = false;
                this.activeIndex = index;

                // one img top
                this.topImgFlag = true;

                // bg left-right tranX
                this.time1 = setTimeout(() => {
                    this.topImgFlag = false;
                }, 550);

                // bg show
                this.time10 = setTimeout(() => {
                    this.bgShow = true;
                }, 100);

                // img gif top
                this.time2 = setTimeout(() => {
                    this.topGifFlag = true;
                }, 1600);

                // prev
                this.time11 = setTimeout(() => {
                    this.prev = index;
                    this.prevFlag = false;
                }, 2000);

                // reset top img gif
                this.time3 = setTimeout(() => {
                    this.topGifFlag = false;
                }, 3100);

                // bg false
                this.time9 = setTimeout(() => {
                    this.bgShow = false;
                }, 9800);
            }
            this.loopInit();
        },
        loopInit() {
            clearInterval(this.timer);
            clearTimeout(this.time4);
            clearTimeout(this.time5);
            clearTimeout(this.time6);
            clearTimeout(this.time12);

            this.timer = setInterval(() => {
                this.bgShow = true;
                this.activeIndex++;

                if (this.activeIndex > 6) {
                    this.activeIndex = 0;
                }

                // prev
                this.time12 = setTimeout(() => {
                    this.prev = this.activeIndex;
                }, 2000);

                this.time4 = setTimeout(() => {
                    this.topGifFlag = true;
                }, 0);

                this.time5 = setTimeout(() => {
                    this.topGifFlag = false;
                }, 1500);

                this.time6 = setTimeout(() => {
                    this.bgShow = false;
                }, 9800);

            }, 10000)
        },
        switchClassName(type) {
            let name = '';
            switch (type) {
                case 0:
                    name = 'eth-theme';
                    break;
                case 1:
                    name = 'bnb-theme';
                    break;
                case 2:
                    name = 'ht-theme';
                    break;
                case 3:
                    name = 'polygon-theme';
                    break;
                case 4:
                    name = 'fantom-theme';
                    break;
                case 5:
                    name = 'solana-theme';
                    break;
                case 6:
                    name = 'xDai-theme';
                    break;
                default:
                    name = 'bnb-theme'
            }
            return name
        },
        switchBgColor(type) {
            let name = '';
            switch (type) {
                case 0:
                    name = '#F7F8FF';
                    break;
                case 1:
                    name = '#FDFDFC';
                    break;
                case 2:
                    name = '#F3F8FB';
                    break;
                case 3:
                    name = '#FCFBFF';
                    break;
                case 4:
                    name = '#F9F9FF';
                    break;
                case 5:
                    name = '#FEFCFF';
                    break;
                case 6:
                    name = '#FAFFFF';
                    break;
                default:
                    name = '#EFF2F5'
            }
            return name
        },
        toApp() {
            window.open(location.host === 'https://switchfinance.xyz' ? 'https://app.switchfinance.xyz/' : 'https://app-dev.switchfinance.xyz/')
        }
    },
    destroyed() {
        clearInterval(this.timer);
        clearTimeout(this.time1);
        clearTimeout(this.time2);
        clearTimeout(this.time3);
        clearTimeout(this.time4);
        clearTimeout(this.time5);
        clearTimeout(this.time6);
        clearTimeout(this.time7);
        clearTimeout(this.time8);
        clearTimeout(this.time9);
        clearTimeout(this.time10);
        clearTimeout(this.time11);
        clearTimeout(this.time12);
    }
}
</script>

<style scoped lang="scss">
    ._main {
        width: 100%;
        height: 100%;
        /*background-color: var(--col-bg-75);*/
        position: relative;
        transition: all .2s;
        overflow: hidden;

        &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2000px;
            height: 2000px;
            border-radius: 50%;
            content: '';
            /*transition: all .5s;*/
            background-color: var(--col-before-bg);
            transform: translate(-50%, -50%) scale(0, 0);
        }

        ._main-container {
            width: 100%;
            min-height: 100%;
            padding-top: 80px;
            padding-bottom: 75px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        ._content {
            width: 1240px;
            margin: 0 auto;
            position: relative;
        }

        ._token-img {
            width: 1240px;
            height: 200px;
            position: absolute;
            top: 60px;
            left: 50%;
            z-index: 99;
            transform: translateX(-50%);

            & > div {
                width: 100%;
                height: 100%;
                display: flex;
                transition: all .2s;
                position: relative;
                z-index: 99;
                padding-left: 50px;
                overflow: hidden;

                & > div {
                    position: relative;
                    width: 40px;
                    margin-right: 85px;

                    img {
                        position: absolute;
                        transition: all .2s;
                        cursor: pointer;
                        height: 100%;
                    }

                    ._opacity-1 {
                        opacity: 1;
                    }

                    ._opacity-0 {
                        opacity: 0;
                    }

                    &._an-top {
                        img:nth-of-type(2) {
                            animation: topTran .6s ease-in-out;
                        }
                    }

                    &._active {
                        img {
                            &:nth-of-type(1) {
                                opacity: 0 !important;
                            }

                            &:nth-of-type(2) {
                                opacity: 1 !important;
                            }
                        }
                    }
                }
            }
        }

        ._token-bg {
            height: 200px;
            position: absolute;
            top: 3px;
            left: -149px;
            z-index: 98;
            opacity: 0;
            transition: all .2s;
        }

        ._show-gif {
            opacity: 1;
        }

        ._show-svg {
            opacity: 1 !important;
        }

        ._show-an {
            & > div {
                img {
                    &:nth-of-type(1) {
                        opacity: 0 !important;
                    }

                    &:nth-of-type(2) {
                        opacity: 1 !important;

                    }
                }

                &:nth-of-type(1) img:nth-of-type(2) {
                    animation: tranY1 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }

                &:nth-of-type(2) img:nth-of-type(2) {
                    animation: tranY2 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }

                &:nth-of-type(3) img:nth-of-type(2) {
                    animation: tranY3 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }

                &:nth-of-type(4) img:nth-of-type(2) {
                    animation: tranY4 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }

                &:nth-of-type(5) img:nth-of-type(2) {
                    animation: tranY5 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }

                &:nth-of-type(6) img:nth-of-type(2) {
                    animation: tranY6 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }

                &:nth-of-type(7) img:nth-of-type(2) {
                    animation: tranY7 1.5s ease-in-out;
                    animation-fill-mode: forwards;
                    transform-origin: top;
                }
            }
        }


        ._content-left {
            position: relative;
            z-index: 10;
        }

        ._right-img {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-38%) scale(0, 0);
            z-index: 0;
            transition: all .5s;
            opacity: 0;

            &._opacity-1 {
                opacity: 1 !important;
                transform: translateY(-38%) scale(1, 1);
            }
        }

        ._left-top {
            margin-bottom: 48px;

            p {
                &:nth-of-type(1), &:nth-of-type(2) {
                    transition: all 2s;
                    color: var(--col-main);
                    font-family: sanBold;
                    font-style: italic;
                }

                &:nth-of-type(1) {
                    background: linear-gradient(var(--col-line-1), var(--col-line-2));
                    background-clip: border-box;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 72px;
                    line-height: 72px;
                }

                &:nth-of-type(2) {
                    margin-bottom: 18px;
                    color: var(--col-main);

                    font-size: 64px;
                    line-height: 64px;
                }

                &:nth-of-type(3) {
                    width: 445px;
                    font-size: 22px;
                    line-height: 40px;
                    color: rgba(#292C2F, .8);
                }
            }
        }

        ._left-center {
            margin-bottom: 53px;

            button {
                width: 180px;
                height: 50px;
                font-size: 16px;
                font-weight: 400;
                border-radius: 8px;
                margin: 0;
                padding: 0;
                border: none;
                transition: all 2s;

                &:nth-of-type(1) {
                    border: 1.5px solid var(--col-border);
                    color: var(--col-main);
                    margin-right: 50px;
                    background: transparent;

                    &:hover {
                        color: #ffffff;
                        background: var(--col-main);
                    }
                }

                &:nth-of-type(2) {
                    background-color: var(--col-bg);
                    color: #ffffff;

                    i {
                        font-size: 16px;
                        margin-right: 8px;
                    }

                    &:hover {
                        background: var(--col-hover);
                    }
                }
            }
        }

        ._left-bottom {
            p {
                font-size: 12px;
                line-height: 12px;
                color: rgba(#292C2F, .6);
                margin-bottom: 10px;
            }

            button {
                width: 280px;
                height: 42px;
                border: 1px solid #DDDDDD;
                border-radius: 8px;
                background: transparent;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
                transition: all .2s;
                cursor: pointer;

                &:hover {
                    border-color: var(--col-main);

                    span {
                        &:nth-of-type(1) {
                            color: var(--col-main);
                        }

                        &:nth-of-type(2) {
                            background-color: var(--col-main);

                            i {
                                margin-left: 5px;
                            }
                        }
                    }
                }


                span {
                    transition: all .2s;

                    &:nth-of-type(1) {
                        font-size: 14px;
                        line-height: 14px;
                        padding-left: 12px;
                        color: #CFCECE;
                    }

                    &:nth-of-type(2) {
                        width: 56px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #E0E0E0;
                        color: #ffffff;

                        i {
                            transition: all .2s;
                        }
                    }
                }

            }
        }
    }

    ._an-bg {
        &::before {
            animation: widthTran 2s ease-in;
            animation-fill-mode: forwards;
        }
    }

    @media (max-width: 768px) {
        ._main {
            overflow-y: auto;

            ._main-container {
                padding-top: 64px;
                display: block;
                min-height: auto;
                height: auto;
            }

            ._content {
                width: 100%;
                padding-top: 30px;
            }

            ._token-img {
                width: 100%;
                height: 85px;
                display: flex;
                position: relative;
                top: 0;
                left: 0;
                z-index: 99;
                transform: translateX(0);

                & > div {
                    padding: 0 25px;

                    & > div {
                        width: 20px;
                        margin-right: 30px;

                        &:nth-last-of-type(1) {
                            margin-right: 0;
                        }
                    }
                }


            }

            ._token-bg {
                top: 12px;
                height: 80px;
                left: 50%;
                transform: translateX(-50%);
            }

            ._content-right {
                height: 360px;
                position: relative;

                ._right-img {
                    width: 312px;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0, 0);

                    &._opacity-1 {
                        transform: translate(-50%, -50%) scale(1, 1);
                    }
                }
            }

            ._left-top {
                margin-bottom: 56px;

                p {
                    text-align: center;
                    font-weight: bold;

                    &:nth-of-type(1), &:nth-of-type(2) {
                        font-size: 24px;
                        line-height: 24px;
                    }

                    &:nth-of-type(1) {
                        margin-bottom: 8px;
                    }

                    &:nth-of-type(2) {
                        margin-bottom: 24px;
                    }

                    &:nth-of-type(3) {
                        width: 100%;
                        font-size: 14px;
                        line-height: 22px;
                        color: rgba(#292C2F, .8);
                        padding: 0 44px;
                    }
                }
            }

            ._left-center {
                text-align: center;
                padding: 0 44px;
                margin-bottom: 14px;

                button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 34px;
                    margin: 0 20px !important;
                    font-size: 12px;
                    width: 215px;

                    &:nth-of-type(1) {
                        margin-bottom: 14px !important;
                    }

                    &:nth-of-type(2) {
                        i {
                            font-size: 14px;
                            margin-right: 6px;
                        }
                    }
                }
            }

            ._left-bottom {
                p {
                    width: 215px;
                    margin: 0 auto 6px;
                    font-size: 8px;
                    line-height: 8px;
                }

                button {
                    width: 215px;
                    height: 34px;
                    margin: 0 auto;

                    span {
                        &:nth-of-type(1) {
                            font-size: 10px;
                            padding-left: 6px;
                        }

                        &:nth-of-type(2) {
                            width: 34px;
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
