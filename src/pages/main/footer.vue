<template>
    <div class="_footer">
        <div class="_investors-bt">
            <div class="_bt-box">
                <div>
                    <p>Get the latest news from BM Group</p>
                    <p>By providing your e-mail address, you are consenting to receive press
                        releases, presentations and other information concerning BM Group.</p>
                </div>

                <div>
                    <!--                    <el-input v-model="email" placeholder="Enter your e-mail"-->
                    <!--                        class="_investors-input">-->
                    <!--                        <template slot="append">-->
                    <!--                            <img src="../../assets/images/investors/chevron-right.svg" alt="">-->
                    <!--                        </template>-->
                    <!--                    </el-input>-->

                    <form id="ema_signup_form" style="position: relative" target="_blank"
                        action="https://gem.godaddy.com/signups/subscribe/8ca20e2235674533ae168a960e284a24"
                        accept-charset="UTF-8" method="post">
                        <input name="utf8" type="hidden" value="✓"/>
                        <div class="mimi_field required _investors-input">
                            <input id="signup_email" name="signup[email]" type="text"
                                data-required-field="This field is required"
                                placeholder="Enter your e-mail"/>
                        </div>
                        <div class="mimi_field _btn-img">
                            <input type="submit" class="submit" value=""
                                id="webform_submit_button" data-default-text="Subscribe"
                                data-submitting-text="Sending..."
                                data-invalid-text="↑ You forgot some required fields"
                                data-choose-list="↑ Choose a list" data-thanks="Thank you!"/>
                            <img src="../../assets/images/investors/chevron-right.svg" alt="">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="_container">
            <div class="_footer-left">
                <template v-for="(el, index) in linkList">
                    <router-link
                        :to="el.url"
                        :key="index"
                        :active-class="'_active'">{{el.name}}
                    </router-link>
                </template>
                <p>©️2021 BM Group Corp.</p>
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
            email: '',
            linkList: [
                {
                    name: 'ABOUT US',
                    url: '/about-us'
                },
                {
                    name: 'OPERATION',
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
        height: 482px;
        background-color: #000000;

        ._investors-bt {
            width: 100%;
            height: 244px;
            background: #272E35;
        }

        ._bt-box {
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            max-width: 100%;
            display: flex;
            align-items: center;

            & > div {
                /*width: 100%;*/

                &:nth-of-type(1) {
                    padding-left: 50px;
                    padding-right: 50px;

                    p {
                        &:nth-of-type(1) {
                            font-size: 16px;
                            color: #ffffff;
                            margin-bottom: 28px;
                        }

                        &:nth-of-type(2) {
                            font-size: 16px;
                            line-height: 30px;
                            color: #ffffff;
                            font-family: "Bangla MN";
                        }
                    }
                }

                &:nth-of-type(2) {
                    padding-left: 50px;
                    padding-right: 50px;

                    img {
                        cursor: pointer;
                    }
                }
            }
        }

        ._container {
            height: 238px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
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
                    color: #5277FB;
                }
            }

            ._active {
                color: #5277FB;
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
            padding: 0;
            position: relative;
            height: 450px;

            ._investors-bt {
                padding: 24px;
                height: auto;
            }

            ._bt-box {
                display: block;

                & > div {
                    width: 100%;

                    &:nth-of-type(1) {
                        padding-left: 0;
                        padding-right: 0;

                        p {
                            &:nth-of-type(1) {
                                font-size: 20px;
                                margin-bottom: 24px;
                            }

                            &:nth-of-type(2) {
                                font-size: 14px;
                                line-height: 22px;
                            }
                        }
                    }

                    &:nth-of-type(2) {
                        padding-left: 0;
                        padding-right: 0;
                        padding-top: 24px;
                    }
                }
            }

            ._container {
                padding: 0 11px !important;
                align-items: flex-start;
                height: 200px;
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
                padding-top: 18px;

                img {
                    height: 47px;
                }
            }
        }
    }
</style>
