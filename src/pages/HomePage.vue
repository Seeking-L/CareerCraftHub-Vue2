<template>
  <!-- 背景图片 -->
  <div class="background-container">
    <!-- 内容区域 -->
    <el-col :span="12" :offset="12" style="margin-top:10%"
      ><span
        >123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8 
        hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whr
        iuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8h
        ru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwo
        i390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru
        123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwo
        i390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390
        efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90
        u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8
        heuibwoi390efw8hru123h2iewrybwi90u3ef8wh
        riuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru
        123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8 
        hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whr
        iuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8h
        ru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwo
        i390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru
        123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwo
        i390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390
        efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90
        u3ef8whriuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8
        heuibwoi390efw8hru123h2iewrybwi90u3ef8wh
        riuwoi390efwr8heuibwoi390efw8hru123h2iewrybwi90u3ef8whriuwoi390efwr8heuibwoi390efw8hru
        </span
      ></el-col
    >
  </div>
</template>

<script>
export default {
  name: "HomePage",
  // Your component logic goes here
};
</script>

<style scoped>
.background-container {
  /* 设置背景图片 */
  background: url("../assets/background.jpg");
  /* 设置背景图片充满整个容器，并保持纵横比 */
  background-size: contain;
  background-repeat: no-repeat;
  /* 设置背景图片水平方向靠左 */
  background-position: 20% top;
  /* 固定位置，使得图片高度与屏幕相同 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 可以根据需要添加其他样式 */
</style>
