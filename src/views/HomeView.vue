<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header style="padding: 0px;background: yellowgreen;">
      <h1 style="display: inline-block;color: azure;width: 10%;height: 100%;text-align: center;padding: 0.5rem;">
        <span class="logo">
          <!-- <img src="@/assets/icon/logo.svg" alt=""> -->
        </span>
      </h1>
      <a-menu theme="dark" 
        mode="horizontal" 
        @select="RouterPush"
        :default-selected-keys="[userMenu]" 
        :style="{display:' inline-block',  width: '80%',lineHeight:'6rem'}">
        <a-menu-item :key="menu.menu" v-for="menu in menuList">
          {{menu.title}}
        </a-menu-item>
      </a-menu>
      <p class="User">
        用户
      </p>
    </a-layout-header>

    <a-layout-content class="Content">
      <div class="ViewCentent">
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      menuList:[{
        id:'1',
        menu:'/Index',
        title:'首页',
      },{
        id:'2',
        menu:'/Classification',
        title:'分类',
      },{
        id:'3',
        menu:'/Archive',
        title:'归档',
      }],
      userMenu:'Index'
    }
  },
  methods: {
    add(i) {
      if (i > 1) {
        i--
        console.log(i);
        this.add(i)
      } else {
        return ''
      }
    },
    //根据路由跳转页面
    RouterPush(e){
      console.log(e);
      this.$router.push(e.key)
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.userMenu='/'+this.$route.path.split('/')[1]
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  }
}
</script>
<style lang="less" scoped>
.ant-layout {
  height: 100%;
}
.Content{
  overflow: auto;
  height: 100%;
  background-image: url(@/assets/images/background3.jpg);
  background-size: 100%;
  color: white;
  .ViewCentent{
    padding: 2rem;
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 124rem;
    backdrop-filter: grayscale(20%) contrast(70%) brightness(60%);
  }
}


.Content::-webkit-scrollbar{
  width: 6px;
  height: 6px;
}
.Content::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-image: linear-gradient(#185876,#784d75 );
}
.Content::-webkit-scrollbar-track {
  background-image: linear-gradient(#0d3141,#422b41 );
  border-radius: 3px;
}



.ant-layout-header {
  height: 6rem;
  line-height: 6rem;
  display: flex;
}

.logo {
  display: flex;
  height: 5rem;
  width: 100%;
  border-radius: 0.5rem;
  background: silver;
  align-items: center;
  justify-content: center;
}

.User{
  display: flex;
  width: 10%;
  height: 4.5rem;
  background: silver;
  color: white;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
