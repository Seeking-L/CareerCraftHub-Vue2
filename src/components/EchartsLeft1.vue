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
        title: {
          text: '部分省最低工资与最高工资对比图',
          left: 'center',
          textStyle: {
            color: '#333',
            fontSize: 18,
            fontWeight: 'bold',
          },
        },
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
            data: ["上海", "北京", "浙江", "天津", "山西", "江西", "广东","广西", "陕西","福建"],
          },
        ],
        series: [
          {
            name: "最低工资",
            type: "bar",
            stack: "total",
            barWidth: 20,
            data: [10963.82, 10945.49, 10150.98, 10050.00, 9404.76, 9213.18, 9534.37, 8791.23, 8754.96, 8506.74],
            itemStyle: {
              normal: {
                barBorderRadius: [0, 30, 30, 0],
              },
            },
          },
          {
            name: "最高工资",
            type: "bar",
            barGap: "-100%",
            data: [17668.75, 18052.85, 16235.92, 16923.61, 14464.29, 14708.71, 15534.52, 14057.89, 15076.42, 13728.46],
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
  height: 400px;
  display: inline-block;
  margin-left: 40px;
}
</style>
