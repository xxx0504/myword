<template>
  <div>
    <h1>about</h1>
    <table-project :columns="columns" :TableData="data" :tableLoadingState="tableLoadingState" :total="total" @initChange="getList">
      <template #btn>
        <span ><a-icon type="smile-o" /> Name</span>
      </template>
      <template #customTitle>
        <span><a-icon type="smile-o" /> 名字</span>
      </template>
    </table-project>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    // scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "btn" },
  },
];
const data1 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
import tableProject from '@/views/components/tableProject.vue'
export default {
  components: {
    tableProject,
  },
  data(){
    return{
      columns,
      data1,
      data:[],
      tableLoadingState:false,
      total:20,
    }
  },
  mounted(){
    console.log(this._.chunk([1,2,3,4,5,6,7,8],2));
  },
  methods:{
    getList(iquery){
      console.log(iquery);
      this.data=data1
    }
  }
}
</script>

<style>

</style>