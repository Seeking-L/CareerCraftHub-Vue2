<template>
  <el-container>
    <el-aside width="400px">
      <UserBlock />
    </el-aside>
    <el-main>
      <Resume />
    </el-main>
  </el-container>
</template>

<script>
import UserBlock from "../components/UserBlock.vue";
import Resume from "../components/Resume.vue";

export default {
  name: "PersonalPage",
  components: { UserBlock, Resume },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>

<style>
</style>