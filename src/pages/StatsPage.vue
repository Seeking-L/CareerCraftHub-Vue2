<template>
  <div>
    <el-container>
      <el-aside width="400px">
        <el-card :body-style="{ height: '400px', padding: '10px' }" style="margin-top:20px">
          <EchartsExample />
        </el-card>


      </el-aside>
      <el-main>
        <el-card>
          <EchartsMap />
        </el-card>
        <el-card>
          <EchartsSalary />
        </el-card>
        <el-card>
          <EchartsZhus />
        </el-card>
        <el-card>
          <EchartsJizuobiao />
        </el-card>
        <el-card>
          <Echarts2Pies />
        </el-card>
        <el-card>
          <EchartsGauge />
        </el-card>
      

      </el-main>
    </el-container>
  </div>
</template>


<script>
import EchartsExample from "../components/EchartsExample.vue";
import EchartsMap from "../components/EchartsMap.vue"
import EchartsSalary from "../components/EchartsSalary.vue";
import EchartsZhus from "../components/EchartsZhus.vue";
import EchartsJizuobiao from "../components/EchartsJizuobiao.vue";
import Echarts2Pies from "../components/Echarts2Pies.vue";
import EchartsGauge from "../components/EchartsGauge.vue";
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
export default {
  name: "StatsPage",
  components: { EchartsMap, EchartsExample, EchartsSalary, EchartsZhus, EchartsJizuobiao, Echarts2Pies, EchartsGauge },

};
</script>

<style scoped>
/* 你可以在这里添加样式 */
</style>





