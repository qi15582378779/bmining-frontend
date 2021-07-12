<template>
    <div class="_about-us">
        <div class="_about-bg">
            <div>
                <p>One of world-leading</p>
                <p>crypto currency mining company</p>
            </div>
        </div>

        <div class="_about-all">
            <h3><span>ALL</span> IN ONE - <span>ALL</span> IN BMINING</h3>

            <ul class="_all-list">
                <li v-for="(el, index) of allList" :key="index">
                    <img :src="el.img" alt="">
                    <p>{{el.name}}</p>
                </li>
            </ul>
        </div>

        <div class="_container _lead">
            <div class="_lead-title">Digital Asset Mining Leaders</div>
            <ul class="_lead-list">
                <li v-for="(el, index) of leadersList" :key="index">
                    <p>{{el.title}}</p>
                    <img :src="el.url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about-us',
    data() {
        return {
            allList: [
                {
                    img: require('../../assets/images/about-us/all-1.svg'),
                    name: 'Mining'
                },
                {
                    img: require('../../assets/images/about-us/all-2.svg'),
                    name: 'Mine hosting service'
                },
                {
                    img: require('../../assets/images/about-us/all-3.svg'),
                    name: 'Mine'
                }
            ],
            leadersList: [
                {
                    title: 'Stable,cost-effcient and clean energy',
                    url: require('../../assets/images/about-us/lead-1.svg'),
                },
                {
                    title: 'Partnership with the world’s primer miners',
                    url: require('../../assets/images/about-us/lead-2.svg'),
                },
                {
                    title: 'Experienced management team extensive network',
                    url: require('../../assets/images/about-us/lead-3.svg'),
                },
                {
                    title: 'World-class technology crew',
                    url: require('../../assets/images/about-us/lead-4.svg'),
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    ._about-us {
        width: 100%;
        height: 100%;

        ._about-bg {
            width: 100%;
            height: 100%;
            background-image: url("../../assets/images/about-us/about_us-bg.png");
            background-repeat: no-repeat;
            background-position: 100% 100%;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            color: #9BC456;


            p {
                width: 100%;
                font-weight: 500;
                font-size: 50px;
                line-height: 50px;
                text-shadow: 4px 3px 4px rgba(192, 243, 106, 0.2);
                text-align: center;
            }
        }

        ._about-all {
            color: #ffffff;
            padding: 52px 0;

            h3 {
                width: 100%;
                text-align: center;
                font-size: 36px;
                line-height: 36px;
                font-weight: 400;
                letter-spacing: 0.1em;
                margin-bottom: 68px;

                span:nth-of-type(1) {
                    color: #345FFA;
                }

                span:nth-of-type(2) {
                    color: #9BC456;
                }
            }
        }

        ._all-list {
            display: flex;
            justify-content: center;

            li {
                text-align: center;

                img {
                    width: 89px;
                    margin-bottom: 26px;
                }

                p {
                    font-size: 28px;
                    line-height: 28px;
                    color: #ffffff;
                }

                &:nth-of-type(2) {
                    margin: 0 190px;
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
            color: #9BC456;
            margin-bottom: 56px;
        }

        ._lead-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            li {
                width: 550px;
                height: 250px;
                background: #1F272F;
                box-shadow: 0 3px 8px 1px #161C23;
                border-radius: 10px;
                margin-bottom: 48px;
                text-align: center;
                padding: 24px 28px;
                color: #B2B2B2;

                p {
                    text-align: left;
                }

                img {
                    margin-top: 32px;
                }
            }
        }
    }
</style>
