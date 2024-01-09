<template>
  <div>
    <!-- 单独的垂直柱状图 -->
    <div ref="singleBarRef" id="singleBar" class="whClass"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([BarChart, CanvasRenderer]);

export default {
  name: "EchartsLeft3",
  mounted() {
    this.init();
  },
  data() {
    return {
      // 垂直柱状图配置项
      barOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '直达',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
    };
  },
  methods: {
    init() {
      this.getSingleBarData();
    },
    // 单独垂直柱状图
    getSingleBarData() {
      let myChart = echarts.getInstanceByDom(document.getElementById("singleBar"));
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("singleBar"));
      }
      myChart.setOption(this.barOption, true);
    },
  },
};
</script>

<style scoped>
.whClass {
  width: 400px;
  height: 400px;
  display: inline-block;
  margin-left: -10px;
}
</style>
