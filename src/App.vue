<template>
  <div id="app">
    <!-- <IndexHeader v-if="ifHeader"/>
    <div class="centerPart">
      <router-view name="Display"></router-view>
      <UserBlock v-if="ifUserBlock"/>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import IndexHeader from "./components/IndexHeader.vue";
// import JobList from "./pages/JobList.vue";
// import UserBlock from "./components/UserBlock.vue";
// import StudyList from "./pages/JobList.vue";
// import MainPage from './pages/MainPage.vue';

export default {
  name: "App",
  components: {
    // IndexHeader,
    // UserBlock,
    // MainPage
  },
  data() {
    return {
      isLoggedIn: false,
      ifHeader:true,
      ifUserBlock:true,
    };
  },
};
</script>

<style>
.centerPart {
  display: flex; /*使JobList与UserBlock处于同一行 */
}
</style>
