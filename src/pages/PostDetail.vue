<template>
  <el-main>
    <el-col :span="16" :offset="4">
      <el-card>
        <el-row>
          <h4>{{ this.postType }}{{ this.postDetails.title }}</h4>
        </el-row>
        <el-row>
          <span>{{ this.postDetails.content }}</span>
        </el-row>
        <el-divider />
        <el-row>
          <el-col :span="2" :offset="18"
            ><cyText
              value="发布者:"
              :row="1"
              style="margin-top: 20%; margin-left: 30%"
            />
          </el-col>
          <!-- <el-col :span="2">
            <img :src="this.postAvatar" class="postAvatar"
          /></el-col> -->
          <el-col :span="4"
            ><cyText
              :value="this.postDetails.userName"
              :row="1"
              style="margin-top: 10%"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :offset="17"
            ><cyText :value="this.postDetails.postTime" :row="1" />
          </el-col>
          <!-- <el-col :span="2">
            <img :src="this.postAvatar" class="postAvatar"
          /></el-col> -->
        </el-row>

        <h4>评论</h4>
        <el-row v-for="comment in comments" :key="comment.id">
          <el-row><h5>{{ comment.userName }}:</h5></el-row>
          <el-row><el-col :span="23" :offset="1"><span>{{ comment.content }}</span></el-col></el-row>
        </el-row>
        <el-divider />
        <h4>说点什么吧：</h4>
        <el-form ref="form" :model="form" style="width: 60%; margin-left: 5%">
          <el-form-item>
            <el-input
              type="textarea"
              v-model="form.content"
              :autosize="{ minRows: 5, maxRows: 50 }"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-main>
</template>

<script>
import http from "../util/request";
import cyText from "../components/CyText.vue";

export default {
  name: "PostDetail",
  data() {
    return {
      postAvatar: require("../assets/postAvatar.png"),
      comments: [
        {
          id: 1,
          title: "",
          refer: "",
          content: "",
          userName: "",
          postTime: "",
          onShow: "",
          likeCount: 0,
          collectionCount: 0,
          commentable: true,
        },
      ],
      postDetails: {
        id: 1,
        title: "",
        refer: "",
        content: "",
        userName: "",
        postTime: "",
        onShow: "",
        likeCount: 0,
        collectionCount: 0,
        commentable: true,
      },
      referPostpostDetails: {
        id: 1,
        title: "",
        refer: "",
        content: "",
        userName: "",
        postTime: "",
        onShow: "",
        likeCount: 0,
        collectionCount: 0,
        commentable: true,
      },
      form: {
        refer: 1,
        title: "",
        content: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.form.refer = this.postDetails.id; //评论的refer是父贴子的id
      this.form.title = "【" + "Reply:" + "】" + this.postDetails.title; //评论的title是父贴子的title
      http
        .post("/addPost", this.form)
        .then((res) => {
          if (res.status >= 200 && res.status <= 300) {
            if (res.data.resultCode === 1) {
              this.$message.success("发布成功");
              // this.$router.push({
              //   path: "/",
              // });
            } else {
              this.$message.warning(res.data.data.message);
            }
          } else {
            this.$message.error("error");
            console.log(res.error);
          }
        })
        .catch((error) => {
          // 处理错误情况
          this.$message.error(error);
        });
      location.reload();
    },
  },
  components: { cyText },
  computed: {
    postType: function () {
      if (this.postDetails.refer <= 5) {
        let types = [
          "全部",
          "大学课程",
          "生活相关",
          "考研保研",
          "工作",
          "其他",
        ];
        return "【" + types[this.postDetails.refer + 1] + "】";
      } else {
        return "";
      }
    },
  },
  mounted() {
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
  },
};
</script>

<style scoped>
.postAvatar {
  max-width: 50px; /* 设置最大宽度，可以根据需要进行调整 */
  max-height: 50px; /* 设置最大高度，可以根据需要进行调整 */
  border-radius: 50%; /* 使图像呈圆形 */
  margin-left: 20%;
}
</style>