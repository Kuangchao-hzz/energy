<template>
  <div class="footer-container">
    <div class="base-main">
      <div class="footer-item" v-for="(OItem, index) in data" :key="index">
        <h5>{{ OItem.title }}</h5>
        <ul>
          <li v-for="item in OItem.list">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bar">
      <h5>Copyright©️2017 鑫能网 xnwang.com 版权所有</h5>
      <p>ICP备案号 苏IPC备17005048</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footer-container",
    data() {
      return {
        data: [{
          title: '我是客户',
          list: [{
            name: '注册成为电商客户',
            path: '/'
          }, {
            name: '查看我的用能需求',
            path: '/'
          }, {
            name: '查看我的订单状态',
            path: '/'
          }]
        }, {
          title: '我是服务商',
          list: [{
            name: '注册成为服务商',
            path: '/'
          }, {
            name: '发布商品',
            path: '/'
          }, {
            name: '查看我的订单状态',
            path: '/'
          }]
        }, {
          title: '我是经纪人',
          list: [{
            name: '注册成为经纪人',
            path: '/'
          }, {
            name: '发布委托订单',
            path: '/'
          }, {
            name: '查看我的客户',
            path: '/'
          }]
        }, {
          title: '文件下载',
          list: [{
            name: '用电客户授权委托书模板',
            path: '/'
          }, {
            name: '购售电合同模板',
            path: '/'
          }, {
            name: '用电客户授权委托书模板',
            path: '/'
          }, {
            name: '购售电合同模板',
            path: '/'
          }]
        }, {
          title: '全国服务热线',
          list: [{
            name: '400-928-8887',
            path: '/'
          }, {
            name: '邮件咨询',
            path: '/'
          }, {
            name: 'supper@xnwang.com',
            path: '/'
          }]
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/theme.scss";
  .footer-container{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: $footerColor;
    .base-main{
      padding: 20px 0 40px 0;
      display: flex;
      justify-content: space-between;
      align-items: start;
      .footer-item{
        h5{
          color: #fff;
          padding-bottom: 10px;
        }
        ul{
          li{
            line-height: 20px;
            color: #999;
            cursor: pointer;
          }
        }
      }
    }
    .footer-bar{
      text-align: center;
      padding: 10px 0;
      background: $footerBarColor;
      color: #999;
    }
  }
</style>
