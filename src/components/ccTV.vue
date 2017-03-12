<template>
  <div class="cc-tv">
    <div class="weui-grids">
      <a 
      v-for="(item,index) in ccTvList"
      :href="item.href" 
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
      ccTvList:[
      {
        name:'综合',
        image:require('../assets/tvlogo/cctv_1.png'),
        href:'http://tv6.byr.cn/hls/cctv1hd.m3u8'
      },
      {
        name:'财经',
        image:require('../assets/tvlogo/cctv_2.png'),
        href:'http://tv6.byr.cn/hls/cctv2.m3u8'
      },
      {
        name:'综艺',
        image:require('../assets/tvlogo/cctv_3.png'),
        href:'http://tv6.byr.cn/hls/cctv3hd.m3u8'
      },
      {
        name:'中文',
        image:require('../assets/tvlogo/cctv_4.png'),
        href:'http://tv6.byr.cn/hls/cctv4.m3u8'
      },
      {
        name:'体育',
        image:require('../assets/tvlogo/cctv_5.png'),
        href:'http://tv6.byr.cn/hls/cctv5hd.m3u8'
      },
      {
        name:'电影',
        image:require('../assets/tvlogo/cctv_6.png'),
        href:'http://tv6.byr.cn/hls/cctv6hd.m3u8'
      },
      {
        name:'军事',
        image:require('../assets/tvlogo/cctv_7.png'),
        href:'http://tv6.byr.cn/hls/cctv7.m3u8'
      },
      {
        name:'剧场',
        image:require('../assets/tvlogo/cctv_8.png'),
        href:'http://tv6.byr.cn/hls/cctv8hd.m3u8'
      },
      {
        name:'记录',
        image:require('../assets/tvlogo/cctv_9.png'),
        href:'http://tv6.byr.cn/hls/cctv9.m3u8'
      },
      {
        name:'科教',
        image:require('../assets/tvlogo/cctv_10.png'),
        href:'http://tv6.byr.cn/hls/cctv10.m3u8'
      },
      {
        name:'戏曲',
        image:require('../assets/tvlogo/cctv_11.png'),
        href:'http://tv6.byr.cn/hls/cctv11.m3u8'
      },
      {
        name:'法制',
        image:require('../assets/tvlogo/cctv_12.png'),
        href:'http://tv6.byr.cn/hls/cctv12.m3u8'
      },
      {
        name:'新闻',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://tv6.byr.cn/hls/cctv13.m3u8'
      },
      {
        name:'少儿',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://tv6.byr.cn/hls/cctv14.m3u8'
      },
      {
        name:'音乐',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://tv6.byr.cn/hls/cctv15.m3u8'
      },
      {
        name:'NEWS',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://tv6.byr.cn/hls/cctv16.m3u8'
      },
      {
        name:'CHC电影',
        image:require('../assets/tvlogo/tv_default.png'),
        href:'http://tv6.byr.cn/hls/chchd.m3u8'
      },
      ]
    }
  }
}
</script>

<style scoped>
  .cc-tv{
    background: #f9f9f9 ;
  }
  .weui-grid{
    background: #fff;
  }
  .custom__icon{
    width: 40px;
    height: 20px;
    padding-top: 5px;
    margin-left: -5px;
  }
</style>
