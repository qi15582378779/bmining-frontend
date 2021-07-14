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
                <div>
                    <p>Get in Touch</p>
                    <p>Email – <a href="mailto:info@bmining.com">info@bmining.com</a></p>
                    <p>130 King Street West, Suite 1800
                        Toronto, Ontario, Canada
                        M5X 2A2</p>
                </div>
            </div>

            <div class="_form-right">
                <div class="_form-title">
                    Have a question? We’d love to hear from you.
                </div>

                <div class="_form-box">
                    <div class="_form-input">
                        <p>First Name</p>
                        <el-input v-model="first_name" placeholder="请输入内容"></el-input>
                    </div>

                    <div class="_form-input">
                        <p>Last Name</p>
                        <el-input v-model="last_name" placeholder="请输入内容"></el-input>
                    </div>

                    <div class="_form-input">
                        <p>Email</p>
                        <el-input v-model="email" placeholder="请输入内容"></el-input>
                    </div>

                    <div class="_form-input">
                        <p>Phone</p>
                        <el-input v-model="phone" placeholder="请输入内容"></el-input>
                    </div>

                    <div class="_form-textarea">
                        <p>Message</p>
                        <el-input
                            type="textarea"
                            placeholder="请输入内容"
                            v-model="message">
                        </el-input>
                    </div>
                </div>

                <div class="_form-btn">
                    <el-button>Send</el-button>
                </div>
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
            message: null
        }
    }
}
</script>

<style scoped lang="scss">
    ._contact {
        ._contact-bg {
            width: 100%;
            height: 580px;
            background-image: url("../../assets/images/contact/contact-bg.png");
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

        ._contact-form {
            background-color: #000000;
            height: 810px;
            display: flex;
            justify-content: space-between;

            & > div {
                width: 50%;
            }

            ._form-left {
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    margin-bottom: 24px;

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
            }
        }

        ._form-right {
            height: 100%;
            background-color: #1F272F;
            padding: 88px 64px;
        }

        ._form-title {
            font-size: 24px;
            line-height: 24px;
            color: #8D8D8D;
            margin-bottom: 50px;
        }

        ._form-box {
            display: flex;
            flex-wrap: wrap;

            ._form-input {
                margin-bottom: 50px;

                &:nth-of-type(odd) {
                    padding-right: 33px;
                }

                &:nth-of-type(even) {
                    padding-left: 33px;
                }
            }
        }

        ._form-btn {
            margin-top: 35px;
            display: flex;
            justify-content: flex-end;

            button {
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
</style>
