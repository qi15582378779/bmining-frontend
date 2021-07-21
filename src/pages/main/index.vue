<template>
    <div class="_main">
        <HeaderCom/>
        <router-view/>
        <FooterCom/>
    </div>
</template>

<script>
import HeaderCom from './header';
import FooterCom from './footer'

export default {
    name: 'index',
    components: {HeaderCom, FooterCom}
}
</script>

<style scoped lang="scss">

</style>
