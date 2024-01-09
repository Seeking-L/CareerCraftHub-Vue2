<template>
  <el-main>
    <el-row>
      <el-col :span="3">
        <el-card
          shadow="always"
          style="
            margin-left: 30%;
            text-align: center;
            line-height: 40px;
            height: 81px;
          "
        >
          {{ this.$route.params.type }}
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="always" style="margin-left: 10%; text-align: center">
          <el-select
            v-model="typeSearchContent"
            multiple
            placeholder="请选择"
            @change="typeSelect()"
          >
            <el-option
              v-for="item in types"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :span="14"></el-col>
    </el-row>
    <ul>
      <el-row
        v-for="(item, index) in this.showlist"
        :key="index"
        style="margin-top: 20px"
      >
        <el-col :span="5" style="margin-left: 30px">
          <el-card
            v-if="item[0]"
            :body-style="{ padding: '0px', height: '250px' }"
            style="cursor: pointer"
            @click.native="toVideoDetail(item[0].link)"
          >
            <img
              :src="'https:' + item[0].pic"
              class="image"
              style="height: 167px"
            />
            <div style="padding: 0px">
              <cyText :value="item[0].name" row="1" style="margin-left: 10px" />
              <br />
              <span style="margin-left: 20px">播放量：{{ item[0].num }}</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" style="margin-left: 30px">
          <el-card
            v-if="item[1]"
            :body-style="{ padding: '0px', height: '250px' }"
            style="cursor: pointer"
            @click.native="toVideoDetail(item[1].link)"
          >
            <img
              :src="'https:' + item[1].pic"
              class="image"
              style="height: 167px"
            />
            <div style="padding: 0px">
              <cyText :value="item[1].name" row="1" style="margin-left: 10px" />
              <br />
              <span style="margin-left: 20px">播放量：{{ item[1].num }}</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" style="margin-left: 30px">
          <el-card
            v-if="item[2]"
            :body-style="{ padding: '0px', height: '250px' }"
            style="cursor: pointer"
            @click.native="toVideoDetail(item[2].link)"
          >
            <img
              :src="'https:' + item[2].pic"
              class="image"
              style="height: 167px"
            />
            <div style="padding: 0px">
              <cyText :value="item[2].name" row="1" style="margin-left: 10px" />
              <br />
              <span style="margin-left: 20px">播放量：{{ item[2].num }}</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" style="margin-left: 30px">
          <el-card
            v-if="item[3]"
            :body-style="{ padding: '0px', height: '250px' }"
            style="cursor: pointer"
            @click.native="toVideoDetail(item[3].link)"
          >
            <img
              :src="'https:' + item[3].pic"
              class="image"
              style="height: 167px"
            />
            <div style="padding: 0px">
              <cyText :value="item[3].name" row="1" style="margin-left: 10px" />
              <br />
              <span style="margin-left: 20px">播放量：{{ item[3].num }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </ul>
    <pagination
      :listPageChange="listPageChange"
      :total="this.totalonshow"
      :pageSize="40"
    />
  </el-main>
</template>

<script>
import http from "../util/request";
import cyText from "../components/CyText.vue";
import pagination from "../components/Pagination.vue";

export default {
  name: "VideoList",
  components: { cyText, pagination },
  data() {
    return {
      typeSearchContent: [],
      types: [""],
      allvideos: [
        //当前大类下总共有的
        {
          id: "",
          name: "",
          link: "",
          num: "",
          time: "",
          pic: "",
          type: "",
        },
      ],
      listAfterSearch: [], //当前搜索框、小类下总共有的
      listAfterSearchAndPaginate: [
        //当前搜索框、小类、分页下总共有的
        {
          id: "",
          name: "",
          link: "",
          num: "",
          time: "",
          pic: "",
          type: "",
        },
      ],
    };
  },
  computed: {
    searchBoxContent() {
      return this.$store.state.searchBoxContent;
    },
    showlist() {
      //现在展现在页面上的
      const videos = [];
      for (var i = 0; i < this.listAfterSearchAndPaginate.length; i += 4) {
        // 获取当前元素和下三个元素
        var element1 = this.listAfterSearchAndPaginate[i];
        var element2 = this.listAfterSearchAndPaginate[i + 1];
        var element3 = this.listAfterSearchAndPaginate[i + 2];
        var element4 = this.listAfterSearchAndPaginate[i + 3];
        // 创建一个包含这四个元素的数组
        var subArray = [element1, element2, element3, element4];
        // 将这个数组添加到二维数组中
        videos.push(subArray);
      }
      return videos;
    },
    totalonshow() {
      return this.listAfterSearch.length;
    },
    pageNum() {
      return this.$store.state.pageNum;
    },
    // listAfterSearchAndPaginate(){
    //     return this.listAfterSearchAndPaginate.slice((this.pageNum - 1) * 40, this.pageNum * 40);
    // }
  },
  mounted() {
    http
      .get("/studyList", {
        params: {
          type: this.$route.params.type,
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.$store.commit("setPageNum", 1);
            this.allvideos = res.data.data.studyList;
            this.listAfterSearch = res.data.data.studyList;
            this.types = res.data.data.types;
            this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, 40);
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
      });
  },

  watch: {
    searchBoxContent: {
      handler: function (str) {
        console.log("VideoList searching------------------------" + str);
        var templist = this.allvideos.filter((item) => {
          return item.name.includes(str);
        });
        this.listAfterSearch = templist;
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, 40);
        this.$store.commit("setPageNum", 1);
      },
    },
  },
  methods: {
    toVideoDetail(url) {
      console.log("jump----" + url);
      window.location.href =
        "https:" + url + "?backurl=" + window.location.href;
    },
    listPageChange() {
      //传给pagination
      //pagination改变页面
      //pageSize:40
      let pageNum = this.$store.state.pageNum;
      this.listAfterSearchAndPaginate = this.allvideos.slice(
        (pageNum - 1) * 40,
        pageNum * 40
      );
    },
    typeSelect() {
      var str=this.searchBoxContent;
        var templist1 = this.allvideos.filter((item) => {
          return item.name.includes(str);
        });
        this.listAfterSearch = templist1;
      if (this.typeSearchContent.length == 0) {
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, 40);
        this.$store.commit("setPageNum", 1);
      } else {
        var templist2 = this.listAfterSearch.filter((item) => {
          for (let i = 0; i < this.typeSearchContent.length; i++) {
            if (item.type === this.typeSearchContent[i]) {
              return true;
            }
          }
          return false;
        });
        this.listAfterSearch = templist2;
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, 40);
        this.$store.commit("setPageNum", 1);
      }
      this.$message.error(this.listAfterSearch.length)
    },
  },
};
</script>

<style>
</style>