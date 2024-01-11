<template>
  <el-card>
    <el-row v-for="post in myPosts" :key="post.id" style="margin-left: -10%">
      <el-col :span="20">
        <el-card
          @click.native="toDetail(post.id)"
          shadow="always"
          style="
            margin-left: 15%;
            margin-top: 20px;
            height: 81px;
            cursor: pointer;
          "
        >
          <span style="margin-top: -10px">{{ post.title }}</span
          ><br />
          <span style="text-align: end">{{ post.postTime }}</span>
        </el-card>
      </el-col>
      <el-col :span="4" />
    </el-row>
  </el-card>
</template>

<script>
import http from "../util/request";

export default {
  name: "MyPostList",
  data() {
    return {
      myPosts: [
        {
          id: 1,
          title: "",
          refer: "",
          userName: "",
          postTime: "",
          likeCount: 0,
          collectionCount: 0,
        },
      ],
    };
  },
  methods:{
    toDetail(value){
      this.$router.push({name: 'postDetail', params: {postId: value} })
    },
  },
  mounted() {
    http
      .get("/userPost", {
        params: {
          // key:value
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.myPosts = res.data.data;
            console.log(this.listAfterSearchAndPaginate);
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
};
</script>

<style scoped>
.el-card {
  /* background-color: #ffc0cb; */
  /* background-color: #ffe4e1; */
  background-color: #fffff5;
  border-radius: 12px;
}
</style>