<template>
  <el-container>
    <el-main>
      <ul class="StudyList-ul">
        <StudyItem />
      </ul>
    </el-main>
    <el-aside width="400px">
      <UserBlock />
    </el-aside>
  </el-container>
</template>

<script>
import UserBlock from "../components/UserBlock.vue";
import StudyItem from "../components/StudyItem.vue";

export default {
  name: "StudyList",
  components: { StudyItem, UserBlock},
};
</script>

<style scoped>
.StudyList-ul {
  display: inline-block;
  /*与页面左边界的距离 */
  margin-left: 5%;
  margin-top: -1%;
}
</style>