<template>
  <el-container>
    <el-header>
      <IndexHeader />
    </el-header>
    <router-view name="Display"></router-view>
  </el-container>
</template>

<script>
import IndexHeader from "../components/Header.vue";
// import JobList from "./JobList.vue";
// import UserBlock from "../components/UserBlock.vue";

export default {
  name: "MainPage",
  components: {
    IndexHeader,
    // JobList,
    // UserBlock,
  },
};
</script>

<style scoped>
.centerPart {
  display: flex; /*使JobList与UserBlock处于同一行 */
}
</style>
