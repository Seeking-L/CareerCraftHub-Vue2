<template>
  <div class="pagination">
    <el-pagination
      layout=" prev, pager, next"
      :current-page="this.$store.state.pageNum"
      :total="this.total"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script>
export default {
  name: "PagiNation",
  data() {
    return {
      tablePage: {
        //pageNum: 1, // 第几页
        pageSize: 10, // 每页多少条
      },
    };
  },
  props: {
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
      this.listPageChange(this.tablePage.pageSize);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style>
.pagination {
  margin-left: 24%;
}
</style>