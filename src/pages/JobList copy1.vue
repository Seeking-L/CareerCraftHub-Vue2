<template>
  <el-container>
    <el-main>
      <ul class="JobList-ul">
        <JobItem
          v-for="item in jobItems"
          :key="item.jobItemId"
          :id="item.jobItemId"
          :title="item.title"
          :description="item.description"
          @click.native="toJobDetail(item.url)"
        />
      </ul>
    </el-main>
    <el-aside width="400px">
      <SearchBox />
      <UserBlock />
    </el-aside>
  </el-container>
</template>

<script>
import JobItem from "../components/JobItem.vue";
import UserBlock from "../components/UserBlock.vue";
import SearchBox from "../components/SearchBox.vue";
import http from "../util/request";

export default {
  name: "JobList",
  components: { JobItem, UserBlock, SearchBox },
  data() {
    return {
      jobItems: [],
      offset: 0,
    };
  },
  methods: {
    toJobDetail(url) {
      console.log("jump----" + url);
      window.location.href =
        "http://" + url + "?backurl=" + window.location.href;
    },
    //获取当前可视范围的高度
    getClientHeight() {
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      }
      return clientHeight;
    },

    //获取文档完整的高度
    getScrollHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    },

    //获取当前滚动条的位置
    getScrollTop() {
      var scrollTop = 0;
      //window.pageYOffset = document.documentElement.scrollTop
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    //回调函数
    windowScroll() {
      //获取三个值
      var scrollTop = this.getScrollTop();
      var clientHeight = this.getClientHeight();
      var scrollHeight = this.getScrollHeight();
      //如果满足公式则，确实到底了
      if (scrollTop + clientHeight == scrollHeight) {
        //发送异步请求请求数据，同时携带offset并自增offset
        //noMore是自定义变量，如果是最后一批数据则以后都不加载
        if (!this.noMore) {
          //记得对offset进行自增
          this.offset += 10;
          http
            .get("/jobList", {
              params: {
                offset: this.offset,
              },
            })
            .then((res) => {
              this.jobItems = this.jobItems.concat(res.data.data);
              if (res.data.data.length < 10) {
                this.noMore = true;
              }
            });
        }
      }
    },
  },
  created() {
    http
      .get("/jobList", {
        params: {
          offset: this.offset,
        },
      })
      .then((res) => {
        console.log("JobList created. Response:");
        console.log(res);

        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.jobItems = res.data.data;

            console.log("jobItems------------------------");
            console.log(this.jobItems);
            console.log("jobItems------------------");

            // this.job_name = file.job_name;
            // this.job_description = file.job_description;
            // this.study_courses = file.study_courses;
            // this.required_skills = file.required_skills;
            // this.summary = file.summary;
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
        this.$router.go(-1);
      });
  },

  mounted() {
    window.addEventListener("scroll", this.windowScroll, true); //监听页面滚动
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll); //销毁滚动事件
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