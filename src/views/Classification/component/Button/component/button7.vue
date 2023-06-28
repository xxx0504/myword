<!-- button7 -->
<template>
  <div>
    <!-- HTML !-->
    <button class="button-7-pushable" role="button">
      <span class="button-7-shadow"></span>
      <span class="button-7-edge"></span>
      <span class="button-7-front text">
        Button 7
      </span>
    </button>
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
.button-7-pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-7-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

.button-7-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}

.button-7-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
  .button-7-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-7-pushable:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.button-7-pushable:hover .button-7-front {
  transform: translateY(-6px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.button-7-pushable:active .button-7-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-7-pushable:hover .button-7-shadow {
  transform: translateY(4px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.button-7-pushable:active .button-7-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-7-pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>