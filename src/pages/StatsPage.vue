<template>
  <div>
    <el-container>
      <el-aside  width="400px">
        <el-card :body-style="{ height: '400px' , padding:'10px'}" style="margin-top:20px">
        <EchartsExample/>
        </el-card>
        
      </el-aside>
      <el-main>
        <el-card>
        <EchartsMap/>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import EchartsExample from "../components/EchartsExample.vue";
import EchartsMap from "../components/EchartsMap.vue"
export default {
  name: "StatsPage",
  components:{EchartsMap,EchartsExample}

};
</script>

<style scoped>
/* 你可以在这里添加样式 */

</style>





