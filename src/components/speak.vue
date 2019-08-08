<template>
    <div class="speak">
        <div class="speak_nav">
            <h2>{{ tag_name }}</h2>
            <ul>
                <li v-for="item in bread_items">
                    <router-link to="/">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="line"><img src="../../static/images/icon_xiahuaxian.png" alt=""></div>
        <div class="speak_list">
            <div class="speak_item" v-for="item in content_list">
                <h2 class="speak_title">{{ item.title }}</h2>
                <p class="speak_content">{{ item.content }}</p>
                <p class="speak_date">{{ item.indate }}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tag_name:"",
                bread_items:"",
                content_list:"",
                key:this.$route.query.key
            }
        },
        mounted () {   
            this.getList(this.key);
        },
        methods: {
            getList (key) {
                let that = this; 
                that.$http.get('/api/index.php?a=secondPage&d=webshow&m=second&tag_key='+key+'&limit=10&offset=0').then(res => {   
                    console.log(res)  
                    that.tag_name =  res.data.data.bread_path.tag_name;
                    that.content_list = res.data.data.content_list;
                    that.bread_items = res.data.data.bread_path.bread_items;
                }).catch(err => {                 //请求失败后的处理函数   
                    console.log(err)
                })
            }
        },
        watch:{
            '$route'(e){
                console.log(e.query.key)
                this.getList(e.query.key);
            }
        }
    }
</script>
<style scoped>
    .line img {
        width: 100%;
        float: left;
        padding-bottom: 14px;
    }
    .speak {
        padding: 27px;
    }
    .speak_nav {
        width: 100%;
        display: flex;
        padding-bottom: 21px;
    }
    .speak_nav h2 {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
        flex: 1;
    }
    .speak_nav ul {
        display: flex;
    }
    .speak_nav ul li {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
    }
    .speak_nav ul li a {
        color: #797979;
    }
    .speak_item {
        background: #fff;
        padding: 24px;
        border-bottom: 1px dashed #dfdfdf;
    }
    .speak_item:last-child {
        border-bottom: none;
    }
    .speak_item .speak_title {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
    }
    .speak_item .speak_content {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        padding-top: 20px;
        padding-bottom: 35px;
    }
    .speak_item .speak_date {
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        background: url(../../static/images/icon_time.png) no-repeat left;
        padding-left: 20px;
    }
</style>
