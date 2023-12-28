<template>
  <el-container>
    <el-header>
      <IndexHeader />
    </el-header>
    <!-- <div class="centerPart"> -->
    <el-container>
      <el-main>
        <router-view name="Display"></router-view>
      </el-main>
      <el-aside width="400px">
        <UserBlock />
      </el-aside>
    </el-container>
    <!-- </div> -->
  </el-container>
</template>

<script>
import IndexHeader from "../components/IndexHeader.vue";
// import JobList from "./JobList.vue";
import UserBlock from "../components/UserBlock.vue";

export default {
  name: "MainPage",
  components: {
    IndexHeader,
    // JobList,
    UserBlock,
  },
};
</script>

<style scoped>
.centerPart {
  display: flex; /*使JobList与UserBlock处于同一行 */
}
</style>
