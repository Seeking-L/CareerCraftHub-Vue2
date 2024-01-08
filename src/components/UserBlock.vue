<!--主页中的用户信息模块-->
<template>
  <div class="rectangle-module">
    <!-- <img :src=avatarSrc alt="Image" @click="pushShow" /> -->
    <!-- <Img :imgUrl="avatarSrc" :authToken="tokenStr" @click="pushShow" /> -->
    <authImg 
    :imgUrl="avatarSrc" 
    :authToken="tokenStr" 
    :ifshowMenu=false
    alt="Image" @click.native="pushShow"></authImg>
    <h3>{{ this.user.userName }}</h3>
    <p>邮箱: {{ this.user.email }}</p>
    <p>电话: {{ this.user.userPhone }}</p>
    <p>城市: {{ this.user.city }}</p>
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
      avatar: "",
    };
  },
  computed: {
    avatarSrc: function () {
      const prefix = "http://"+this.$store.state.IP+":8080/";
      if (!this.avatar) return prefix + "statics/defaultAvatar.jpg";
      return prefix + "Users/" + this.user.userId + "/avatar/" + this.avatar;
    },
    tokenStr:function(){
      return localStorage.getItem("token");
    },
    user:function(){
      return JSON.parse(this.$store.state.user)
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
  width: 300px; /* 水平方向长度 */
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
  margin-top: 1pc;
  margin-left: 1pc;
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