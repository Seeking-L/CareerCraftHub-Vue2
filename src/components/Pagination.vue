<template>
    <el-pagination
      layout=" prev, pager, next"
      :current-page="this.$store.state.pageNum"
      :total="this.total"
      :page-size="this.pageSize"
      @current-change="handlePageChange"
    />
</template>

<script>
export default {
  name: "PagiNation",
  data() {
    return {
    };
  },
  props: {
    pageSize:{
      type:Number,
      require:true,
      default:10,
    },
    listPageChange: {
      //父组件JobList的换页方法
      type: Function,
      require: true,
      default: null,
    },
    total: Number, // 总记录数
  },
  methods: {
    handlePageChange(currentPage) {
      this.$store.commit("setPageNum", currentPage); // 在此刷新数据
      this.listPageChange(this.pageSize);
      // 滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 可以选择 'auto' 或者 'smooth'
      });
    },
  },
};
</script>

<style>
.pagination {
  margin-left: 36%;
}

.el-pagination{
  justify-content: center;
  margin-left: 35%;
  margin-top: 1%;
}
.el-pagination .number,
.el-pagination .el-icon{
  background:transparent;
}

.el-pagination button,
.el-pagination button:disabled,
.el-pagination .button.btn-pre,
.el-pagination .button.btn-next{
  background-color: #f1e9d4;
}
</style>