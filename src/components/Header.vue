<template>
  <div id="main_header">
    <header>
      <div class="navbar-left">
        <i class="iconfonthome icon-home" @click="toHome"></i>
      </div>
      <SearchBox v-if="showSearchBox" style="margin-left:10%"/>
      <div class="navbar-right">
        <el-tooltip content="论坛" placement="bottom" effect="light">
        <i class="iconfontstats icon-pingjia" @click="toPost" style="font-size: 35px;"></i></el-tooltip>
        <el-tooltip content="统计" placement="bottom" effect="light">
        <i class="iconfont icon-stats" @click="toStats"></i></el-tooltip>
        <el-tooltip content="工作" placement="bottom" effect="light">
        <i class="iconfont icon-job" @click="toJob"></i></el-tooltip>
        <el-tooltip content="学习" placement="bottom" effect="light">
        <i class="iconfont icon-study" @click="toStudy"></i></el-tooltip>
        <el-tooltip content="试题" placement="bottom" effect="light">
        <i class="iconfont icon-test" @click="toTest"></i></el-tooltip>
        <el-tooltip content="分析" placement="bottom" effect="light">
        <i class="iconfonttest icon-jurassic_report-analyze" @click="toAnalyse"></i></el-tooltip>
        <authImg
          :imgUrl="avatarSrc"
          :authToken="tokenStr"
          :ifshowMenu="true"
          alt="Image"
          @click.native="toPersonalPage"
          style="margin-right: 50px"
        ></authImg>
      </div>
    </header>
  </div>
</template>


<script>
import authImg from "./AuthImg.vue";
import SearchBox from "./SearchBox.vue";
export default {
  name: "IndexHeader",
  components: { authImg, SearchBox },
  data() {
    return {
      userName: "",
      userPhone: "",
      userId: "",
      password: "",
      avatar: "",
    };
  },
  computed: {
    avatarSrc: function () {
      const prefix = "http://" + this.$store.state.IP + ":8080/";
      if (!this.avatar) return prefix + "statics/defaultAvatar.jpg";
      return prefix + "Users/" + this.userId + "/avatar/" + this.avatar;
    },
    tokenStr: function () {
      return localStorage.getItem("token");
    },
    showSearchBox() {
      return (
        this.$route.path === "/mainpage/jobs" ||
        this.$route.path === "/mainpage/post" ||
        this.$route.path.search("/mainpage/lessonVideos") !== -1
      );
    },
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/mainpage/home",
      });
    },
    toPost(){
      this.$router.push({
        path: "/mainpage/post",
      });
    },
    toStats() {
      this.$router.push({
        path: "/mainpage/stats",
      });
    },
    toJob() {
      this.$router.push({
        path: "/mainpage/jobs",
      });
    },
    toStudy() {
      this.$router.push({
        path: "/mainpage/study",
      });
    },
    toTest() {
      this.$router.push({
        path: "/mainpage/test",
      });
    },
    toPersonalPage() {
      this.$router.push({
        path: "/mainpage/personal",
      });
    },
    toAnalyse(){
      this.$router.push({
        path: "/mainpage/analyse",
      });
    }
  },
  created() {
    const userStr = localStorage.getItem("user");
    if (!userStr) this.$router.push("/login"); //do something
    const user = JSON.parse(userStr);
    this.userName = user.userName;
    this.userId = user.userId;
    this.userPhone = user.userPhone;
    this.password = user.password;
    this.avatar = user.avatar;
  },
};
</script>

<style scoped>
/* 导航标签的样式 */
#main_header {
  display: flex;
  justify-content: center; /* 将整个导航栏居中 */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%; /* 调整左侧图标距离左边的间距 */
  padding-right: 5%; /* 调整右侧图标距离右边的间距 */
  height: 3pc;
  position: fixed;
  top: 0;
  width: 80%; /* 或者根据需要设置宽度 */
  z-index: 100;
  box-shadow: 0pt 0.052083333in 11.25pt -5.25pt rgba(0, 0, 0, 0.1);
  
}

.navbar-left i {
  font-size: 30px;
  /* color: #515151; */
  color: #80ffe2;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-right i {
  font-size: 30px;
  /* color: #515151; */
  color: #80ffe2;
  margin-left: 20px; /* 调整图标之间的间距 */
}

.navbar-right i:last-child {
  margin-right: 100px; /* 调整最后一个图标的右侧间距 */
}

.navbar-left.nav-icons {
  display: flex;
  align-items: center;
}



.navbar-right.nav-links {
  display: flex;
  align-items: center;
}

.navbar-right.nav-links router-link {
  height: 100%;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-size: 20px;
}

/* 导航标签的样式 */
.navbar-left.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-left.nav-links a {
  height: 100%;
  padding: 10px 20px; /* 设置导航标签的内边距，调整大小适应内容 */
  text-decoration: none; /* 去除链接下划线 */
  color: #333; /* 设置导航标签的文字颜色 */
  font-size: 20px;
}

/* 导航标签悬停效果 */
.navbar-left.nav-links a:hover {
  height: 100%;
  background-color: #ddd; /* 设置鼠标悬停时的背景色 */
}

.active-link {
  height: 100%;
  background-color: #ddd; /* 设置鼠标悬停时的背景色 */
}

header {
  font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  background-color: #ff80bf; /*设置鼠标悬停时的背景色*/
  /* 17dced; */
  /* ffffff */
  font-size: 15px;
  font-weight: normal;
  line-height: 1.2;
  -webkit-text-size-adjust: 100%;
  color: #6d6d6d;
  /* --uk-breakpoint-s: 640px;
  --uk-breakpoint-m: 960px;
  --uk-breakpoint-l: 1200px;
  --uk-breakpoint-xl: 1600px; */
  /* --uk-leader-fill-content: .; */
  height: 3pc; /*header高度 */
  display: flex;
  align-items: center;
  padding-left: 5%; /* 字体左边距 */
  padding-bottom: 0pt;
  padding-right: 0%;
  padding-top: 0pt;
  /* position: relative; */
  /* position: sticky; */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; /*可以调整z-index，确保导航栏在其他元素之上*/
  box-shadow: 0pt 0.052083333in 11.25pt -5.25pt rgba(0, 0, 0, 0.1);
}


</style>