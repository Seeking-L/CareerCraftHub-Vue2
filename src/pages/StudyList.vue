<template>
  <el-main>
    <div class="home">
      <div class="carousel-container">
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="item in pictureList" :key="item.link" >
            <img :src="'https:'+item.pic" alt="轮播图片" class="carousel-image" @click="toVideoDetail(item.link)"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <el-row>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toUniversitylesson"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 100px"
          />
          <div style="padding: 0px">
            <h3>大学课程</h3>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toCSlesson"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 100px"
          />
          <div style="padding: 0px">
            <h3>计算机课程</h3>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toKaoyanlesson"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 100px"
          />
          <div style="padding: 0px">
            <h3>考研课程</h3>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toLecture"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 100px"
          />
          <div style="padding: 0px">
            <h3>讲座系列</h3>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toForeignlanglesson"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 100px"
          />
          <div style="padding: 0px">
            <h3>外语课程</h3>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toQualifyingExaminationslesson"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 100px"
          />
          <div style="padding: 0px">
            <h3>资格考试</h3>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card
          :body-style="{ padding: '0px', height: '150px' }"
          style="margin-right: 20px; margin-top: 20px; cursor: pointer"
          @click.native="toOthers"
        >
          <img
            src="https://i0.hdslb.com/bfs/archive/008a61f9248c3245e145c9d90a5aee5a5a8ecf1f.png@672w_378h_1c_!web-search-common-cover"
            class="image"
            style="height: 150px"
          />
          <div style="padding: 0px">
            <h3>其他</h3>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import http from "../util/request";

export default {
  name: "StudyList",
  components: {},
  data() {
    return {
      //定义跑马灯的图片路径
      pictureList: [
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
  mounted() {
    http
      .get("/hotList", {})
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.pictureList=res.data.data;
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
  methods: {
    toVideoDetail(url) {
      console.log("jump----" + url);
      window.location.href =
        "https:" + url + "?backurl=" + window.location.href;
    },
    toUniversitylesson() {
      this.$router.push({name: 'lessonVideos', params: {type: "大学课程"} })
    },
    toCSlesson() {
      this.$router.push({name: 'lessonVideos', params: {type: "计算机课程"} })
    },
    toKaoyanlesson() {
      this.$router.push({name: 'lessonVideos', params: {type: "考研课程"} })
    },
    toLecture() {
      this.$router.push({name: 'lessonVideos', params: {type: "讲座系列"} })
    },
    toForeignlanglesson() {
      this.$router.push({name: 'lessonVideos', params: {type: "外语课程"} })
    },
    toQualifyingExaminationslesson() {
      this.$router.push({name: 'lessonVideos', params: {type: "资格考试"} })
    },
    toOthers() {
      this.$router.push({name: 'lessonVideos', params: {type: "其他课程"} })
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: -0.5pc; /* 避免与导航栏发生重叠 */
  display: flex;
  justify-content: center; /* 水平居中 */
}

.carousel-container {
  width: 80%; /* 调整跑马灯容器的宽度，根据实际需要调整 */
  margin-top: 1pc; /* 调整距离上方的边距，根据实际需要调整 */
}

.carousel-image {
  width: auto; /* 图片宽度占满容器 */
  height: 100%; /* 高度自适应 */
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>