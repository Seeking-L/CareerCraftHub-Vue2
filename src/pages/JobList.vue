<template>
    <el-main>
      <el-row>
        <el-col :span="12">
          <ul class="JobList-ul">
            <JobItem
              v-for="item in itemsOnShow1"
              :key="item.jobItemId"
              :id="item.jobItemId"
              :title="item.title"
              :description="item.description"
              @click.native="toJobDetail(item.url)"
            />
          </ul>
        </el-col>
        <el-col :span="12">
          <ul class="JobList-ul">
            <JobItem
              v-for="item in itemsOnShow2"
              :key="item.jobItemId"
              :id="item.jobItemId"
              :title="item.title"
              :description="item.description"
              @click.native="toJobDetail(item.url)"
            />
          </ul>
        </el-col>
      </el-row>
      <Pagination :listPageChange="listPageChange" :total="this.total" :pageSize="10"/>
    </el-main>
</template>

<script>
import JobItem from "../components/JobItem.vue";
import http from "../util/request";
import Pagination from "../components/Pagination.vue";

export default {
  name: "JobList",
  components: { JobItem, Pagination },
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
    listPageChange() {
      //传给pagination
      //pagination改变页面
      //pageSize:10
      let pageNum = this.$store.state.pageNum;
      this.itemsOnShow = this.listNow.slice(
        (pageNum - 1) * 10,
        pageNum * 10
      );
    },
  },
  computed: {
    searchBoxContent() {
      return this.$store.state.searchBoxContent;
    },
    itemsOnShow1() {
      const middleIndex = Math.ceil(this.itemsOnShow.length / 2);

      return this.itemsOnShow.slice(0, middleIndex);
    },
    itemsOnShow2() {
      const middleIndex = Math.ceil(this.itemsOnShow.length / 2);

      return this.itemsOnShow.slice(middleIndex);
    },
  },
  watch: {
    searchBoxContent: {
      handler: function (str) {
        console.log("JobList searching------------------------" + str);
        this.listNow = this.jobItems.filter((item) => {
          return item.title.includes(str);
        });
        this.$store.commit("setPageNum", 1);
        this.itemsOnShow = this.listNow.slice(0, 10);
        this.total = this.listNow.length;
      },
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
  margin-left: 3%;
  margin-top: -1%;
}
</style>