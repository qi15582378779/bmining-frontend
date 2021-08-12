<template>
    <div class="_team">
        <div class="_team-bg">
            <div>
                <p>TEAM</p>
                <p>A strong team of executives and directors with
                    deep experience in blockchain, software, Bitcoin mining,
                    investment banking, venture capital, and government.</p>
            </div>
        </div>

        <div :class="{'_active': active}">
            <div class="_team-title">
                Meet Our Management Team
            </div>
            <ul class="_team-list">
                <li v-for="(el, index) of teamList" :key="index">
                    <div>
                        <div class="_img-con">
                            <img :src="el.imgUrl" alt="">
                        </div>
                        <p>{{el.name}}</p>
                        <p>{{el.post}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'team',
    data() {
        return {
            teamList: [
                {
                    imgUrl: require('../../assets/images/team/team-1.png'),
                    name: 'Haiqing Wang',
                    post: 'CEO & CFO'
                },
                {
                    imgUrl: require('../../assets/images/team/team-2.png'),
                    name: 'Jialin Qu',
                    post: 'COO'
                },
                {
                    imgUrl: require('../../assets/images/team/team-3.png'),
                    name: 'Y. Tristan Kuo',
                    post: ''
                },
                {
                    imgUrl: require('../../assets/images/team/team-4.png'),
                    name: 'Rahim Noorani',
                    post: ''
                },
                {
                    imgUrl: require('../../assets/images/team/team-5.png'),
                    name: 'Jor Law',
                    post: ''
                },
                {
                    imgUrl: require('../../assets/images/team/team-6.png'),
                    name: 'Scott J Wade',
                    post: ''
                },
                {
                    imgUrl: require('../../assets/images/team/team-7.png'),
                    name: 'Josh Neuroth',
                    post: ''
                },
                {
                    imgUrl: require('../../assets/images/team/team-8.png'),
                    name: 'Nima',
                    post: ' '
                },
                {
                    imgUrl: require('../../assets/images/team/team-9.png'),
                    name: 'Larry',
                    post: ' '
                },
                {
                    imgUrl: require('../../assets/images/team/team-10.png'),
                    name: 'Kenneth',
                    post: ' '
                }
            ],
            active: false,
            timer: null
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.active = true;
        }, 100)
    },
    destroyed() {
        clearTimeout(this.timer)
    }
}
</script>

<style scoped lang="scss">
    ._team {
        padding-bottom: 52px;

        ._team-bg {
            width: 100%;
            height: 460px;
            background-image: url("../../assets/images/team/team-bg.png");
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
                color: #6383FF;
                text-shadow: 4px 3px 4px rgba(113, 142, 255, 0.2);
                margin-bottom: 12px;
            }

            p:nth-of-type(2) {
                font-size: 28px;
                line-height: 32px;
                color: #FFFFFF;
                width: 974px;
            }

            p {
                animation: tranTop 1s ease-in-out;
            }
        }

        ._team-title {
            margin-top: 113px;
            text-align: center;
            font-weight: 500;
            font-size: 36px;
            line-height: 36px;
            color: #ffffff;
            margin-bottom: 132px;
            opacity: 0;
            transition: opacity .6s ease;
        }

        ._team-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 55px;
            max-width: 1550px;
            margin: 0 auto;

            li {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                width: 352px;
                margin-bottom: 82px;
                opacity: 0;
                transition: opacity .6s ease;

                ._img-con {
                    width: 352px;
                    height: 352px;
                    overflow: hidden;
                    margin-bottom: 18px;
                }

                img {
                    width: 100%;
                    transition: all .3s ease-in-out;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                p {
                    width: 100%;
                    transition: color .3s ease;

                    &:nth-of-type(1) {
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 24px;
                        color: #FFFFFF;
                        margin-bottom: 12px;
                    }

                    &:nth-of-type(2) {
                        font-size: 18px;
                        line-height: 18px;
                        /*min-height: 18PX;*/
                        color: #8D8D8D;
                    }
                }

                & > div:hover {
                    p {
                        color: #9BC456;
                    }
                }

                &:nth-of-type(1), &:nth-of-type(2) {
                    width: 50%;
                    display: flex;

                    ._img-con {
                        width: 352px;
                        height: 420px;
                    }
                }

                &:nth-of-type(1) {
                    justify-content: flex-end;
                    padding-right: 5%;
                }

                &:nth-of-type(2) {
                    padding-left: 5%;
                }
            }
        }

        ._active {
            ._team-title {
                opacity: 1;
                transition-delay: 0s;
            }

            ._team-list {
                li {
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

                    &:nth-of-type(5) {
                        transition-delay: .5s;
                    }

                    &:nth-of-type(6) {
                        transition-delay: .6s;
                    }

                    &:nth-of-type(7) {
                        transition-delay: .7s;
                    }

                    &:nth-of-type(8) {
                        transition-delay: .8s;
                    }

                    &:nth-of-type(9) {
                        transition-delay: .9s;
                    }

                    &:nth-of-type(10) {
                        transition-delay: 1s;
                    }
                }
            }

        }
    }

    @media (max-width: 768px) {
        ._team {
            padding-bottom: 14px;

            ._team-bg {
                height: 230px;
                background-position: center;
                background-size: auto 100%;

                div {
                    padding: 0 12px;
                    width: 100%;
                }

                p:nth-of-type(1) {
                    font-size: 26px;
                    line-height: 26px;
                }

                p:nth-of-type(2) {
                    font-size: 14px;
                    line-height: 20px;
                    width: 100%;
                }
            }

            ._team-title {
                margin-top: 24px;
                margin-bottom: 24px;
                font-size: 20px;
                line-height: 20px;
            }

            ._team-list {
                justify-content: center;

                li {
                    width: 258px;
                    margin-bottom: 14px;

                    & > div {
                        width: 100%;
                    }

                    ._img-con {
                        width: 100%;
                        height: 258px;
                        margin-bottom: 14px;

                        img {
                            width: 258px;
                            height: 258px;
                        }
                    }

                    &:nth-of-type(1), &:nth-of-type(2) {
                        width: 258px;
                        padding: 0;

                        ._img-con {
                            width: 258px;
                            height: 258px;
                        }
                    }
                }
            }
        }
    }
</style>
