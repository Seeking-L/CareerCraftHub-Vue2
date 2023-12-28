<template>
<ul class="JobList-ul">
  <JobItem @click.native="toJobDetail"/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
  <JobItem/>
</ul>
</template>

<script>
import JobItem from "../components/JobItem.vue";

export default {
  name: "JobList",
  components: { JobItem },
  methods:{
    toJobDetail(){
      console.log("jump----")
      this.$router.push('/mainpage/jobdetail')
    }
  }
};
</script>

<style scoped>
.JobList-ul {
  /*与页面左边界的距离 */
  margin-left: 5%;
  margin-top: -1%;
}
</style>