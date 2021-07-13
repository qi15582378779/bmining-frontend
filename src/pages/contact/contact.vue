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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact'
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
        }

        ._contact-form {
            background-color: #000000;
            height: 810px;
            display: flex;
            justify-content: space-between;

            &>div {
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
        }
    }
</style>
