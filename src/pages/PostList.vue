<template>
  <el-main>
    <el-row>
      <el-col :span="7">
        <el-card shadow="always" style="margin-left: 43%; text-align: center">
          <el-select
            v-model="typeSearchContent"
            placeholder="请选择"
            @change="typeSelect()"
          >
            <el-option
              v-for="item in types"
              :key="item.id"
              :label="item.type"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-card>
      </el-col>
      <el-col :span="17"></el-col>
    </el-row>
      <el-row v-for="post in listAfterSearchAndPaginate"
      :key="post.id"
      >
        <el-col :span="20">
          <el-card 
          @click.native="toDetail(post.id)"
          shadow="always"
          style="
            margin-left: 15%;
            margin-top:20px;
            
            height: 81px;
            cursor:pointer
          "> 
          <span style="margin-top:-10px">{{post.title}}</span><br/>
          <span style="text-align:end">{{post.postTime}}</span>
          </el-card>
        </el-col>
        <el-col :span="4" />
      </el-row>
    <Pagination
      :listPageChange="listPageChange"
      :total="this.total"
      :pageSize="this.pageSize"
      style="margin-left:40%"
    />
    <el-button class="float-button" circle icon="el-icon-plus" @click="openSendPost"></el-button>
    <el-dialog :visible.sync="dialogTableVisible">
    <SendPost :closeDialog="closeDialog"/>
    </el-dialog>
  </el-main>
</template>

<script>
import http from "../util/request";
import Pagination from "../components/Pagination.vue";
import SendPost from "../components/SendPost.vue";

export default {
  name: "PostList",
  components: { Pagination ,SendPost},
  data() {
    return {
      pageSize:5,
      allList: [{
        id:1,
        title:"",
        refer:"",
        userName:"",
        postTime:"",
        likeCount:0,
        collectionCount:0,
      }],
      listAfterSearch: [],
      listAfterSearchAndPaginate: [],
      dialogTableVisible:false,
      types: [
        {
          id:0,
          type:"全部"
        },
        {
          id: 1,
          type: "大学课程",
        },
        {
          id: 2,
          type: "生活相关",
        },
        {
          id: 3,
          type: "考研保研",
        },
        {
          id: 4,
          type: "工作",
        },
        {
          id: 5,
          type: "其他",
        },
      ],
      typeSearchContent:0
    };
  },
  computed: {
    searchBoxContent() {
      return this.$store.state.searchBoxContent;
    },
    total(){
      return this.listAfterSearch.length
    }
  },
  watch: {
    searchBoxContent: {
      handler: function (str) {
        console.log("PostList searching------------------------" + str);
        var templist1 = this.allList.filter((item) => {
          return item.title.includes(str);
        });
        this.listAfterSearch = templist1;
      if (this.typeSearchContent == 0) {
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, this.pageSize);
        this.$store.commit("setPageNum", 1);
      } else {
        var templist2 = this.listAfterSearch.filter((item) => {
          return item.refer === this.typeSearchContent;
        });
        this.listAfterSearch = templist2;
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, this.pageSize);
        this.$store.commit("setPageNum", 1);
      }
      this.total=this.listAfterSearch.length;
      },
    },
  },
  mounted(){
    http
      .get("/postList", {
        params: {
          // type: this.$route.params.type,

        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.$store.commit("setPageNum", 1);
            this.allList = res.data.data;
            this.listAfterSearch = res.data.data;
            this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, this.pageSize);
            console.log("aaaaaaaaaaaaaaaaaaaa")
            console.log(this.listAfterSearchAndPaginate)
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
  methods:{
    closeDialog(){
      this.dialogTableVisible=false;
    },
    openSendPost(){
      this.dialogTableVisible=true;
    },
    listPageChange(){
      //传给pagination
      //pagination改变页面
      //pageSize:40
      let pageNum = this.$store.state.pageNum;
      this.listAfterSearchAndPaginate = this.listAfterSearch.slice(
        (pageNum - 1) * this.pageSize,
        pageNum * this.pageSize
      );
    },
    toDetail(value){
      this.$router.push({name: 'postDetail', params: {postId: value} })
    },
    typeSelect() {
      var str=this.searchBoxContent;
        var templist1 = this.allList.filter((item) => {
          return item.title.includes(str);
        });
        this.listAfterSearch = templist1;
      if (this.typeSearchContent == 0) {
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, this.pageSize);
        this.$store.commit("setPageNum", 1);
      } else {
        var templist2 = this.listAfterSearch.filter((item) => {
          return item.refer === this.typeSearchContent;
        });
        this.listAfterSearch = templist2;
        this.listAfterSearchAndPaginate = this.listAfterSearch.slice(0, this.pageSize);
        this.$store.commit("setPageNum", 1);
      }
      this.total=this.listAfterSearch.length;
    },
  }
};
</script>

<style scoped>
.float-button {
  /* 按钮大小 */
  font-size: 20px;
  /* 悬空 */
  position: fixed;
  bottom: 100px;
  right: 100px;
  /* 边框 */
   border: 2px solid #555555;
}
.el-card {
  /* background-color: #ffc0cb; */
  /* background-color: #ffe4e1; */
  background-color: #fffff5;
  border-radius: 12px;
}
</style>