<template>
    <div class="speak">
        <div class="speak_nav">
            <h2>领导讲话</h2>
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <i>></i>
                    <router-link to="">领导专栏</router-link>
                </li>
                <li>
                    <i>></i>
                    <router-link to="">领导讲话</router-link>
                </li>
            </ul>
        </div>
        <div class="line"><img src="../../static/images/icon_xiahuaxian.png" alt=""></div>
        <div class="speak_list">
            <div class="speak_item">
                <h2 class="title">中国银保监会延长对香港地区偿付能力监管等效框架协议过渡期内再保信用风险因子适用期限</h2>
                <p class="content">我国资管市场规模和发展潜力巨大，现有资管机构难以完全满足快速增长的多元化市场需求。允许合资成立外资控股理财公司，有利于引
进国际先进的资管实践和专业经验，促进资管业及资本市场稳健发展，有利于发挥中外资资产...</p>
                <p class="date">2019-08-01</p>
            </div>
        </div>
    </div>
</template>

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
    .speak_item .title {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #333333;
    }
    .speak_item .content {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #797979;
        padding-top: 20px;
        padding-bottom: 35px;
    }
    .speak_item .date {
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
