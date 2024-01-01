<template>
  <el-container>
    <el-main>
      <ul class="StudyList-ul">
        <StudyItem />
      </ul>
    </el-main>
    <el-aside width="400px">
      <SearchBox />
      <UserBlock />
    </el-aside>
  </el-container>
</template>

<script>
import UserBlock from "../components/UserBlock.vue";
import StudyItem from "../components/StudyItem.vue";
import SearchBox from "../components/SearchBox.vue";

export default {
  name: "StudyList",
  components: { StudyItem, UserBlock, SearchBox },
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