<template>
  <div id="app">
    <!--  -->
    <div class="weui-tab">
      <div class="weui-tab__panel">
          <router-view></router-view>
      </div>
      <div class="weui-tabbar">
          <a 
          v-for="(item,index) in tabList"
          :href="item.href" 
          :class="index===activeTabId?'weui-bar__item_on':''"
          @click="changeTab(index)"
          class="weui-tabbar__item">
              <img :src="index===activeTabId?item.imageActive:item.image" alt="" class="weui-tabbar__icon ">
              <p class="weui-tabbar__label">{{item.name}}</p>
          </a>
      </div>
    </div>
    <!-- end weiui-tab -->

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      tabList:[
        {
          name:"地方卫视",
          href:"#",
          image:require('./assets/local.png'),
          imageActive:require('./assets/local_active.png'),
        },
        {
          name:"中央卫视",
          href:"#cctv",
          image:require('./assets/cctv.png'),
          imageActive:require('./assets/cctv_active.png'),
        },
        {
          name:"龙门客栈",
          href:"http://item.redream.cn/chat/#!/",
          image:require('./assets/chat.png'),
          imageActive:require('./assets/chat.png'),
        },
        {
          name:"更多",
          href:"#more",
          image:require('./assets/more.png'),
          imageActive:require('./assets/more_active.png'),
        },
      ],
      activeTabId:0
    }
  },
  mounted(){
  },
  methods:{
    changeTab(index){
      this.activeTabId=index
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body{
  background: #f9f9f9;
}
#app {
  padding-top: 10px;
  height: 100vh;
  width: 100vw;
}
</style>
