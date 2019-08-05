<template>
    <div class="head_top">
        <div class="content">
            <div class="content_left">
                您好，欢迎来到淄博市银监局<span>2019年10月01</span><span>星期一</span>
            </div>
            <div class="content_right">
                <ul>
                    <li>
                        <router-link to="">内网邮件系统</router-link>
                    </li>
                    <li>
                        <router-link to="">许可证管理系统</router-link>
                    </li>
                    <li>
                        <router-link to="">机构准入系统</router-link>
                    </li>
                    <li>
                        <router-link to="">高管准入系统</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .head_top {
        width: 100%;
        height: 40px;
        background: #0950a2;
        color: #fff;
        font-size: 12px;
        line-height: 40px;
    }
    .content {
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .content_left {
        flex: 1;
    }
    .content_right ul {
        display: flex;
    }
    .content_right a {
        color: #fff;
    }
</style>


<script>
    export default {
        
    }
</script>