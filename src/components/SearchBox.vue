<template>
  <el-input
        type="text"
        prefix-icon="el-icon-search"
        v-model="content"
        placeholder="Search"
        style="width: 540px; cursor: pointer"
        @keyup.enter.native="submit"
      ></el-input>
</template>

<script>
export default {
  name: "SearchBox",
  data(){
    return{
      content:"",
    }
  },
  methods:{
    submit(){
      console.log("searchBox: searching--------")
      this.$store.commit("setSearchBoxContent",this.content)
      // 滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 可以选择 'auto' 或者 'smooth'
      });
    }
  },
  // props:{
  //   listNowChange:{
  //     type: Function,
  //     require: true,
  //     default: null,
  //   },
  // }
};
</script>
<style scoped>

</style>