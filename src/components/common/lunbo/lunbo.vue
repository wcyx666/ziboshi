<template>
    <div class="lunbo">
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="item_lunbo_info">
                <h2 class="item_lunbo_info_title">
                    持续推进对外开放 优化金融领域外资营商环境——银保监会新闻发言人1...
                </h2>
                <p class="item_lunbo_info_online"></p>
                <p class="item_lunbo_info_txt">
                    国务院金融委20日宣布了一系列金融业进一步对外开放的政策措施。银保监会新闻发言人介绍了其中有关银行业保险业对外开放的政策措施
                </p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="item_lunbo_info">
                <h2 class="item_lunbo_info_title">
                    持续推进对外开放 优化金融领域外资营商环境——银保监会新闻发言人2...
                </h2>
                <p class="item_lunbo_info_online"></p>
                <p class="item_lunbo_info_txt">
                    国务院金融委20日宣布了一系列金融业进一步对外开放的政策措施。银保监会新闻发言人介绍了其中有关银行业保险业对外开放的政策措施
                </p>
                </div>
            </div>
            </div>
        </div>
        
        <div class="item_lunbo_info_btn">
            <div class="swiper-prev">
            <img src="../../../../static/images/icon_next.png" alt="">
            </div>
            <div class="swiper-index">
            <span>{{ this.swiperIndex }}</span>/2
            </div>
            <div class="swiper-next">
            <img src="../../../../static/images/icon_prev.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper.js';
export default {
  name: 'HelloWorld',
  props:[
      'title'
  ],
  mounted:function(){
    let that = this;
    new Swiper('.swiper-container', {
      loop: false, // 循环模式选项
      // 如果需要分页器
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      on: {
        slideChangeTransitionEnd: function(){
          that.swiperIndex = this.activeIndex+1;
        }
      }
    })
  },
  data(){
    return {
        arrItem:[
            {
                name:'swiperSlide5',
                imgUrl:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'
            },
            {
                name:'swiperSlide1',
                imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
            },
            {
                name:'swiperSlide51',
                imgUrl:'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
            },
            {
                name:'swiperSlide1111115',
                imgUrl:'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'
            }
        ],
        swiperIndex:1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lunbo {
    width: 895px;
    height: 359px;
    position: relative;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .item_notice {
    width: 286px;
    height: 359px;
  }
  .item_lunbo_info {
    width: 314px;
    height: 359px;
    background: #3c73d8;
    float: right;
    padding: 35px;
  }
  .item_lunbo_info_btn {
    position: absolute;
    width: 314px;
    height: 68px;
    padding: 37px 35px 25px 35px;
    background: #0950a2;
    display: flex;
    align-items: center;
    bottom: 0;
    right: 0;
    z-index: 9;
  }
  .swiper-index {
    font-size: 18px;
    padding: 0 20px;
    color: #fff;
  }
  .swiper-index span {
    font-size: 30px;
  }
  .item_lunbo_info_title {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .item_lunbo_info_txt {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
  }
.item_lunbo_info_online {
    width: 50px;
	height: 3px;
    background-color: #ffffff;
    margin: 35px 0;
}
</style>