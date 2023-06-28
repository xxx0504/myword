<!--  -->
<template>
  <div>
    <!-- HTML !-->
<button class="button-10" role="button">Button 10</button>
  </div>
</template>

<script>
export default {
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
<style lang='less' scoped>
/* @import url(); 引入css类 */


/* CSS */
.button-10 {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-10:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-10:active {
  transform: scale(0.95);
}
</style>