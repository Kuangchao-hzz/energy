<template>
  <div class="header-bar-container">
    <div class="header-bar">
      <div class="bar-container base-main">
        <p class="header-logo" @click="onClickLogo">LOGO</p>
        <div class="nav-bar">
          <ul>
            <li v-for="(tab, index) in data"
                :class="{active: activeTab === tab.path}"
                :key="index" @click="onClickTabs(tab)">
              {{ tab.name }}
            </li>
          </ul>
          <div class="nav-search">
            <div class="h-search">
              <input type="text" placeholder="能源服务/服务商/经纪人">
              <label>
                <icon type="icon-sousuo" size="24"></icon>
              </label>
            </div>
            <button>我要发布需求</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Dropdown, DropdownItem, DropdownMenu } from 'iview';
  export default {
    components: { Dropdown, DropdownItem, DropdownMenu },
    name: "header-bar",
    data() {
      return {
        data: [{
          name: '首页',
          path: '/home'
        }, {
          name: '能源服务',
          path: '/energy'
        }, {
          name: '服务商',
          path: '/provider'
        }, {
          name: '经纪人',
          path: '/broker'
        }],
        activeTab: '/home'
      }
    },
    methods: {
      onClickLogo() {
        this.$router.push('/home');
      },
      onClickTabs(tab) {
        this.activeTab = tab.path;
        this.$router.push({
          path: tab.path
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/theme.scss";
  .header-bar-container{
    .header-bar{
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      background: #fff;
      .bar-container{
        display: flex;
        align-items: center;
        .header-logo{
          width: 10%;
          cursor: pointer;
        }
        .nav-bar{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          ul{
            display: flex;
            align-items: center;
            li{
              padding: 20px;
              cursor: pointer;
              position: relative;
              &.active::after{
                content: '';
                display: block;
                height: 2px;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
                background: $btnBg;
              }
            }
          }
          .nav-search{
            display: flex;
            .h-search{
              display: table;
              input{
                width: 250px;
                line-height: 26px;
                padding: 0 12px;
                border: 1px #5DB39E solid;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                display: table-cell;
                outline: none;
              }
              label{
                display: table-cell;
                line-height: 25px;
                background: #5DB39E;
                padding: 0 15px;
                position: relative;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                .icon{
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  color: #fff;
                }
              }
            }
            button{
              padding: 5px 10px;
              border-radius: 4px;
              color: #fff;
              background: $btnBg;
              outline: none;
              border: none;
              margin-left: 15px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
