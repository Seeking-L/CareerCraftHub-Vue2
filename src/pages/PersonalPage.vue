<template>
  <el-container>
    <el-aside width="400px">
      <UserBlock />
    </el-aside>
    <el-main>
        <el-menu
         router
          default-active="/mainpage/personal/resume"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="/mainpage/personal/resume">个人简历</el-menu-item>
          <el-menu-item index="/mainpage/personal/myposts">我的发贴</el-menu-item>
        </el-menu>
      <router-view name="personalPageContent"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import UserBlock from "../components/UserBlock.vue";

export default {
  name: "PersonalPage",
  components: { UserBlock },
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
  methods: {
  },
};
</script>

<style>
</style>