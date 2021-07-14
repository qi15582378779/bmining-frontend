<template>
    <div class="_operation">
        <div class="_operation-bg">
            <div>
                <p>Bitcoin Mining</p>
                <p>The process required to secure the blockChain</p>
            </div>
        </div>

        <ul class="_operation-list">
            <li v-for="(el, index) of txtList" :key="index">
                <img :src="el.imgUrl" alt="" v-if="el.isShow">
                <div v-if="!el.isShow">
                    <p>{{el.title}}</p>
                    <p v-html="el.txt"></p>
                </div>
            </li>
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
                    title: 'Mining',
                    txt: '<span>38</span> BlockBox datacentres operating at a maximum capacity of <span>43 MW</span> producing <span>338 PH/s</span> at full load.'
                },
                {
                    isShow: false,
                    title: 'Mine hosting service',
                    txt: 'Abundance of gas, wind, and green energy. <br> Ten-year electricity supply agreement and land lease.'
                },
                {
                    isShow: true,
                    imgUrl: require('../../assets/images/operation/operation-2.png'),
                },
                {
                    isShow: true,
                    imgUrl: require('../../assets/images/operation/operation-3.png'),
                },
                {
                    isShow: false,
                    title: 'Mine',
                    txt: 'we’re strategically positioned to remain at the forefront of the cryptocurrency mining market.'
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    ._operation {
        width: 100%;
        padding-bottom: 52px;

        ._operation-bg {
            width: 100%;
            height: 460px;
            background-image: url("../../assets/images/operation/operation-bg.png");
            background-position: 100% 100%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            p:nth-of-type(1) {
                font-weight: 500;
                font-size: 50px;
                line-height: 50px;
                color: #9BC456;
                text-shadow: 4px 3px 4px rgba(192, 243, 106, 0.2);
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

            li {
                width: 50%;
                height: 456px;
                display: flex;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                }

                &:nth-of-type(odd) {
                    justify-content: flex-end;
                    padding-right: 38px;
                }

                &:nth-of-type(even) {
                    padding-left: 38px;
                }

                &:nth-of-type(2) div {
                    width: 485px;
                }

                &:nth-of-type(3) div {
                    width: 665px;
                }

                &:nth-of-type(6) div {
                    width: 665px;
                }

                & > div {
                    p {
                        &:nth-of-type(1) {
                            font-size: 36px;
                            line-height: 36px;
                            color: #ffffff;
                            margin-bottom: 22px;
                        }

                        &:nth-of-type(2) {
                            font-size: 24px;
                            line-height: 34px;
                            color: #B2B2B2;

                            ::v-deep span {
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
