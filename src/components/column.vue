<template>
    <div class="column">
        <headTop></headTop>
        <headTitle></headTitle>
        <headNav></headNav>
        <div class="column_content">
            <div class="column_content_left">
                <Menu></Menu>
            </div>
            <div class="column_content_right">
                <Breadcrumb></Breadcrumb>
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import headTop from './common/head/head_top'
    import headTitle from './common/head/head_title'
    import headNav from './common/head/head_nav'
    import Footer from './common/footer/footer'
    import Menu from './common/navmenu/menu'
    import Breadcrumb from './common/breadcrumb/breadcrumb'
    export default {
        data () {
            return {

            }
        },
        components:{
            Menu,
            Breadcrumb,
            headTop,
            headTitle,
            headNav,
            Footer
        }
    }
</script>

<style scoped>
    .column {
        background: #efefef;
        width: 100%;
        height: 100%;
    }
    .column_content {
        width: 1200px;
        margin: 20px auto;
        display: flex;
    }
    .column_content_left {
        width: 230px;
        flex: 1;
    }
</style>
