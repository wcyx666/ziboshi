<template>
  <div class="home">
    <headTop></headTop>
    <headTitle></headTitle>
    <headNav></headNav>
    <div class="content">
      <div class="item_1">
        <!-- 轮播  -->
        <div class="lunbo_info">
          <lunBo></lunBo>
        </div>
        <!-- 最新公告  -->
        <div class="item_notice">
          <Iist :title="'最新公告'" :icon="'../../static/images/icon_notice.png'"></Iist>
        </div>
      </div>

      <div class="item_2 special">
        <ul>
          <li>
            <img src="../../static/images/special_0.png" alt="">
          </li>
          <li>
            <img src="../../static/images/special_1.png" alt="">
            <p>领导活动</p>
          </li>
          <li>
            <img src="../../static/images/special_2.png" alt="">
            <p>领导讲话</p>
          </li>
          <li>
            <img src="../../static/images/special_3.png" alt="">
            <p>一周工作安排</p>
          </li>
          <li>
            <img src="../../static/images/special_4.png" alt="">
            <p>领导批示</p>
          </li>
        </ul>
      </div>
      
      <div class="item_4">
        <div class="item_4_left">
          <Iist :title="'党群工作'" :icon="'../../static/images/icon_work.png'"></Iist>
        </div>
        <div class="item_4_end">
          <ul>
            <li><router-link to="">通讯录</router-link></li>
            <li><router-link to="">银保监局内网邮箱</router-link></li>
            <li><router-link to="">会议室预订</router-link></li>
            <li><router-link to="">短信群发系统</router-link></li>
            <li><router-link to="">保密工作</router-link></li>
          </ul>
        </div>
        <div class="item_4_right">
          <ul>
            <li class="item_4_right_txt"><router-link to="">下载中心</router-link></li>
            <li class="item_4_right_txt"><router-link to="">任务督办</router-link></li>
            <li class="item_4_right_img1"><router-link to=""><img src="../../static/images/icon_router1.png" alt=""></router-link></li>
            <li class="item_4_right_img2"><router-link to=""><img src="../../static/images/icon_router2.png" alt=""></router-link></li>
          </ul>
        </div>
      </div>

      <div class="item_5">
        <div class="item_5_1 importance">
          <Iist :title="'重要专栏'" :icon="'../../static/images/icon_importance.png'"></Iist>
        </div>
        <div class="item_5_1 inspect">
          <Iist :title="'纪检监察'" :icon="'../../static/images/icon_inspect.png'"></Iist>
        </div>
        <div class="item_5_1 take">
          <Iist :title="'监管之窗'" :icon="'../../static/images/icon_stat.png'"></Iist>
        </div>
        <div class="item_5_1 stat">
          <Iist :title="'统计调研'" :icon="'../../static/images/icon_take.png'"></Iist>
        </div>
      </div>

      <!-- 政务公开/政策法规模块  -->
      <div class="item_6">
        <!-- 政务公开模块  -->
        <div class="gover_1">
          <Iist :title="'政务公开'" :data="data" :icon="icon_gover"></Iist>
        </div>
        <!-- 政策法规模块  -->
        <div class="gover_1">
          <Iist :title="'政策法规'" :data="data" :icon="icon_laws"></Iist>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import headTop from './common/head/head_top'
import headTitle from './common/head/head_title'
import headNav from './common/head/head_nav'
import Footer from './common/footer/footer'
import lunBo from './common/lunbo/lunbo'
import Iist from './common/list/list'
export default {
  name: 'HelloWorld',
  mounted:function(){
    
  },
  data(){
    return {
        data:{},
        icon_gover:'../../static/images/icon_gover.png',
        icon_laws:'../../static/images/icon_laws.png',
    }
  },
  components:{
    headTop,
    headTitle,
    headNav,
    Footer,
    lunBo,
    Iist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .content {
    width: 1200px;
    margin: 38px auto;
  }
  .item_1 {
    display: grid;
    grid-template-columns: repeat(2, 895px 308px);
    justify-content:space-between;
    grid-column-gap: 22px;
    padding-bottom: 35px;
  }
  .item_4 {
    display: grid;
    grid-template-columns: repeat(3, 640px 260px 260px);
    justify-content:space-between;
    grid-column-gap: 20px;
  }
  .item_5 {
    display: grid;
    grid-template-columns: repeat(4, 297px);
    justify-content:space-between;
  }
  .item_6 {
    display: grid;
    grid-template-columns: repeat(2, 598px);
    justify-content:space-between;
  }
  .special {
    width: 100%;
    height: 120px;
    padding: 0 20px;
    border-top: 1px solid #e6e4e5;
    border-bottom: 1px solid #4a77d4;
    margin-bottom: 35px;
  }
  .special ul {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    
  }
  .special ul li {
    flex: 1;
    text-align: center;
  }
  .special ul li p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #3a3a3a;
  }
  .special li:first-child {
    text-align: left;
  }
  .special li:last-child {
    text-align: right;
  }
  .lunbo_info {
    flex: 1;
  }
  .item_notice {
    width: 286px;
    height: 359px;
  }
  .gover {
    width: 598px;
  }
  .item_4_left {
    width: 640px;
	  height: 297px;
  }
  .item_4_end ul li {
    width: 260px;
    height: 53px;
    background-color: #6d96e1;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
    line-height: 53px;
    margin-bottom: 8px;
  }
  .item_4_end ul li:last-child {
    padding-bottom: 0;
  }
  .item_4_end ul li a {
    color: #ffffff;
    display: block;
  }
  .item_4_right ul li a {
    color: #ffffff;
    display: block;
  }
  .item_4_right_txt {
    width: 260px;
    height: 53px;
    background-color: #6d96e1;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
    line-height: 53px;
    margin-bottom: 8px;
  }
  .item_4_right_img1 {
    width: 260px;
    height: 83px;
    margin-bottom: 8px;
  }
  .item_4_right_img2 {
    margin-bottom: 0;
  }
  .item_5_1 {
    width: 297px;
    height: 325px;
    margin-bottom: 35px;
  }
  .importance .item_gover_title {
    background: url(../../static/images/importance_bg.png) no-repeat !important;
  }
  .inspect .item_gover_title {
    background: url(../../static/images/inspect_bg.png) no-repeat !important;
  }
  .stat .item_gover_title {
    background: url(../../static/images/stat_bg.png) no-repeat !important;
  }
  .take .item_gover_title {
    background: url(../../static/images/take_bg.png) no-repeat !important;
  }
</style>
