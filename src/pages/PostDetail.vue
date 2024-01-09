<template>
  <el-card>
    <span>{{this.postDetails}}</span>
    <hr/>
    <span>{{this.comments}}</span>
  </el-card>
</template>

<script>
import http from "../util/request";

export default {
    name:"PostDetail",
    data(){
        return{
            comments:[{
                id:1,
                title:"",
                refer:"",
                content:"",
                userName:"",
                postTime:"",
                onShow:"",
                likeCount:0,
                collectionCount:0,
                commentable:true,
            },],
            postDetails:{
                id:1,
                title:"",
                refer:"",
                content:"",
                userName:"",
                postTime:"",
                onShow:"",
                likeCount:0,
                collectionCount:0,
                commentable:true,
            }
        }
    },
    mounted(){
        http
      .get("/postDetails", {
        params: {
           postId: this.$route.params.postId,
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.comments = res.data.data.comments;
            this.postDetails = res.data.data.postDetails;
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
    }
}
</script>

<style>

</style>