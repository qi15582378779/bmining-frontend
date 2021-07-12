<template>
    <el-dialog
        width="550px"
        :title="null"
        :append-to-body="true"
        :class="['_main-email-modal', theme]"
        :visible="visible"
        :close-on-click-modal="false"
        @close="cancel"
    >
        <div class="_head-logo">
            <img class="_header-logo" src="../../assets/images/logo/logo.svg" alt="">
        </div>
        <div class="_email-content">
            <p>Reserve your spot now</p>
            <!--                    <el-input class="_email-input"-->
            <!--                        placeholder="Email address"-->
            <!--                        v-model="email"></el-input>-->
            <!--                    <el-button class="_email-btn">Submit</el-button>-->
            <form id="ema_signup_form" target="_blank"
                action="https://gem.godaddy.com/signups/subscribe/07e55ce640ae4bbfbd0aada20d4b7517"
                accept-charset="UTF-8" method="post">
                <input name="utf8" type="hidden" value="✓"/>
                <div class="mimi_field required">
                    <input id="signup_email" name="signup[email]" type="text"
                        class="_email-input"
                        data-required-field="This field is required"
                        placeholder="Email address"/>
                </div>
                <div style="background: white; font-size:1px; height: 0; overflow: hidden">
                    <input type="text" name="aaff7a49cfc56bc8a771502a5328b79e"
                        style="font-size: 1px; width: 1px !important; height:1px !important; border:0 !important; line-height: 1px !important; padding: 0 0; min-height:1px !important;"/>
                    <input class="checkbox" type="checkbox" name="beacon"/>
                </div>
                <div class="mimi_field">
                    <input type="submit" class="submit _email-btn" value="Subscribe"
                        id="webform_submit_button"
                        @click="submitClose"
                        data-default-text="Subscribe" data-submitting-text="Sending..."
                        data-invalid-text="↑ You forgot some required fields"
                        data-choose-list="↑ Choose a list"
                        data-thanks="Thank you!"/>
                </div>
            </form>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'email-modal',
    props: ['visible', 'theme'],
    data() {
        return {
            email: null
        }
    },
    methods: {
        cancel() {
            this.$emit('close')
        },
        submitClose() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>

</style>
