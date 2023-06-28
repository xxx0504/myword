<!--  -->
<template>
  <div>
    <h1 class="title">按钮</h1>
    <a-row type="flex" justify="space-between">
      <a-col :span="5">
        <Button1></Button1>
      </a-col>
      <a-col :span="5">
        <Button2></Button2>
      </a-col>
      <a-col :span="5">
        <Button3></Button3>
      </a-col>
      <a-col :span="5">
        <Button4></Button4>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
      <a-col :span="5">
        <Button5></Button5>
      </a-col>
      <a-col :span="5">
        <Button6></Button6>
      </a-col>
      <a-col :span="5">
        <Button7></Button7>
      </a-col>
      <a-col :span="5">
        <Button8></Button8>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
      <a-col :span="5">
        <Button9></Button9>
      </a-col>
      <a-col :span="5">
        <Button10></Button10>
      </a-col>
      <a-col :span="5">
        <Button3></Button3>
      </a-col>
      <a-col :span="5">
        <Button4></Button4>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  components: {
    Button1: () => import('./component/button1.vue'),
    Button2: () => import('./component/button2.vue'),
    Button3: () => import('./component/button3.vue'),
    Button4: () => import('./component/button4.vue'),
    Button5: () => import('./component/button5.vue'),
    Button6: () => import('./component/button6.vue'),
    Button7: () => import('./component/button7.vue'),
    Button8: () => import('./component/button8.vue'),
    Button9: () => import('./component/button9.vue'),
    Button10: () => import('./component/button10.vue'),
  },
  data() {
    return {
      
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  }
}
</script>
<style lang="less" scoped>
.title{
  font-size: 7rem;
  font-weight: 900;
  color: white;
}
.ant-row-flex{
  padding: 15px;
}
.ant-col {
  height: 200px;
  background: rgba(255, 255, 255, 0.381);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
</style>