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
          <Iist :title="'最新公告'" :icon="'../../static/images/icon_notice.png'" :data="zxgg"></Iist>
        </div>
      </div>

      <div class="item_2">
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
            <div class="special_right">
              <img src="../../static/images/special_4.png" alt="">
              <p>领导批示</p>
            </div>
          </li> 
        </ul>
      </div>

      <div class="item_3">
        <div class="item_3_router">
          <ul>
            <li><img src="../../static/images/ju_dynamic.png" alt=""></li>
            <li class="ke_dynamic"><img src="../../static/images/ke_dynamic.png" alt=""></li>
          </ul>
        </div>
        <div class="item_3_tab">
          <Tab :title="'信息刊物'" :icon="'../../static/images/icon_look.png'"></Tab>
        </div>
      </div>
      
      <div class="item_4">
        <div class="item_4_left">
          <Iist :title="'党群工作'" :data="dqgz" :icon="'../../static/images/icon_work.png'"></Iist>
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
          <Iist :title="'重要专栏'" :data="zyzl" :icon="'../../static/images/icon_importance.png'"></Iist>
        </div>
        <div class="item_5_1 inspect">
          <Iist :title="'纪检监察'" :data="jjjc" :icon="'../../static/images/icon_inspect.png'"></Iist>
        </div>
        <div class="item_5_1 take">
          <Iist :title="'监管之窗'" :data="jgzc" :icon="'../../static/images/icon_stat.png'"></Iist>
        </div>
        <div class="item_5_1 stat">
          <Iist :title="'统计调研'" :data="tydy" :icon="'../../static/images/icon_take.png'"></Iist>
        </div>
      </div>

      <!-- 政务公开/政策法规模块  -->
      <div class="item_6">
        <!-- 政务公开模块  -->
        <div class="gover_1">
          <Iist :title="'政务公开'" :data="zwgk" :icon="icon_gover"></Iist>
        </div>
        <!-- 政策法规模块  -->
        <div class="gover_1">
          <Iist :title="'政策法规'" :data="zcfg" :icon="icon_laws"></Iist>
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
import Tab from './common/tab/tab'
export default {
  name: 'HelloWorld',
  mounted () {
    let that = this;
    this.$http.get('/api/index.php?a=frontList&d=webshow&m=front').then(res => {                   //请求成功后的处理函数     

      that.zxgg = res.data.data.zxgg; // 最新公告
      that.ldzl = res.data.data.ldzl; // 领导专栏
      that.zwgk = res.data.data.zwgk; // 政务公开
      that.zcfg = res.data.data.zcfg; // 政策法规
      that.tydy = res.data.data.tydy; // 统计调研
      that.xxkw = res.data.data.xxkw; // 信息刊物
      that.jgzc = res.data.data.jgzc; // 监管之窗
      that.jjjc = res.data.data.jjjc; // 纪检监察
      that.zyzl = res.data.data.zyzl; // 重要专栏
      that.dqgz = res.data.data.dqgz; // 党群工作
      that.sliders = res.data.data.slider; // 轮播
      console.log(res)
    }).catch(err => {                 //请求失败后的处理函数   
      console.log(err)
    })
  },
  data(){
    return {
        data:{},
        zxgg:"",
        ldzl:"",
        zwgk:"",
        zcfg:"",
        tydy:"",
        xxkw:"",
        jgzc:"",
        jjjc:"",
        zyzl:"",
        dqgz:"",
        sliders:"",
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
    Iist,
    Tab
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
  .item_3 {
    display: grid;
    grid-template-columns: repeat(2, 291px 889px);
    justify-content:space-between;
    grid-column-gap: 20px;
    padding-bottom: 30px;
  }
  .item_4 {
    display: grid;
    grid-template-columns: repeat(3, 640px 260px 260px);
    justify-content:space-between;
    grid-column-gap: 20px;
    padding-bottom: 20px;
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
  .item_2 {
    width: 100%;
    height: 120px;
    padding: 0 20px;
    border-top: 1px solid #e6e4e5;
    border-bottom: 1px solid #4a77d4;
    margin-bottom: 35px;
  }
  .item_2 ul {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    
  }
  .item_2 ul li {
    flex: 1;
    text-align: center;
  }
  .item_2 ul li p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #3a3a3a;
  }
  .item_2 li:first-child {
    text-align: left;
  }
  .item_2 li:last-child {
    text-align: center;
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
  .item_3_router ul li img {
    display: inherit;
  }
  .ke_dynamic {
    margin-top: 14px;
  }
  .special_right {
    float: right;
  }
</style>
