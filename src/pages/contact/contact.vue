<template>
    <div class="_contact">
        <div class="_contact-bg">
            <div>
                <p>CONTACT</p>
                <p>Interested in getting in touch? Please use the form below.</p>
            </div>
        </div>

        <div class="_contact-form">
            <div class="_form-left">
                <div :class="{'_active': activeFlag}">
                    <p>Get in Touch</p>
                    <p>Email – <a href="mailto:contact@bmining.com">contact@bmining.com</a></p>
                    <p>3 Fraser Street, DUO Tower, #05-25, Singapore 189352</p>
                </div>
            </div>

            <div class="_form-right">
                <div class="_form-title">
                    Have a question? We’d love to hear from you.
                </div>

                <!--                <div class="_form-box">-->
                <!--                    <div class="_form-input">-->
                <!--                        <p>First Name</p>-->
                <!--                        <el-input v-model="first_name" placeholder=""></el-input>-->
                <!--                    </div>-->

                <!--                    <div class="_form-input">-->
                <!--                        <p>Last Name</p>-->
                <!--                        <el-input v-model="last_name" placeholder=""></el-input>-->
                <!--                    </div>-->

                <!--                    <div class="_form-input">-->
                <!--                        <p>Email</p>-->
                <!--                        <el-input v-model="email" placeholder=""></el-input>-->
                <!--                    </div>-->

                <!--                    <div class="_form-input">-->
                <!--                        <p>Phone</p>-->
                <!--                        <el-input v-model="phone" placeholder=""></el-input>-->
                <!--                    </div>-->

                <!--                    <div class="_form-textarea">-->
                <!--                        <p>Message</p>-->
                <!--                        <el-input-->
                <!--                            type="textarea"-->
                <!--                            placeholder=""-->
                <!--                            v-model="message">-->
                <!--                        </el-input>-->
                <!--                    </div>-->
                <!--                </div>-->

                <!--                <div class="_form-btn">-->
                <!--                    <el-button>Send</el-button>-->
                <!--                </div>-->

                <form id="ema_signup_form" class="_form-box" target="_blank"
                    action="https://gem.godaddy.com/signups/subscribe/fdfe23910a55474987156d4b25b0e04a"
                    accept-charset="UTF-8" method="post">
                    <input name="utf8" type="hidden" value="✓"/>
                    <div class="mimi_field _form-input">
                        <label for="signup_first_name">First Name</label>
                        <br/>
                        <input id="signup_first_name" name="signup[first_name]" type="text"
                            data-required-field="This field is required"/>
                    </div>
                    <div class="mimi_field _form-input">
                        <label for="signup_last_name">Last Name</label>
                        <br/>
                        <input id="signup_last_name" name="signup[last_name]" type="text"
                            data-required-field="This field is required"/>
                    </div>
                    <div class="mimi_field required _form-input">
                        <label for="signup_email">Email</label>
                        <br/>
                        <input id="signup_email" name="signup[email]" type="text"
                            data-required-field="This field is required"
                            placeholder=""/>
                    </div>
                    <div class="mimi_field _form-input">
                        <label for="signup_phone">Phone</label>
                        <br/>
                        <input id="signup_phone" name="signup[phone]" type="text"
                            data-required-field="This field is required"/>
                    </div>
                    <div class="mimi_field _form-textarea">
                        <label for="signup_message">Message</label>
                        <br/>
                        <input type="text" name="signup[message]" id="signup_message"
                            data-required-field="This field is required"/>
                        <input class="field_type" type="hidden" data-field-type="text_field"/>
                    </div>
                    <div class="mimi_field _form-btn">
                        <input type="submit" class="submit" value="Send"
                            id="webform_submit_button" data-default-text="Subscribe"
                            data-submitting-text="Sending..."
                            data-invalid-text="↑ You forgot some required fields"
                            data-choose-list="↑ Choose a list" data-thanks="Thank you!"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data() {
        return {
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            message: null,
            timer: null,
            activeFlag: false
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.activeFlag = true;
        }, 100)
    },
    destroyed() {
        clearTimeout(this.timer)
    }
}
</script>

<style scoped lang="scss">
    ._contact {
        ._contact-bg {
            width: 100%;
            height: 460px;
            background-image: url("../../assets/images/contact/contact-bg.png");
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
            }

            p {
                animation: tranTop 1s ease-in-out;
            }
        }

        ._contact-form {
            height: 724px;
            display: flex;
            justify-content: space-between;
            width: 1550px;
            max-width: 100%;
            margin: 0 auto;

            & > div {
                width: 50%;
            }

            ._form-left {
                display: flex;
                padding-top: 64px;
                padding-left: 64px;

                & > div {
                    width: 250px;
                    max-width: 100%;
                }

                p {
                    margin-bottom: 24px;
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: all .6s ease;

                    &:nth-of-type(1) {
                        font-weight: 500;
                        font-size: 36px;
                        line-height: 36px;
                        color: #FFFFFF;
                    }

                    &:nth-of-type(2) {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 16px;
                        color: #FFFFFF;

                        a {
                            color: #9BC456;
                        }
                    }

                    &:nth-of-type(3) {
                        font-size: 16px;
                        line-height: 24px;
                        color: #8D8D8D;
                        margin-bottom: 0;
                    }
                }

                ._active {
                    p {
                        opacity: 1;
                        transform: translateY(0);

                        &:nth-of-type(1) {
                            transition-delay: 0s;
                        }

                        &:nth-of-type(1) {
                            transition-delay: .1s;
                        }

                        &:nth-of-type(1) {
                            transition-delay: .2s;
                        }
                    }
                }
            }
        }

        ._form-right {
            height: 100%;
            background-color: #1F272F;
            padding: 64px;
        }

        ._form-title {
            font-size: 24px;
            line-height: 24px;
            color: #8D8D8D;
            margin-bottom: 38px;
        }

        ._form-box {
            display: flex;
            flex-wrap: wrap;

            ._form-input {
                margin-bottom: 38px;

                &:nth-of-type(odd) {
                    padding-right: 33px;
                }

                &:nth-of-type(even) {
                    padding-left: 33px;
                }
            }
        }

        ._form-btn {
            margin-top: 38px;
            display: flex;
            justify-content: flex-end;
            width: 100%;

            input {
                width: 227px;
                height: 55px;
                color: #ffffff;
                font-size: 16px;
                background: #323A42;
                border: 1px solid #6B7783;
                border-radius: 0;
                transition: all .3s ease;

                &:hover {
                    background: #A4CC62;
                    border-color: #A4CC62;
                }
            }
        }
    }

    @media (max-width: 768px) {
        ._contact {
            ._contact-bg {
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

            ._contact-form {
                flex-wrap: wrap;
                height: auto;

                & > div {
                    width: 100%;
                }

                ._form-left {
                    justify-content: center;
                    padding: 24px 0;

                    & > div {
                        padding-right: 0;
                        width: 100%;
                    }

                    p {
                        text-align: center;

                        &:nth-of-type(3) {
                            padding: 0 60px;
                        }
                    }
                }

                ._form-right {
                    padding: 16px 28px;
                }

                ._form-title {
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 40px;
                }

                ._form-box {
                    ._form-input {
                        margin-bottom: 24px;
                        width: 100%;

                        &:nth-of-type(odd) {
                            padding-right: 0;
                        }

                        &:nth-of-type(even) {
                            padding-left: 0;
                        }
                    }
                }

                ._form-btn {
                    justify-content: center;
                }
            }
        }
    }
</style>
