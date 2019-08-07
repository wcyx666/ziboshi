<template>
    <div class="tab">
        <div class="item_gover_title">
          <img :src="icon" alt="" class="left">
          <p>{{ title }}</p>
          <img src="../../../../static/images/icon_menu.png" alt="" class="right">
        </div>
        <div class="item_3_tab_conctent">
            <div class="item_3_tab_conctent_btn">
                <ul>
                    <li v-for="(data,index) in tabData" :class="index == judgeIndex ? 'highlight' : ''" @click="bindClickIndex(index)">{{ data.name }}</li>
                </ul>
            </div>
            <div class="item_3_tab_conctent_box">
                <div class="item_gover_content">
                    <ul>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                    </ul>
                </div>
                <div class="item_gover_content">
                    <ul>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                        <li>
                            <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props:[
        'title',
        'data',
        'icon'
    ],
    data () {              
        return {
            tabData:[
                { name: "各科室信息报送", encode: "1" },
                { name: "办公室信息采编", encode: "2" },
                { name: "省局采用信息", encode: "3" }
            ],
            judgeIndex:0,
        }
    },
    mounted () {
        console.log(this.tabData)
        
    },
    methods: {
        bindClickIndex (index) {
            this.judgeIndex = index;
        }
    }
}
</script>

<style scoped>
    .tab {
        width: 100%;
    }
    .item_gover {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border: solid 1px #e5e5e5;
    }
    .item_gover_title {
        width: 100%;
        height: 53px;
        background: url(../../../../static/images/tab_bg.png) no-repeat;
        display: flex;
        align-items: center;
        color: #fff;
    }
    .item_gover_title p {
        flex: 1;
        margin-left: 16px;
    }
    .item_gover_title .left {
        margin-left: 23px;
    }
    .item_gover_title .right {
        padding-right: 18px;
    }
    .item_3_tab_conctent_box {
        border: 1px solid #e5e5e5;
        border-top: none;
        padding: 21px;
    }
    .item_3_tab_conctent {
        width: 100%;
    }
    .item_3_tab_conctent_btn {
        width: 100%;
    }
    .item_3_tab_conctent_btn ul  {
        display: flex;
        border: solid 1px #e5e5e5;
    }
    .item_3_tab_conctent_btn ul li {
        width: 146px;
        height: 53px;
        background-color: #ffffff;
        border: solid 1px #e5e5e5;
        border-bottom: none;
        border-top: none;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 53px;
        letter-spacing: 0px;
        color: #383838;
        text-align: center;
    }
    .item_gover_content {
        width: 50%;
        float: left;
    }
    .item_gover_content ul li {
        padding-top: 10px
    }
    .item_gover_content ul li:first-child {
        padding-top: 0
    }
    .item_gover_content ul li p {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #383838;
        background: url(../../../../static/images/icon_bt.png) no-repeat center left;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis; 
        -o-text-overflow: ellipsis;
        white-space:nowrap;
    }
    .hide {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        margin-left: 10px;
        border-bottom: solid 1px #e5e5e5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .highlight {
        border-bottom: 1px solid #b47f3f !important;
    }
</style>
