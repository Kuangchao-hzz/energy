<template>
    <div class="header-container">
      <div class="header-nav base-main">
        <ul class="nav-left">
          <li>您好，欢迎光临综合能源服务平台</li>
          <li>
            <span>江苏省</span>
            <icon type="icon-down" size="1"></icon>
          </li>
        </ul>
        <ul class="nav-right">
          <li>
            <span>登录</span>/<span>注册</span>
          </li>
          <li>
            <span>手机APP</span>
            <icon type="icon-down" size="1"></icon>
          </li>
          <li class="lang" @click="onChangeLang"><span>{{ $t('lang') }}</span>[切换]</li>
        </ul>
      </div>
      <header-bar></header-bar>
    </div>
</template>

<script>
  import HeaderBar from './HeaderBar'
  export default {
    components: { HeaderBar },
    name: "header-container",
    data() {
      return{
        hasZh: true
      }
    },
    methods: {
      onChangeLang() {
        this.hasZh = !this.hasZh;
        if(this.hasZh) {
          this.$i18n.locale = 'zh'
        } else {
          this.$i18n.locale = 'en'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/theme.scss";
  $header_height: 40px;
  .header-container{
    background: $themeColor;
    .header-nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: $header_height;
      height: $header_height;
      color: #8795A4;
      font-size: 12px;
      .nav-left{
        display: flex;
        align-items: center;
        >li{
          padding-right: 10px;
          cursor: pointer;
          .icon{
            font-weight: 600;
          }
        }
      }
      .nav-right{
        display: flex;
        align-items: center;
        >li{
          padding-left: 10px;
          cursor: pointer;
          &.lang{
            >span{
              color: $btnBg;
            }
          }
          .icon{
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
