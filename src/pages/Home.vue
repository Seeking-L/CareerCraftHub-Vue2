<template>
  <div>
    <el-container>
      <el-main>
    <echarts-pie-chart :data="pieChartData" :options="chartOptions" />
      </el-main>
    </el-container>
  </div>
</template>


<script>
import EchartsPieChart from "@/components/EchartsPieChart.vue";
export default {
  name: "HomePage",
  components: {
    EchartsPieChart,
  },
  data() {
    return {
      pieChartData: [
        { name: "Category A", value: 335 },
        { name: "Category B", value: 310 },
        { name: "Category C", value: 234 },
        { name: "Category D", value: 135 },
        { name: "Category E", value: 1548 },
      ],
      chartOptions: {
        title: {
          text: "Custom Pie Chart Title",
          subtext: "Custom Subtitle",
        },
        // 其他自定义配置项
      },
    };
  },
};
</script>

<style>
</style>



