<!--  -->
<template>
  <div class="home">
    <div class="homeView">
      <div class="back"></div>
    </div>
    <div style="height: 1000px">
      <!-- //todo -->
      <div class="masked" ref="text">
        <p style="font-size: 7rem;font-weight: 900;">这是一段</p>
        <p style="font-size: 7rem;font-weight: 900;">可选文字</p>
      </div>
      <button @click="canvsState=!canvsState">{{canvsState?'收起':'展示'}}</button>
      <Transition name="slide-fade">
        <div class="canvs" v-show="canvsState">
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>12312313123</p>
          <p>1212</p>
        </div>
      </Transition>
      <div style="height: 20px;width: 200px;background-color: aquamarine;">
      </div>
      <div class="content">
        <div class="box1">
            
        </div>
        <div class="box2">
            
        </div>
      </div>
    <button class="button-86" role="button" @click="showViewText">Button 86</button>
    <button class="buttons">按钮</button>

    </div>
    <div style="
          height: 500px;
          width: 500px;
          background-image: url(https://images.unsplash.com/photo-1571235854001-2c64e3fdd06a?w=1920&ixid=MnwxODQyNDF8MHwxfGNvbGxlY3Rpb258ODM0fDE0NTk5NjF8fHx8fDJ8fDE2NTgyOTc2ODI&q=70&fm=jpg&crop=entropy&ixlib=b-1.2.1&cs=srgb);
        ">
      <div style="height: 100%; width: 100%">
        <div style="height: 50%; width: 50%; backdrop-filter: blur(10px)"></div>
      </div>
      
    </div>
    <a-date-picker :format="dateFormatYear" :open="yearShowOne" @openChange="openChangeOne" @panelChange="panelChangeOne"
      mode="year" placeholder="please.select.a.year" type="date" v-model="year" />
    {{ year }}
    <div class="yinying">
      <button class="button-82-pushable" role="button">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">
          确认
        </span>
      </button>
    </div>
    <!-- HTML !-->
    <!-- HTML !-->



  </div>
</template>

<script>
import moment from "moment";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    className: "drag-visible",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    index: 0,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    index: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    index: 2,
  },
];

export default {
  data() {
    return {
      data,
      columns,
      dateFormatYear: "YYYY",
      yearShowOne: false,
      year: moment(moment().format('yyyy')),
      canvsState:true
    };
  },
  methods: {
    // 拖动排序
    customRow(record, index) {
      return {
        props: {
          // draggable: 'true'
        },
        style: {
          cursor: "pointer",
        },
        on: {
          // 鼠标移入
          mouseenter: (event) => {
            // 兼容IE
            var ev = event || window.event;
            ev.target.draggable = true;
          },
          // 开始拖拽
          dragstart: (event) => {
            // 兼容IE
            var ev = event || window.event;
            // 阻止冒泡
            ev.stopPropagation();
            // 得到源目标数据
            this.sourceObj = record;
          },
          // 拖动元素经过的元素
          dragover: (event) => {
            // 兼容 IE
            var ev = event || window.event;
            // 阻止默认行为
            ev.preventDefault();
          },
          // 鼠标松开
          drop: (event) => {
            // 兼容IE
            var ev = event || window.event;
            // 阻止冒泡
            ev.stopPropagation();
            // 得到目标数据
            this.targetObj = record;
            console.log(this.targetObj, index);
            console.log(this.sourceObj, index);
          },
        },
      };
    },
    // 弹出日历和关闭日历的回调
    openChangeOne(status) {
      // status是打开或关闭的状态
      if (status) {
        this.yearShowOne = true;
      } else {
        this.yearShowOne = false;
      }
    },
    // 得到业务年度的值
    panelChangeOne(value) {
      console.log(value);
      this.year = value;
      this.yearShowOne = false;
    },
    showViewText(){
      this.$refs.text.scrollIntoView({behavior:'smooth'})
    },
    //moment
    moment,
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() { 
    window.onscroll = function() {
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log("滚动距离" + scrollTop);
    }
  },
  computed: {
    // YearDate(){ return moment(moment(this.year).format('yyyy'))}
  },
};
</script>

<style lang="less" scoped>

/* css融合效果 */
.content{
  margin: 20px;
  padding: 30px;
  background: #28282d;
  filter: contrast(20);
  display: flex;
}
.box1{
  height: 100px;
  width: 100px;
  border-radius: 50px;  
  background: white;
  filter: blur(10px);
  animation: box1 1s ease-in-out infinite alternate;
}
.box2{
  height: 100px;
  width: 100px;
  border-radius: 50px;  
  background: white;
  filter: blur(10px);
  animation: box2 1s ease-in-out infinite alternate;
}

@keyframes box1 {
  from{transform: translateX(25px);}
  to{transform: translateX(-25px);}
}
@keyframes box2 {
  from{transform: translateX(-25px);}
  to{transform: translateX(25px);}
}


.canvs{
  width: 200px;
  background: white;
}
/* vue内置动画组件动画 */
.slide-fade-leave-active,.slide-fade-enter-active {
  transition: all 3s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}





.masked{
    background: url(@/assets/images/infinity-1617040.jpg);
    background-size: 200% 200%;
    color: transparent;
    animation: backClor 2s infinite alternate;
    -webkit-background-clip:text;
}

/* @import url(); 引入css类 */
.homeView {
  height: 300px;
  width: 500px;
  background: red;
  overflow: hidden;
  animation: mymove 4s linear;
}

.homeView:hover {
  animation: mymove 4s linear ;
}

.back {
  height: 300px;
  background-image: linear-gradient(141deg,
      #ffa2a2 0%,
      #fad15e 25%,
      #67f8b4 51%,
      #75c43d 75%,
      #29a9ff 100%);
  background-size: 1000% 100%;
  /* background-position: -100% 0%; */
  animation: backClor 10s infinite;
}

@keyframes mymove {
  0% {
    margin-left: 0px;
  }

  50% {
    margin-left: 200px;
  }

  100% {
    margin-left: 0px;
  }
}

@keyframes backClor {
  0% {
    background-position: 100% 50%;
  }

  25% {
    background-position: 75% 50%;
  }

  50% {
    background-position: 50% 50%;
  }

  75% {
    background-position: 25% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.yinying {
  height: 200px;
  width: 200px;
  border-radius: 35px;
  background: #ededed;
  box-shadow: inset -5px 5px 10px #8e8e8e,
    inset 5px -5px 10px #ffffff;
}


.buttons{
  width: 200px;
  font-size: 2rem;
  background: #28282d;
  padding: 20px;
  border: none;
  border-radius: 10px;
  text-align: 100px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.buttons::after,
.buttons::before{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .3s;
}
.buttons::after{
  transform: translate(10px,10px);
  width:50px ;
  height: 50px;
  background: #76767615;
  backdrop-filter: blur(5px);
  // -webkit-backdrop-filter: blur(5px);
  border-radius: 45px;
}
.buttons:hover::after{
  transform: translate(0px,0px);
  width:100%;
  height: 110%;
  background: #bababa15;
  border-radius: 10px;
}
.buttons::before{
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}
.buttons:hover::before {
  transform: translate(5%, 10%);
  width: 110%;
  height: 110%;
}
.buttons:active::after{
  transform: translate(0,8%);
}



.button-86 {
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

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .3s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-86:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}









/* 立体按钮 */
.button-82-pushable {
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

.button-82-shadow {
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
    transform 600ms cubic-bezier(.3, .7, .4, 1);
}

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%);
}

.button-82-front {
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
    transform 600ms cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-82-pushable:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(-6px);
  transition:
    transform 250ms cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(4px);
  transition:
    transform 250ms cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>