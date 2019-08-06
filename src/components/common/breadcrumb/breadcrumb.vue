<template>
    <div class="breadcrumb">
        <div class="breadcrumb_content">
            <h2>领导专栏</h2>
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li v-for="item in $route.matched">
                    <i>></i>
                    <router-link :to="{ path: item.path }">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        breadcrumb(){
            return  this.$route.meta.breadcrumb;
        }
    }
}
</script>
<style scoped>
    .breadcrumb {
        width: 936px;
        height: 70px;
        background: #fff;
        padding: 0 27px;
    }
    .breadcrumb_content {
        display: flex;
    }
    .breadcrumb_content h2 {
        flex: 1;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 70px;
        letter-spacing: 0px;
        color: #333333;
    }
    .breadcrumb_content ul li {
        float: left;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 70px;
        letter-spacing: 0px;
        color: #797979;
    }
    .breadcrumb_content ul li i {
        padding: 0 10px;
    }
    .breadcrumb_content ul li a {
        color: #797979;
    }
</style>

