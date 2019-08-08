<template>
    <div class="head_nav">
        <div class="content">
            <ul>
                <li>
                    <router-link to="/front">首页</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">领导专栏</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'zxgg' }}">最新公告</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">周内动态</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">重要专栏</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">党群工作</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">纪检监察</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">监管之窗</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">统计调研</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">信息刊物</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">政务公开</router-link>
                </li>
                <li>
                    <router-link :to="{ path:'/column',query:{ encode:'ldzl' }}">政策法规</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
    .head_nav {
        width: 100%;
        height: 62px;
        color: #fff;
        font-size: 16px;
        line-height: 62px;
        text-align: center;
        background: url(../../../../static/images/head_nav.png) no-repeat;
    }
    .content {
        width: 1200px;
        margin: 0 auto;
    }
    .head_nav ul li {
        width: 100px;
        float: left;
    }
    .head_nav ul li a {
        color: #fff;
    }
</style>
