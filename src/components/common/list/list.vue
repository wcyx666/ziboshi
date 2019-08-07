<template>
  <div class="list">
    <div class="item_gover">
        <div class="item_gover_title">
          <img :src="icon" alt="" class="left">
          <p>{{ title }}</p>
          <img src="../../../../static/images/icon_menu.png" alt="" class="right">
        </div>
        <div class="item_gover_content">
          <ul>
              <li>
              <p>银保监会认真听取全国“两会”代表委员对促进民营银行健康发展的意见建议</p>
              <div class="hide">
                  近日，银保监会召开促进民营银行健康发展建议提案座谈会。会议紧密结合“不忘初心、牢记使命”主题教育，对照“守初心，担使命，找差距，抓落实”的总体要求...
              </div>
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
</template>

<script>
export default {
    props:[
        'title',
        'data',
        'icon'
    ],
    name: 'HelloWorld',
    mounted () {
        console.log(this.icon)
    },
    data(){
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list {
        width: 100%;
        height: 100%;
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
    background: url(../../../../static/images/head_nav.png) no-repeat;
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
  .item_gover_content {
    padding: 25px;
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
</style>
