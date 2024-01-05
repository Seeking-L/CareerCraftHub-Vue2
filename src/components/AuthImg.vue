<template>
  <el-popover
    placement="bottom-start"
    width="150"
    trigger="hover"
    :open-delay=500
    style="text-align: center !important"
  >
    <h3 style="text-align: center !important" v-show="this.ifshowMenu">{{ this.username }}</h3>
    <UpLoadAvatar v-show="!this.ifshowMenu" />
    <el-menu class="el-menu-vertical-demo" v-show="this.ifshowMenu">
      <el-menu-item
        index="2"
        @click.native="toPersonalPage"
        v-show="hasSignedin"
      >
        <span slot="title">个人主页</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="3" @click.native="logout" v-show="hasSignedin">
        <span slot="title">退出登录</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="4" @click.native="tologin" v-show="!hasSignedin">
        <span slot="title">去登陆</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
    </el-menu>
    <img ref="myImage" :alt="alt" class="auth-img" slot="reference" />
  </el-popover>
</template>

<script>
import UpLoadAvatar from './UpLoadAvatar.vue';
export default {
  name: "ImgVue",
  components:{UpLoadAvatar},
  props: {
    imgUrl: String,
    authToken: String,
    alt: String,
    ifshowMenu: Boolean
  },
  computed: {
    username: function () {
      let user = JSON.parse(this.$store.state.user);
      if (typeof user.userName == "string" && user.userName.length > 0)
        return user.userName;
      else return "未登录";
    },
    hasSignedin: function () {
      //是否登录,控制弹出菜单的内容
      let user = JSON.parse(this.$store.state.user);
      if (!user) return false;
      else return true;
    },
  },
  created() {
    console.log("AuthImg is created------------------------")
    this.loadImage();
  },
  mounted() {
    console.log("AuthImg is created------------------------")
    this.loadImage();
  },
  methods: {
    loadImage() {
      const imageUrl = this.imgUrl;

      fetch(imageUrl, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("avatar: Network response was not ok");
          }
          return response.blob();
        })
        .then((blob) => {
          const imageUrl = URL.createObjectURL(blob);
          // 将imageUrl设置到<img>标签的src属性中
          this.$refs.myImage.src = imageUrl;
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    },
    toPersonalPage() {
      this.$router.push({
        path: "/mainpage/personal",
      });
    },
    logout() {
      this.$store.commit("logout");
      location.reload();
      this.$router.push({
        path: "/login",
      });
    },
    tologin() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<!-- 在 AuthImg.vue 组件中添加样式 -->
<style scoped>
.auth-img {
  max-width: 50px; /* 设置最大宽度，可以根据需要进行调整 */
  max-height: 50px; /* 设置最大高度，可以根据需要进行调整 */
  border-radius: 50%; /* 使图像呈圆形 */
  margin-left: 0px;
  cursor: pointer; /* 添加指针样式，以表示可点击 */
  transition: transform 0.3s ease; /*平滑变大*/
}

/* .auth-img:hover {
  transition-delay: 0.3s; /* 添加 0.5s 的延迟 
  transform: scale(2) translate(-10px, 10px); /* 添加鼠标悬停时的缩放效果，可以根据需要进行调整 
}
.auth-img:not(:hover) {
  transition-delay: 0.3s; /* 恢复原样时仍然保持 0.3 秒的延迟 
} */

.auth-img:hover {
  transition-delay: 0.3s; /* 添加 0.5s 的延迟 */
  transform: scale(1.1); /* 添加鼠标悬停时的缩放效果，可以根据需要进行调整 */
}
.auth-img:not(:hover) {
  transition-delay: 0.3s; /* 恢复原样时仍然保持 0.3 秒的延迟 */
}

</style>
