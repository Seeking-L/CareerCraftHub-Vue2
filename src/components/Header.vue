<template>
  <div id="main_header">
    <header>
      <div class="navbar-left nav-links">
        <router-link active-class="active-link" to="/mainpage/stats">stats</router-link>
        <router-link active-class="active-link" to="/mainpage/jobs">Job</router-link>
        <router-link active-class="active-link" to="/mainpage/study">Study</router-link>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: "IndexHeader",
};
</script>

<style scoped>
/* 导航标签的样式 */
.navbar-left.nav-links{
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
  background-color: #ffffff; /* 设置鼠标悬停时的背景色 */
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
   padding-left: 40%; /*字体左边距 */
  padding-bottom: 0pt;
  padding-right: 50%;
  padding-top: 0pt;
  /* position: relative; */
  /* position: sticky; */
  position: fixed;
  top: 0;
  width:90%;
  z-index: 100; /*可以调整z-index，确保导航栏在其他元素之上*/
  box-shadow: 0pt 0.052083333in 11.25pt -5.25pt rgba(0, 0, 0, 0.1);
}
</style>