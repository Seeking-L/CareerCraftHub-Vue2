<template>
  <el-container>
    <el-main>
      <ul class="JobList-ul">
        <JobItem
          v-for="item in itemsOnShow"
          :key="item.jobItemId"
          :id="item.jobItemId"
          :title="item.title"
          :description="item.description"
          @click.native="toJobDetail(item.url)"
        />
      </ul>
      <Pagination :listPageChange="listPageChange" :total="this.total" />
    </el-main>
    <el-aside width="400px">
      <SearchBox :listNowChange="listNowChange" />
      <UserBlock />
    </el-aside>
  </el-container>
</template>

<script>
import JobItem from "../components/JobItem.vue";
import UserBlock from "../components/UserBlock.vue";
import SearchBox from "../components/SearchBox.vue";
import http from "../util/request";
import Pagination from "../components/Pagination.vue";

export default {
  name: "JobList",
  components: { JobItem, UserBlock, SearchBox, Pagination },
  data() {
    return {
      jobItems: [], //所有数据
      total: 0, //总记录数
      itemsOnShow: [], //正在显示的数据
      listNow: [],
    };
  },
  methods: {
    toJobDetail(url) {
      console.log("jump----" + url);
      window.location.href =
        "http://" + url + "?backurl=" + window.location.href;
    },
    listPageChange(pageSize) {//传给pagination
      //pagination改变页面
      let pageNum = this.$store.state.pageNum;
      this.itemsOnShow = this.listNow.slice(
        (pageNum - 1) * pageSize,
        pageNum * pageSize
      );
    },
    listNowChange(str) {//传给searchbox
      console.log("searching------------------------" + str);
      this.listNow = this.jobItems.filter((item) => {
        return item.title.includes(str);
      });
      this.$store.commit("setPageNum", 1);
      this.itemsOnShow = this.listNow.slice(0, 10);
      this.total = this.listNow.length;
    },
  },
  created() {
    http
      .get("/jobList", {})
      .then((res) => {
        console.log("JobList created. Response:");
        console.log(res);

        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.jobItems = res.data.data;
            this.total = this.jobItems.length;
            this.listNow = this.jobItems;
            this.itemsOnShow = this.listNow.slice(0, 10);

            console.log("jobItems------------------------");
            console.log(this.jobItems);
            console.log("total------------------");
            console.log(this.total);
          } else {
            this.$message.error(res.data.message);
          }
        } else {
          this.$message.error(res.error);
          console.log(res.error);
        }
      })
      .catch((error) => {
        // 处理错误情况
        this.$message.error(error);
        console.log(error);
        // this.$router.go(-1);
      });
  },
};
</script>

<style scoped>
.JobList-ul {
  /*与页面左边界的距离 */
  margin-left: 5%;
  margin-top: -1%;
}
</style>