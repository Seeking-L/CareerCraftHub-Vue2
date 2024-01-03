<!--主页中的用户信息模块-->
<template>
  <div class="rectangle-module">
    <!-- <img :src=avatarSrc alt="Image" @click="pushShow" /> -->
    <!-- <Img :imgUrl="avatarSrc" :authToken="tokenStr" @click="pushShow" /> -->
    <authImg :imgUrl="avatarSrc" :authToken="tokenStr" alt="Image" @click.native="pushShow"></authImg>
    <p>Name: {{ userName }}</p>
    <p>Id: {{ userId }}</p>
    <p>Phone: {{ userPhone }}</p>
    <p>password: {{ password }}</p>
  </div>
</template>

<script>
import authImg from "./AuthImg.vue";

export default {
  name: "UserBlock",
  components: {
    authImg,
  },
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
      const prefix = "http://localhost:8080/";
      if (!this.avatar) return prefix + "statics/headpicture.jpg";
      return prefix + "Users/" + this.userId + "/" + this.avatar;
    },
    tokenStr:function(){
      return localStorage.getItem("token");
    }
  },
  methods: {
    pushShow() {
      this.$router.push({
        path: "/login",
      });
    },
    replaceShow() {
      this.$router.replace({
        path: "/login",
      });
    },
  },
  created() {
    const tokenStr = localStorage.getItem("token");
    // 如果没有获取到token或user，返回登录页
    if (!tokenStr) this.$router.push("/login");
    const userStr = localStorage.getItem("user");
    if (!userStr) this.$router.push("/login");
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
/* 长方形模块样式 */
.rectangle-module {
  /* position: relative; */
  position: fixed;
  z-index: 100;
  /*水平：垂直需要为2：3，否则头像不为圆形 */
  width: 350px; /* 水平方向长度 */
  height: 525px; /* 垂直方向长度 */

  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 外侧阴影效果 */
  overflow: hidden; /* 隐藏超出长方形的内容 */
  background-color: #fffff5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: 1100px; 距离窗口左边界 1100px */
  margin-top: 3pc;
}

/* 图片样式 */
.rectangle-module img {
  display: block;
  margin: -200px auto 0; /* 将左右外边距设置为 auto，使图片在水平方向上居中 */

  clip-path: circle(50% at center); /* 使用clip-path将图片截取为圆形 */

  /*依赖长方形模块的水平、垂直长度来保持圆形 */
  width: 33%;
  height: 22%;

  max-width: 100%; /* 设置图片最大宽度为100% */
  border-radius: 50%; /* 将图片的边框半径设置为50%，使其呈圆形 */
  transition: transform 0.3s ease-in-out;
}

/* 文字样式 */
.rectangle-module p {
  margin: 10px;
  font-size: 14px;
  transition: transform 0.3s ease-in-out;
}

/* 悬停效果 */z
.rectangle-module img:hover,
.rectangle-module p:hover {
  transform: scale(1.1);
}
</style>