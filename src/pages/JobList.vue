<template>
  <el-main>
    <el-row>
      <el-col :span="4">
        <el-card
          shadow="always"
          style="margin-left: 0%; text-align: center; margin-bottom: 3%"
        >
          <el-select
            v-model="typeSearchContent"
            placeholder="请选择"
            @change="typeSelect()"
          >
            <el-option
              v-for="(item, index) in types"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :span="17"></el-col>
    </el-row>
    <el-row style="margin-left: -2%">
      <el-col :span="12">
        <ul class="JobList-ul">
          <el-card
            v-for="item in listAfterSearchAndPaginate1"
            :key="item.jobItemId"
            @click.native="toJobDetail(item.companyLink)"
          >
            <el-row>
              <el-col :span="12" style="font-size: 18px; font-weight: bold">{{
                item.jobName
              }}</el-col
              ><el-col
                :span="6"
                :offset="6"
                style="font-size: 18px; font-weight: bold"
                >{{ item.monthlyPay }}</el-col
              >
            </el-row>
            <el-row style="font-size: 14px"> {{ item.jobCity }}</el-row>
            <el-row>
              <el-col :span="12" style="font-size: 16px">{{
                item.companyName
              }}</el-col
              ><el-col :span="6" :offset="6" style="font-size: 16px">{{
                item.type
              }}</el-col>
            </el-row>
          </el-card>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul class="JobList-ul">
          <el-card
            v-for="item in listAfterSearchAndPaginate2"
            :key="item.jobItemId"
            @click.native="toJobDetail(item.companyLink)"
          >
            <el-row>
              <el-col :span="12" style="font-size: 18px; font-weight: bold">{{
                item.jobName
              }}</el-col
              ><el-col
                :span="6"
                :offset="6"
                style="font-size: 18px; font-weight: bold"
                >{{ item.monthlyPay }}</el-col
              >
            </el-row>
            <el-row style="font-size: 14px"> {{ item.jobCity }}</el-row>
            <el-row>
              <el-col :span="12" style="font-size: 16px">{{
                item.companyName
              }}</el-col
              ><el-col :span="6" :offset="6" style="font-size: 16px">{{
                item.type
              }}</el-col>
            </el-row>
          </el-card>
        </ul>
      </el-col>
    </el-row>
    <Pagination
      :listPageChange="listPageChange"
      :total="this.total"
      :pageSize="20"
    />
  </el-main>
</template>

<script>
import http from "../util/request";
import Pagination from "../components/Pagination.vue";

export default {
  name: "JobList",
  components: { Pagination },
  data() {
    return {
      pageSize: 20,
      typeSearchContent: "",
      allList: [
        {
          id: 0,
          companyLink: "",
          companyName: "",
          jobCity: "",
          jobName: "",
          monthlyPay: "",
          type: "",
        },
      ], //所有数据
      types: [
        "办公",
        "餐饮",
        "房产",
        "服装",
        "广告",
        "护理",
        "家具",
        "检测",
        "建筑",
        "教育",
        "科研",
        "旅游",
        "汽车",
        "软件",
        "新能源",
        "冶炼",
        "影视",
        "硬件",
        "政府",
        "中介",
      ],
      total: 0, //总记录数
      listAfterSearchAndPaginate: [], //正在显示的数据
      listAfterSearch: [],
    };
  },
  methods: {
    typeSelect() {
      var str = this.searchBoxContent;
      var templist1 = this.allList.filter((item) => {
        return (
          item.jobName.includes(str) ||
          item.companyName.includes(str) ||
          item.jobCity.includes(str)
        );
      });
      this.listAfterSearch = templist1;
      if (this.typeSearchContent == null || this.typeSearchContent === "") {
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(
          0,
          this.pageSize
        );
        this.$store.commit("setPageNum", 1);
      } else {
        var templist2 = this.listAfterSearch.filter((item) => {
          return item.type == this.typeSearchContent;
        });
        this.listAfterSearch = templist2;
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(
          0,
          this.pageSize
        );
        this.$store.commit("setPageNum", 1);
      }
      this.total=this.listAfterSearch.length
    },
    toJobDetail(url) {
      console.log("jump----" + url);
      window.location.href = url + "?backurl=" + window.location.href;
    },
    listPageChange() {
      //传给pagination
      //pagination改变页面
      //pageSize:20
      let pageNum = this.$store.state.pageNum;
      this.listAfterSearchAndPaginate = this.listAfterSearch.slice(
        (pageNum - 1) * 20,
        pageNum * 20
      );
    },
  },
  computed: {
    searchBoxContent() {
      return this.$store.state.searchBoxContent;
    },
    listAfterSearchAndPaginate1() {
      const middleIndex = Math.ceil(this.listAfterSearchAndPaginate.length / 2);

      return this.listAfterSearchAndPaginate.slice(0, middleIndex);
    },
    listAfterSearchAndPaginate2() {
      const middleIndex = Math.ceil(this.listAfterSearchAndPaginate.length / 2);

      return this.listAfterSearchAndPaginate.slice(middleIndex);
    },
  },
  watch: {
    searchBoxContent: {
      handler: function (str) {
        console.log("JobList searching------------------------" + str);
        this.listAfterSearch = this.allList.filter((item) => {
          return (
            item.jobName.includes(str) ||
            item.companyName.includes(str) ||
            item.jobCity.includes(str)
          );
        });

        if (this.typeSearchContent == null || this.typeSearchContent === "") {
          this.listAfterSearchAndPaginate = this.listAfterSearch.slice(
            0,
            this.pageSize
          );
          this.$store.commit("setPageNum", 1);
        } else {
          var templist2 = this.listAfterSearch.filter((item) => {
            return item.type == this.typeSearchContent;
          });
          this.listAfterSearch = templist2;
          this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, 20);
          this.$store.commit("setPageNum", 1);
          this.total = this.listAfterSearch.length;
        }
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
            this.allList = res.data.data;
            this.total = this.allList.length;
            this.listAfterSearch = this.allList;
            this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, 20);

            console.log("allList------------------------");
            console.log(this.allList);
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
  margin-left: -2%;
  margin-top: -1%;
}
.el-card {
  margin-top: 1%;
  cursor: pointer;
}
.el-card {
  /* background-color: #ffc0cb; */
  /* background-color: #ffe4e1; */
  background-color: #fffff5;
  border-radius: 12px;
}
.el-card:hover {
  transform: scale(1.05);
}
</style>