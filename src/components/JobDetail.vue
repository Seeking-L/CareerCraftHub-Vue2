<template>
  <el-card class="box-card">
    <h2>{{ job_name }}</h2>
    <h2>{{ job_description }}</h2>
    <h2>{{ study_courses }}</h2>
    <h2>{{ required_skills }}</h2>
    <h2>{{ summary }}</h2>
  </el-card>
</template>


<script>
import http from "../util/request";

export default {
  name: "JobDetail",
  data() {
    return {
      job_name: "",
      job_description: "",
      study_courses: "",
      required_skills: "",
      summary: "",
    };
  },
  created() {
    http
      .get("/jobDetail")
      .then((res) => {
        console.log("JobDetail created. Response:")
        console.log(res)

        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            const file = res.data.data;

            console.log("jobdetail file------------------------");
            console.log(file);
            console.log("jobdetail file------------------");

            this.job_name = file.job_name;
            this.job_description = file.job_description;
            this.study_courses = file.study_courses;
            this.required_skills = file.required_skills;
            this.summary = file.summary;
          } else {
            this.$message.error(res.data.message);
          }
        } else {
          this.$message.error(res.error);
          console.log(res.error);
        }
      })
      .catch((error) => {
        // 处理错误情况
        this.$message.error(error);
        console.log(error);
        this.$router.go(-1);
      });
  },
  methods: {},
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>