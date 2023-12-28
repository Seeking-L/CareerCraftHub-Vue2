<!--主页中的Study项-->

<template>
  <li class="StudyItem-li">
    <h2>Title</h2>
    <p>Some content here.</p>
  </li>
</template>

<script>
export default {
  name: "StudyItem",
};
</script>

<style scoped>
/* 自定义样式 */
.StudyItem-li {
  display: block;
  padding: 15px;
  margin: 10px 0; /* 添加垂直方向的外边距，增加元素之间的间距 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  transition: transform 0.3s ease-in-out; /* 悬浮时的平滑过渡效果 */
  width:900px;/*水平长度 */

  /* 初始状态 */
  background-color: #fffff5;
}

/* 悬浮时的效果 */
.StudyItem-li:hover {
  transform: scale(1.05);
}

/* 标题样式 */
.StudyItem-li h2 {
  font-size: 24px;
  margin-bottom: 8px;
  color: #333; /* 标题颜色 */
}

/* 内容样式 */
.StudyItem-li p {
  font-size: 14px;
  color: #666; /* 内容颜色 */
}
</style>