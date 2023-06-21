<!-- 分类页面 -->
<template>
  <div class="Classification">
    <div class="menus">
      <a-menu
      theme="dark" 
      style="width: 270px;"
      @click="handleClick"
      :default-selected-keys="[current]"
    >
      <a-menu-item v-for="item in menuList" :key="item.menu">
        {{item.title}}
      </a-menu-item>
    </a-menu>
    </div>
    <div class="TypeCentent">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '/Classification/Button',
      menuList:[{
        id:'4',
        title:'按钮',
        menu:'/Classification/Button',
      },{
        id:'5',
        title:'阴影',
        menu:'/Classification/Shadow',
      }],
    }
  },
  methods:{
    handleClick(e) {
      console.log('click', e);
      this.$router.push(e.key)
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.current=this.$route.path
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  }
}
</script>
<style lang="less" scoped>
.Classification{
  width: 100%;
  display: flex;
  .menus{
    width: 20%;
  }
  .TypeCentent{
    width: 80%;
  }
}

</style>