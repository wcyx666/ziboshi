<template>
    <div class="activity">
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
        <div class="activity_content">
            
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
    
</style>
