<template>
  <div>
    <el-container>
      <el-aside width="400px">
        <el-card :body-style="{ height: '350px', padding: '10px' }" style="margin-top:20px;">
          <EchartsLeft1 />
        </el-card>
        <el-card :body-style="{ height: '300px', padding: '10px' }" style="margin-top:20px;">
          <EchartsLeft2 />
        </el-card>
        <el-card :body-style="{ height: '400px', padding: '10px' }" style="margin-top:20px;">
          <EchartsLeft3 />
        </el-card>
      </el-aside>
      <el-main>
        <el-card>
          <EchartsMap />
        </el-card>
        <el-card :body-style="{ height: '500px' }" style="margin-top:20px;padding-top:50px">
          <EchartsSalary />
        </el-card>
      </el-main>
      <el-aside width="400px">
        <el-card :body-style="{ height: '350px',padding: '0px' }" style="margin-top:20px;">
          <EchartsRight1 style="margin-left: 0px;margin-top:-20px"/>
        </el-card>
        <el-card width="400px" style="margin-top:20px;">
          <EchartsRight2 />
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>


<script>
import EchartsMap from "../components/EchartsMap.vue"
import EchartsSalary from "../components/EchartsSalary.vue";
// import EchartsZhus from "../components/EchartsZhus.vue";
import EchartsRight2 from "../components/Echarts2Pies.vue";
import EchartsRight1 from "../components/EchartsGauge.vue";
import EchartsLeft1 from "../components/EchartsLeft1.vue"
import EchartsLeft2 from "../components/EchartsLeft2.vue";
import EchartsLeft3 from "../components/EchartsLeft3.vue";
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
export default {
  name: "StatsPage",
  components: { EchartsMap, EchartsSalary, EchartsRight2, EchartsRight1,EchartsLeft1,EchartsLeft2,EchartsLeft3},

};
</script>

<style scoped>
/* 你可以在这里添加样式 */
.el-card {
  /* background-color: #ffc0cb; */
  /* background-color: #ffe4e1; */
  background-color: #fffff5;
  border-radius: 12px;
}
</style>





