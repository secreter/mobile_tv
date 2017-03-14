<template>
  <div class="picture">
    <img width="100%" src="../assets/bg1.jpg">
    <div class="weui-cells__title">输入想说的话：</div>
    <form action="http://item.redream.cn/fastimg/give.php" method="post">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <textarea name="userword" class="weui-textarea" 
          v-model="text"
          placeholder="我不希望只能在老去时提起一切，只能说一句，人生长恨水长东。" rows="3"></textarea>
          <div class="weui-textarea-counter"><span>{{text.length}}</span>/200</div>
        </div>
      </div>
    </div>
    <div class="btn">
      <button @click="emptySub" class="weui-btn weui-btn_mini weui-btn_disabled weui-btn_warn">每日黄历</button>
      <button class="weui-btn weui-btn_mini weui-btn_primary">生成图片</button>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text:''
    }
  },
  methods:{
    emptySub(){
      this.text=''
      return false
    }
  }
}
</script>

<style scoped>
.btn{
  /*display: flex;
  justify-content: space-between;*/
  text-align: center;
  margin: 20px 0;
}
.weui-btn{
  margin: 0 10px;
}
</style>
