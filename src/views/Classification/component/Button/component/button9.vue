<!-- button9 -->
<template>
  <div>
    <!-- HTML !-->
<button class="button-9" role="button">Button 9</button>
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
.button-9 {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-9::after,
.button-9::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.button-9::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

.button-9::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-9:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-9:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-9:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
</style>