<template>
  <el-container>
    <el-aside width="400px">
      <UserBlock style="margin-top:50px"/>
    </el-aside>
    <el-main>
      <el-menu
        :default-active="'/mainpage/personal/resume'"
        router
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        style="border-radius:12px;background-color: #fffff5;"
      >
        <el-menu-item index="/mainpage/personal/resume" style="border-radius:12px;background-color: #fffff5;">个人简历</el-menu-item>
        <el-menu-item index="/mainpage/personal/myposts" style="border-radius:12px;background-color: #fffff5;">我的发贴</el-menu-item>
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
  mounted(){
    this.handleSelect("/mainpage/personal/resume")
  },
  methods: {
    handleSelect(key) {
        this.$router.push({
          path: key,
        })
      }
  },
};
</script>

<style scoped>
.el-card {
  /* background-color: #ffc0cb; */
  /* background-color: #ffe4e1; */
  background-color: #fffff5;
  border-radius: 12px;
}
</style>