<template>
    <div class="_about-us">
        <div class="_about-bg" :style="{'height': bgHeight}">
            <div>
                <p>World-leading</p>
                <p>Cryptocurrency Mining Company</p>
                <p>BM Group is devoted to building a prestigious crypto conglomerate and expanding
                    the business scope to a full spectrum of bespoke crypto services.</p>
            </div>
        </div>

        <div class="_about-all" :class="{'_active-all': activeAllFlag}">
            <h3>
                <span>ALL</span>
                IN ONE - <span>ALL</span> IN BMINING</h3>

            <ul class="_all-list">
                <li v-for="(el, index) of allList" :key="index">
                    <div>
                        <img :src="el.img" alt="">
                        <img :src="el.imgHover" alt="">
                    </div>
                    <p>{{el.name}}</p>
                </li>
            </ul>
        </div>

        <div class="_container _lead" :class="{'_active-lead': activeListFlag}">
            <div class="_lead-title">Crypto Asset Mining Leaders</div>
            <ul class="_lead-list">
                <li v-for="(el, index) of leadersList" :key="index">
                    <p class="_list-title">{{el.title}}</p>
                    <div class="_hover-be">
                        <img :src="el.url" alt="">
                    </div>
                    <div class="_hover-af">
                        <p>{{el.msg}}</p>
                        <img src="../../assets/images/bor.svg" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'about-us',
    data() {
        return {
            allList: [
                {
                    img: require('../../assets/images/about-us/all-1.svg'),
                    imgHover: require('../../assets/images/about-us/all-1-hover.svg'),
                    name: 'Mining'
                },
                {
                    img: require('../../assets/images/about-us/all-2.svg'),
                    imgHover: require('../../assets/images/about-us/all-2-hover.svg'),
                    name: 'Miner hosting service'
                },
                {
                    img: require('../../assets/images/about-us/all-3.svg'),
                    imgHover: require('../../assets/images/about-us/all-3-hover.svg'),
                    name: 'Financial business'
                }
            ],
            leadersList: [
                {
                    title: 'Stable, cost-efficient, and clean energy',
                    url: require('../../assets/images/about-us/lead-1.svg'),
                    msg: 'North America has abundant natural resources, with sufficient supply of hydropower, solar, wind, and biomass energy. BM Group has collaborated with prestigious mining owners in North America to maximize clean energy utilization, save mining cost and improve mining efficiency.'
                },
                {
                    title: 'Partnership with the world’s premier miners',
                    url: require('../../assets/images/about-us/lead-2.svg'),
                    msg: 'BM Group has partnered with top suppliers of the industry, which grants us guaranteed and prioritized access to the most advanced miners in the industry. Thereby, BM Group has minimized supply constraints and created unique barrier to entry. BM Group is also capable of leveraging the relatively stable price to hedge crypto market volatility.'
                },
                {
                    title: 'Experienced management team and extensive network',
                    url: require('../../assets/images/about-us/lead-3.svg'),
                    msg: 'The well-connected management team is equipped with deep industry know-how and rich experience, and is capable of driving insightful and innovative changes.'
                },
                {
                    title: 'Clear blueprint for growth',
                    url: require('../../assets/images/about-us/lead-4.svg'),
                    msg: 'BM Group has a clear blueprint for growth driven both through scaling computing power, and its evolving ecosystem of cryptocurrency exchange services. BM Group aims to acquire BTC mining rigs to reach a hash rate of 12.5 EH/s by 2025. In addition to further investments in computing power, BM Group’s future growth strategy will be driven by expansion into a full spectrum of market-making and other crypto currency exchange services.'
                }
            ],
            activeAllFlag: false,
            activeListFlag: false,
            bgHeight: window.innerWidth < 768 ? 'auto' : window.innerHeight + 'px',
            time1: null,
            time2: null
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
                if (window.innerWidth > 768) {
                    if (this.direction === 'down' && val > 350) {
                        this.activeAllFlag = true;
                    }
                    if (this.direction === 'down' && val > window.innerHeight / 2) {
                        this.activeListFlag = true
                    }
                }
            },
            deep: true
        }
    },
    mounted() {
        if (window.innerWidth < 768) {
            this.time1 = setTimeout(() => {
                this.activeAllFlag = true
            }, 500);
            this.time2 = setTimeout(() => {
                this.activeListFlag = true
            }, 1000);
        }
    },
    destroyed() {
        clearTimeout(this.time1);
        clearTimeout(this.time2);
    }
}
</script>

<style scoped lang="scss">
    ._about-us {
        width: 100%;

        ._about-bg {
            width: 100%;
            background-image: url("../../assets/images/about-us/about_us-bg.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            color: #5277FB;

            p {
                width: 100%;
                font-weight: 500;
                font-size: 64px;
                line-height: 90px;
                text-shadow: 4px 3px 4px rgba(113, 142, 255, 0.2);
                text-align: center;
                animation: tranTop 1s ease-in-out;

                &:nth-of-type(3) {
                    width: 1212px;
                    max-width: 100%;
                    margin: 28px auto 0;
                    font-size: 24px;
                    line-height: 40px;
                    color: #FFFFFF;
                    text-shadow: 4px 3px 4px rgba(192, 243, 106, 0.2);
                }
            }
        }

        ._about-all {
            color: #ffffff;
            padding: 52px 0;
            background-color: #1A2229;

            h3 {
                width: 100%;
                text-align: center;
                font-size: 36px;
                line-height: 36px;
                font-weight: 400;
                letter-spacing: 0.1em;
                margin-bottom: 68px;
                transition: opacity .6s ease;
                opacity: 0;

                span:nth-of-type(1) {
                    color: #5277FB;
                }

                span:nth-of-type(2) {
                    color: #5277FB;
                }
            }
        }

        ._all-list {
            display: flex;
            justify-content: center;
            width: 1200px;
            max-width: 100%;
            margin: 0 auto;

            li {
                text-align: center;
                transition: opacity .6s ease;
                opacity: 0;
                width: 33.33%;

                & > div {
                    width: 116px;
                    height: 126px;
                    position: relative;
                    margin-bottom: 26px;
                    display: inline-block;

                    img {
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                        transition: opacity .2s ease;

                        &:nth-of-type(1) {
                            opacity: 1;
                        }

                        &:nth-of-type(2) {
                            opacity: 0;
                        }
                    }

                }


                p {
                    font-size: 28px;
                    line-height: 28px;
                    color: #ffffff;
                    transition: color .2s ease;
                }

                &:nth-of-type(2) {
                    /*margin: 0 190px;*/
                }

                &:hover {
                    & > div img {
                        &:nth-of-type(1) {
                            opacity: 0;
                        }

                        &:nth-of-type(2) {
                            opacity: 1;
                        }
                    }

                    p {
                        color: #5277FB;
                    }
                }
            }
        }

        ._active-all {
            h3 {
                opacity: 1;
                transition-delay: .0s;
            }

            ._all-list li {
                opacity: 1;

                &:nth-of-type(1) {
                    transition-delay: .1s;
                }

                &:nth-of-type(2) {
                    transition-delay: .2s;
                }

                &:nth-of-type(3) {
                    transition-delay: .3s;
                }
            }
        }

        ._lead {
            padding: 52px 0;
        }

        ._lead-title {
            font-size: 38px;
            line-height: 44px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #5277FB;
            margin-bottom: 56px;
            transform: translate(20px, 20px);
            opacity: 0;
            transition: all .5s ease;
        }

        ._lead-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            li {
                width: 550px;
                height: 300px;
                background: #1F272F;
                box-shadow: 0 3px 8px 1px #161C23;
                border-radius: 10px;
                margin-bottom: 48px;
                text-align: center;
                padding: 24px 28px;
                color: #ffffff;
                position: relative;
                transform: translate(20px, 20px);
                opacity: 0;
                transition: all .6s ease;

                ._list-title {
                    text-align: left;
                    font-size: 24px;
                }

                ._hover-be, ._hover-af {
                    transition: all .5s ease;
                    position: absolute;
                    left: 50%;
                    width: 100%;
                    /*height: 100%;*/
                    transform: translateX(-50%);
                }

                ._hover-be {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    top: 0;
                    height: 100%;
                    transform: translateX(-50%);

                    img {
                        margin-top: 40px;
                    }
                }

                ._hover-af {
                    transform: translateX(-50%) scale(0);
                    opacity: 0;
                    text-align: left;
                    padding: 26px 28px 0;
                    font-size: 12px;
                    line-height: 20px;
                    color: #ffffff;
                    font-family: "Bangla MN";

                    img {
                        margin-top: 12px;
                    }

                    p {
                        font-size: 14px;
                    }
                }

                &:hover {
                    background-color: #32393F;

                    ._hover-be {
                        transform: translateX(-50%) scale(0);
                        opacity: 0;
                    }

                    ._hover-af {
                        transform: translateX(-50%) scale(1);
                        opacity: 1;
                    }
                }
            }
        }

        ._active-lead {
            ._lead-title {
                transform: translate(0, 0);
                opacity: 1;
                transition-delay: 0s;
            }

            ._lead-list {
                li {
                    transform: translate(0, 0);
                    opacity: 1;

                    &:nth-of-type(1) {
                        transition-delay: .1s;
                    }

                    &:nth-of-type(2) {
                        transition-delay: .2s;
                    }

                    &:nth-of-type(3) {
                        transition-delay: .3s;
                    }

                    &:nth-of-type(4) {
                        transition-delay: .4s;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        ._about-us {
            ._about-all {

            }

            ._all-list {
                li {
                    &:nth-of-type(2) {
                        margin: 0 15%;
                    }
                }
            }

            ._lead-list {
                justify-content: center;
            }
        }
    }

    @media (max-width: 768px) {
        ._about-us {
            ._about-bg {
                height: 310px !important;
                background-position: center;
                background-size: auto 100%;

                p {
                    font-size: 24px;
                    line-height: 30px;
                    padding: 0 20px;

                    &:nth-of-type(3) {
                        width: 100%;
                        font-size: 14px;
                        line-height: 20px;
                        margin-top: 18px;
                    }
                }
            }

            ._about-all {
                padding: 24px 0;

                h3 {
                    font-size: 18px;
                    line-height: 20px;
                    margin-bottom: 36px;
                }
            }


            ._all-list {
                li {
                    & > div {
                        width: 64px;
                        height: 74px;
                        margin-bottom: 6px;
                    }

                    p {
                        font-size: 16px;
                        line-height: 16px;
                    }

                    &:nth-of-type(2) {
                        margin: 0 25px;
                    }
                }
            }

            ._lead {
                padding: 24px 11px 0 !important;

                ._lead-title {
                    font-size: 20px;
                    line-height: 20px;
                    margin-bottom: 24px;
                }

                ._lead-list {
                    li {
                        height: 250px;
                        padding: 20px;
                        margin-bottom: 24px;

                        ._list-title {
                            font-size: 18px;
                        }

                        ._hover-be {
                            img {
                                width: 64px;
                            }
                        }

                        ._hover-af {
                            padding: 10px 20px 0;
                            font-size: 12px;
                            line-height: 18px;

                            img {
                                width: 57px;
                            }
                        }

                        &:nth-of-type(2) {
                            &:hover {
                                height: 280px;
                            }
                        }

                        &:nth-of-type(4) {
                            &:hover {
                                height: 300px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
