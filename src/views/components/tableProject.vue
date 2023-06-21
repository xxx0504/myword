<template>
  <div>
    <a-table
      v-if="columns.length>0"
      :columns="columns"
      :data-source="TableData"
      :loading="tableLoadingState"
      :total="total"
      :pagination="pagination"
      @change="tableChange"
      :rowKey="rowKey"
    >
      <!-- 列标题使用插槽进行自定义 -->
      <template
        v-for="column in columns"
        :slot="column.slots ? column.slots.title : ''"
      >
        <slot
          :name="column.slots ? column.slots.title : ''"
        ></slot>
        <!-- //绑定的scope可以在父组件中使用 -->
      </template>
      <!-- 列内容使用插槽进行自定义 -->
      <template
        v-for="column in columns"
        :slot="column.scopedSlots ? column.scopedSlots.customRender : ''"
        slot-scope="text, record"
      >
        <slot
          :name="column.scopedSlots ? column.scopedSlots.customRender : ''"
          v-bind:scope="record"
        ></slot>
        <!-- //绑定的scope可以在父组件中使用 -->
      </template>
    </a-table>
  </div>
</template>
<script>

export default {
  props:{
    columns:{
      type:Array,
      default:[],
    },
    TableData:{
      type:Array,
      default:[],
    },
    tableLoadingState:{
      type:Boolean,
      default:false,
    },
    total:{
      type:Number,
      default:0,
    },
    initChange:{
      type:Function,
    },
    rowKey:{
      type:String,
      default:()=>{{(record, index) => index}}
    },

  },
  data() {
    return {
      pagination: {
        total: this.$props.total,
        pageSize: 10, //每页中显示10条数据
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30", "50"], //每页中显示的数据
        showTotal: (total) => `共有 ${total} 条数据`, //分页中显示总的数据
      },
    };
  },
  mounted(){
    console.log(this.$props);
  },
  methods: {
    // 分页点击触发
    tableChange(pagina) {
      this.$emit('initChange',pagina)
    },
  },
};
</script>

<style>
</style>