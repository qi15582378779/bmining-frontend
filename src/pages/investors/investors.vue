<template>
    <div class="_investors">
        <div class="_investors-bg">
            <div>
                <p>{{title}}</p>
            </div>
        </div>

        <div class="_investors-container">
            <div class="_investors-lf">
                <ul>
                    <li>Index</li>
                    <li v-for="(item, index) of lfList" :key="index"
                        :class="{'_active': lfNum === index}">
                        <span @click="showRt(index, item)" v-if="item.do !== 'email'"> {{item.name}}</span>
                        <a href="mailto:ir@bmining.com" v-if="item.do === 'email'">{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="_investors-rt">
                <div class="_rt-box"
                    :class="[{'_rt-1-hi': lfNum === 0}, {'_rt-2-hi': lfNum === 1}, {'_rt-3-hi': lfNum === 2}]">
                    <div class="_rt-1" :class="{'_active': lfNum === 0}">
                        <div>Corporate Overview</div>
                        <div>Founded in 2018 and managed by a team consists of highly experienced
                            professionals in crypto and financial industry, BM Group operates as a
                            crypto asset technology company that mines cryptocurrencies, with a
                            focus on the blockchain ecosystem in United States, Canada and
                            Singapore. BM Group currently has a top total hashing power, with an
                            industry leading efficiency guaranteed by the most advanced miners and
                            low cost electricity. BM Group has close partnership with best-in-class
                            supplier across miners, electricity and maintenance, and plans to
                            continuously expand the mining scale in the future.
                        </div>
                    </div>

                    <!--                    <div class="_rt-2" :class="{'_active': lfNum === 1}">-->
                    <!--                        <div>Company News</div>-->
                    <!--                        <div>-->
                    <!--                            <p>-->
                    <!--                                <span>Date</span>-->
                    <!--                                <span>Headline</span>-->
                    <!--                            </p>-->

                    <!--                            <p>-->
                    <!--                                <span>07/02/2021</span>-->
                    <!--                                <span>Bmining and Bitfury BV agree to terminate Investor Rights Agreement</span>-->
                    <!--                            </p>-->

                    <!--                            <p>-->
                    <!--                                <span>06/30/2021</span>-->
                    <!--                                <span>Bmining Mining Announces Purchase of 12,000 New MicroBT Miners for Deployment by End of Q4 2021</span>-->
                    <!--                            </p>-->

                    <!--                            <p>-->
                    <!--                                <span>06/20/2021</span>-->
                    <!--                                <span>Bmining and Bitfury BV agree to terminate Investor Rights Agreement</span>-->
                    <!--                            </p>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <!--                    <div class="_rt-3" :class="{'_active': lfNum === 2}">-->
                    <!--                        <template>-->
                    <!--                            <div>Reporting</div>-->
                    <!--                            <p><a href="">Notice of Annual and Special Meeting</a></p>-->
                    <!--                            <p><a href="">Management Information Circular</a></p>-->
                    <!--                            <p><a href="">Q1 2021 Financial Statements</a></p>-->
                    <!--                            <p><a href="">Q1 2021 MD&A</a></p>-->
                    <!--                            <p><a href="">Q1 2021 Conference Call</a></p>-->
                    <!--                        </template>-->
                    <!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'investors',
    data() {
        return {
            lfList: [
                {
                    name: 'Corporate Overview',
                    do: 'see'
                },
                // {
                //     name: 'Company News',
                //     do: 'see'
                // },
                // {
                //     name: 'Reporting',
                //     do: 'see'
                // },
                {
                    name: 'Investor Presentation',
                    do: 'downLoad',
                    url: ''
                },
                {
                    name: 'Contact',
                    do: 'email',
                    url: 'ir@bmining.com'
                }
            ],
            lfNum: 0,
            email: null,
            title: 'Corporate Overview'
        }
    },
    methods: {
        showRt(index, data) {
            if (data.do === 'downLoad') {
                data.url && window.open(data.url)
            }
            if (data.do === 'see') {
                this.lfNum = index;
                this.title = data.name;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    ._investors {
        ._investors-bg {
            width: 100%;
            height: 460px;
            background-image: url("../../assets/images/investors/investors-bg.png");
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

            p {
                animation: tranTop 1s ease-in-out;
            }
        }

        ._investors-container {
            width: 1550px;
            height: 700px;
            max-width: 100%;
            margin: 0 auto;
            display: flex;
        }

        ._investors-lf {
            width: 573px;
            padding-left: 64px;
            padding-top: 64px;

            ul {
                li {
                    &:nth-of-type(1) {
                        font-size: 28px;
                        color: #ffffff;
                        margin-bottom: 32px;
                        cursor: auto;

                        &:hover {
                            font-weight: 400;
                            color: #ffffff;
                        }
                    }

                    font-size: 16px;
                    color: #8D8D8D;
                    margin-bottom: 24px;
                    cursor: pointer;
                    transition: color .2s ease;

                    a {
                        color: inherit;
                    }

                    &._active, &:hover {
                        font-weight: 500;
                        color: #9BC456;
                    }
                }
            }
        }

        ._investors-rt {
            flex: 1;
            background: #1F272F;
            padding-top: 64px;
            padding-left: 64px;
            padding-right: 64px;
        }

        ._rt-box {
            width: 100%;
            height: 100%;
            position: relative;
            transition: all .2s;

            ._active {
                opacity: 1 !important;
                z-index: 1 !important;
            }
        }

        ._rt-1 {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
            transition: all .2s ease;

            div {
                &:nth-of-type(1) {
                    font-size: 36px;
                    color: #8D8D8D;
                    margin-bottom: 38px;
                }

                &:nth-of-type(2) {
                    font-size: 16px;
                    line-height: 30px;
                    color: #ffffff;
                }
            }
        }

        ._rt-2 {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
            transition: all .2s ease;

            div {
                &:nth-of-type(1) {
                    font-size: 36px;
                    color: #8D8D8D;
                    margin-bottom: 100px;
                }

                &:nth-of-type(2) {
                    p {
                        min-height: 40px;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid rgba(#8D8D8D, .5);
                        font-size: 13px;
                        color: #ffffff;

                        &:nth-of-type(1) {
                            color: #8D8D8D;
                        }

                        span {
                            &:nth-of-type(1) {
                                display: inline-flex;
                                width: 200px;
                            }

                            &:nth-of-type(2) {
                                flex: 1;
                                transition: color .2s ease;
                                cursor: pointer;

                                &:hover {
                                    color: #9BC456;
                                }
                            }
                        }
                    }
                }
            }
        }

        ._rt-3 {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -1;
            transition: all .2s ease;

            div {
                font-size: 36px;
                color: #8D8D8D;
                margin-bottom: 38px;
            }

            p {
                margin-bottom: 24px;

                a {
                    font-size: 16px;
                    color: #ffffff;
                    padding-bottom: 2px;
                    border-bottom: 1px solid #9BC456;
                    transition: all .2s ease;

                    &:hover {
                        color: #9BC456;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        ._investors {
            ._investors-bg {
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
            }

            ._investors-container {
                display: block;
                height: auto;
            }

            ._investors-lf {
                width: 100%;
                padding: 34px 24px;

                ul {
                    li {
                        &:nth-of-type(1) {
                            font-size: 24px;
                        }

                    }
                }
            }

            ._investors-rt {
                width: 100%;
                padding: 24px;
            }

            ._rt-1-hi {
                height: 420px;
            }

            ._rt-2-hi {
                height: 400px;
            }

            ._rt-3-hi {
                height: 340px;
            }

            ._rt-1 {
                div {
                    &:nth-of-type(1) {
                        font-size: 24px;
                        margin-bottom: 26px;
                    }

                    &:nth-of-type(2) {
                        font-size: 14px;
                        line-height: 24px;
                    }
                }
            }

            ._rt-2 {
                div {
                    &:nth-of-type(1) {
                        font-size: 24px;
                        margin-bottom: 26px;
                    }

                    &:nth-of-type(2) {
                        p {
                            height: auto;
                            min-height: 60px;

                            span {
                                &:nth-of-type(1) {
                                    width: 30%;
                                }

                                &:nth-of-type(2) {
                                    flex: 1;
                                }
                            }
                        }
                    }
                }
            }

            ._rt-3 {

                div {
                    font-size: 24px;
                }
            }
        }
    }
</style>
