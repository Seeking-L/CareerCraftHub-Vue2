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
.el-container{
  background-color: #f1e9d4;
}
</style>
<style>
.el-card{
  /* background-color: #ffc0cb; */
    /* background-color: #ffe4e1; */
      background-color: #fffff5;
      border-radius: 12px

}
</style>
