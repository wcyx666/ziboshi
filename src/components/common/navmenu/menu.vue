<template>
    <div class="menu">
        <div class="menu_content">
            <div class="menu_content_head">
                <span>{{ bread.name }}</span>
            </div>
            <div class="menu_content_list">
                <ul>
                    <li v-for="item in bread.children_menu"><router-link :to="item.num">{{ item.name }}</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['data'],
        data () {
            return {
                bread:""
            }
        },
        mounted () {
            console.log(this.data)
        },
        watch:{
            data (val){
                this.bread = val;
            },
        }
    }
</script>


<style scoped>
    .menu {
        width: 230px;
    }
    .menu_content_head {
        width: 230px;
        height: 82px;
        background-color: #315aa9;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #f5f5f5;
        padding-top: 23px;
    }
    .menu_content_head span {
        border-left: 1px solid #ffffff;
        padding-bottom: 10px;
        padding-left: 14px;
        margin-left: 35px;  
    }
    .menu_content_list ul li {
        width: 100%;
        height: 57px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 57px;
        letter-spacing: 0px;
        color: #333333;
        padding-left: 35px;
    }
    .menu_content_list ul li a {
        color: #333333;
    }
</style>
