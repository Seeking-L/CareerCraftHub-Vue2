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
          data: ['软件', '新能源', '冶炼', '政府', '建筑', '科研', '广告', '教育', '家具', '房产'],
          axisLabel: {
            interval: 0,  // 强制显示所有刻度标签
            rotate: 45     // 标签旋转角度，可以根据需要调整
          },
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '月薪/千',
            type: 'bar',
            barWidth: '60%',
            data: [17.99208333, 15.95185185, 15.30283595, 15.20095833, 14.56512114, 14.49863774, 14.40233918, 13.76591667, 12.95261667, 11.87681087]
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
