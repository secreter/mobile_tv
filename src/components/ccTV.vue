<template>
  <div class="cc-tv">
    <div class="weui-tab">
      <div class="weui-navbar">
          <div 
          :class="isIPv6?'':'weui-bar__item_on'"
          @click="change2v4"
          class="weui-navbar__item">
              IPv4
          </div>
          <div 
          :class="isIPv6?'weui-bar__item_on':''"
          @click="change2v6"
          class="weui-navbar__item">
              IPv6
          </div>
      </div>
      
    </div>
    <!-- height 50px -->
    <div class="blank-bar"></div>

    <div class="weui-grids">
      <a 
      v-for="(item,index) in ccTvList"
      :href="item.href+(isIPv6?'':'&v4=1')" 
      class="weui-grid">
          <div class="weui-grid__icon">
              <img :src="item.image" alt="" 
              :class="index<12?'custom__icon':''">
          </div>
          <p class="weui-grid__label">
              {{item.name}}
          </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isIPv6:false,
      ccTvList:[
      {
        name:'综合',
        image:require('../assets/tvlogo/cctv_1.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv1hd'
      },
      {
        name:'财经',
        image:require('../assets/tvlogo/cctv_2.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv2'
      },
      {
        name:'综艺',
        image:require('../assets/tvlogo/cctv_3.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv3hd'
      },
      {
        name:'中文',
        image:require('../assets/tvlogo/cctv_4.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv4'
      },
      {
        name:'体育',
        image:require('../assets/tvlogo/cctv_5.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv5hd'
      },
      {
        name:'电影',
        image:require('../assets/tvlogo/cctv_6.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv6hd'
      },
      {
        name:'军事',
        image:require('../assets/tvlogo/cctv_7.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv7'
      },
      {
        name:'剧场',
        image:require('../assets/tvlogo/cctv_8.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv8hd'
      },
      {
        name:'记录',
        image:require('../assets/tvlogo/cctv_9.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv9'
      },
      {
        name:'科教',
        image:require('../assets/tvlogo/cctv_10.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv10'
      },
      {
        name:'戏曲',
        image:require('../assets/tvlogo/cctv_11.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv11'
      },
      {
        name:'法制',
        image:require('../assets/tvlogo/cctv_12.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv12'
      },
      {
        name:'新闻',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv13'
      },
      {
        name:'少儿',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv14'
      },
      {
        name:'音乐',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv15'
      },
      {
        name:'NEWS',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=cctv16'
      },
      {
        name:'CHC电影',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://item.redream.cn/mobile_tv/play.php?station=chchd'
      },
      ]
    }
  },
  methods:{
    change2v4(){
      this.isIPv6=false
    },
    change2v6(){
      this.isIPv6=true
    },
  }
}
</script>

<style scoped>
  .cc-tv{
    background: #f9f9f9 ;
  }
  .blank-bar{
    height: 50px;
    width: 100%;
  }
  .weui-grid{
    background: #fff;
  }
  .weui-bar__item_on{
    border-bottom: solid 4px #1AAD16;
  }
  .custom__icon{
    width: 40px;
    height: 20px;
    padding-top: 5px;
    margin-left: -5px;
  }
</style>
