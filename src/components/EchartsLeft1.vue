<template>
  <div>
    <!-- 单独的横向柱状图 -->
    <div ref="singleXbarRef" id="singleXbar" class="whClass"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([BarChart, CanvasRenderer]);

export default {
  name: "EchartLeft",
  mounted() {
    this.init();
  },
  data() {
    return {
      // 横向柱状图配置项
      xbarOption: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: [
          {
            type: "category",
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        series: [
          {
            name: "one",
            type: "bar",
            stack: "total",
            barWidth: 20,
            data: [320, 302, 301, 334, 390, 330, 320],
            itemStyle: {
              normal: {
                barBorderRadius: [0, 30, 30, 0],
              },
            },
          },
          {
            name: "two",
            type: "bar",
            barGap: "-100%",
            data: [3201, 3021, 3011, 3341, 3901, 3301, 3201],
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 30, 30, 0],
              },
            },
            z: 0,
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.getSingleXbarData();
    },
    // 单独横向柱状图
    getSingleXbarData() {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("singleXbar")
      );
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("singleXbar"));
      }
      myChart.setOption(this.xbarOption, true);
    },
  },
};
</script>

<style scoped>
.whClass {
  width: 300px;
  height: 300px;
  display: inline-block;
  margin-left: 40px;
}
</style>
