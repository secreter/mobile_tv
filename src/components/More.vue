<template>
  <div class="more">
    <div class="weui-cells__title">更多趣玩</div>
    <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="http://item.redream.cn/truthmoment/index.php?id=220043&userid=o6UDkwIppYchG79HknNe-9fuYugQ">
            <div class="weui-cell__bd">
                <p>真心话大冒险</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="http://item.redream.cn/trumptweet/">
            <div class="weui-cell__bd">
                <p>川普推特</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="http://www.redream.cn/main/treehole.php">
            <div class="weui-cell__bd">
                <p>树洞</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
    </div>

    <div class="weui-cells__title">关于我们</div>
    <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzNjE4NDI5Nw==&scene=124#wechat_redirect">
            <div class="weui-cell__bd">
                <p>进入公众号</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="http://www.redream.cn/main/ipv6tv.php">
            <div class="weui-cell__bd">
                <p>访问电脑版</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
    </div>

    <div class="weui-cells__title">常见问题</div>
    <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="http://test-ipv6.com">
            <div class="weui-cell__bd">
                <p>ipv6网络测试</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="http://mp.weixin.qq.com/s?__biz=MzIzNjE4NDI5Nw==&mid=2650650219&idx=1&sn=4fca0c603c8641f9d21bb5ca92c0126e&chksm=f0d2a1edc7a528fb55d13e93018248aecd392e6b3318af75f3c5019fbc161159a3f480dbca63#rd">
            <div class="weui-cell__bd">
                <p>使用教程</p>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
    </div>

    <div class="praise">
      <img width="120" src="../assets/pay.jpg">
      <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn" @click="show">赞赏</a>
    </div>

    <div :style="{'display':isShow==true?'block':'none'}">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
          <div class="weui-dialog__hd"><strong class="weui-dialog__title">长按识别二维码</strong></div>
          <div class="weui-dialog__bd">
            <img width="120" src="../assets/pay.jpg">
          </div>
          <div class="weui-dialog__ft">
              <a
                @click="hide"
               href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
          </div>
      </div>
    </div>
    <!-- footer -->
    <!-- <div class="weui-footer weui-footer_fixed-bottom">
      <p class="weui-footer__links">
          <a href="javascript:home();" class="weui-footer__link">WeUI首页</a>
      </p>
      <p class="weui-footer__text">Copyright &copy; 2008-2016 weui.io</p>
      <br>
      <br>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow:false
    }
  },
  methods:{
    show(){
      this.isShow=true
    },
    hide(){
      this.isShow=false
    }
  }
}
</script>

<style scoped>
  .praise{
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
