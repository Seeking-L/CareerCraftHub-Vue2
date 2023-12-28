<template>
<ul class="StudyList-ul">
  <StudyItem/>
</ul>
</template>

<script>
import StudyItem from "../components/StudyItem.vue";

export default {
  name: "StudyList",
  components: { StudyItem },
};
</script>

<style scoped>
.StudyList-ul {
  display: inline-block;
  /*与页面左边界的距离 */
  margin-left: 5%;
  margin-top: 3pc;
}
</style>