<template>
    <div class="special">
        <Breadcrumb :data="bread_path"></Breadcrumb>
        <div class="special_content">
            <div class="special_list" v-for="item in menu_content_list">
                <div class="special_list_title">
                    <h2><span></span>{{ item.name }}<i><img src="../../static/images/icon_menus.png" alt=""></i></h2>
                </div>
                <div class="special_list_content">
                    <ul>
                        <li v-for="list in item.content_list">
                            <p><b></b>{{ list.title }}<span>{{ list.indate }}</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    import Breadcrumb from './common/breadcrumb/breadcrumb'
    export default {
        data () {
            return {
                bread_path:"",
                left_menu:"",
                menu_content_list:"",
                encode:this.$route.query.encode
            }
        },
        mounted () {   
            this.getList(this.encode);
        },
        methods: {
            getList (encode) {
                let that = this; 
                that.$http.get('/api/index.php?a=firstPage&d=webshow&m=first&tag_key='+encode).then(res => {   
                    console.log(res)                //请求成功后的处理函数     
                    that.left_menu = res.data.data.left_menu;
                    that.bread_path = res.data.data.bread_path;
                    that.menu_content_list = res.data.data.menu_content_list;
                }).catch(err => {                 //请求失败后的处理函数   
                    console.log(err)
                })
            }
        },
        components:{
            Breadcrumb
        },
        watch:{
            '$route'(e){
                console.log(e.query.encode)
                this.getList(e.query.encode);
            }
        }
    }
</script>
<style scoped>
    .special {
        width: 936px;
    }
    .special_list {
        padding: 27px;
        background: #fff;
        margin-top: 12px;
    }
    .special_list_title {
        padding-bottom: 20px;
        border-bottom: 1px dashed #dfdfdf;
    }
    .special_list_content {
        padding-top: 20px;
    }
    .special_list_title h2 {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
        background: url(../../static/images/icon_title_bg.png) no-repeat left;
        padding-left: 10px;
    }
    .special_list_title h2 i {
        float: right;
    }
    .special_list_content ul li p {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
        background: url(../../static/images/icon_d.png) no-repeat left;
        padding-left: 10px;
    }
    .special_list_content ul li p span {
        font-family: MicrosoftYaHei;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        background: url(../../static/images/icon_time.png) no-repeat left;
        padding-left: 20px;
        float: right;
    }
</style>
