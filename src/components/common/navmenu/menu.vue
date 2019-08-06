<template>
    <div class="menu">
        <div class="menu_content">
            <div class="menu_content_head">
                <span>领导专栏</span>
            </div>
            <div class="menu_content_list">
                <ul>
                    <li><router-link to="/activity">领导活动</router-link></li>
                    <li><router-link to="/speak">领导讲话  </router-link></li>
                    <li><router-link to="">一周工作安排</router-link></li>
                    <li><router-link to="">领导批示</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

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
