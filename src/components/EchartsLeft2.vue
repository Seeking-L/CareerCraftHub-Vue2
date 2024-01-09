<template>
  <div>
    <!-- 单独的饼图 -->
    <div ref="singlePieRef" id="singlePie" class="whClass"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([PieChart, CanvasRenderer]);

export default {
  name: "EchartLeft2",
  mounted() {
    this.init();
  },
  data() {
    return {
      // 饼图配置项
      pieOption: {
        tooltip: {
          trigger: "item",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          icon: "circle",
          textStyle: {
            color: "#000",
            rich: {
              name: {
                verticalAlign: "right",
                align: "left",
                width: 35,
                fontSize: 12,
              },
              value: {
                align: "left",
                width: 40,
                fontSize: 12,
              },
              count: {
                align: "left",
                width: 50,
                fontSize: 12,
              },
              upRate: {
                align: "left",
                fontSize: 12,
                color: "#00cf90",
              },
              downRate: {
                align: "left",
                fontSize: 12,
                color: "#ff5722",
              },
            },
          },
        },
        series: [
          {
            name: "标题",
            type: "pie",
            radius: ["70%", "50%"],
            center: ["35%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { name: "数据1", value: 36 },
              { name: "数据2", value: 20 },
              { name: "数据3", value: 16 },
              { name: "数据4", value: 10 },
              { name: "数据5", value: 9 },
              { name: "数据6", value: 9 },
            ],
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.getSinglePieData();
    },
    // 单独饼图
    getSinglePieData() {
      let myChart = echarts.getInstanceByDom(document.getElementById("singlePie"));
      if (myChart == null) {
        myChart = echarts.init(document.getElementById("singlePie"));
      }
      myChart.setOption(this.pieOption, true);
    },
  },
};
</script>

<style scoped>
.whClass {
  width: 300px;
  height: 300px;
  display: inline-block;
  margin-left: 50px;
}
</style>
