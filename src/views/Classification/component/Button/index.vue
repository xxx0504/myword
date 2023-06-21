<!--  -->
<template>
  <div>
    <h1 class="title">按钮</h1>
    <a-row :gutter="12">
      <a-col :span="4">
        <Button1></Button1>
      </a-col>
      <a-col :span="4">
        col-2
      </a-col>
      <a-col :span="4">
        col-3
      </a-col>
      <a-col :span="4">
        col-4
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Button1 from './component/button1.vue'
export default {
  components: {
    Button1,
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
.ant-col{
  display: flex;
  aspect-ratio:4/3;
  align-items: center;
  justify-content: center;
  background: white;
}
</style>