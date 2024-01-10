<template>
  <div id="main1" style="width: 100%; height: 500px"></div>
</template>
   
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
// import { BarChart } from "echarts/charts";
// // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
// } from "echarts/components";
// // 标签自动布局、全局过渡动画等特性
// import { LabelLayout, UniversalTransition } from "echarts/features";
// // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
// import { CanvasRenderer } from "echarts/renderers";
export default {
  // created() {
  //   echarts.use([
  //     TitleComponent,
  //     TooltipComponent,
  //     GridComponent,
  //     DatasetComponent,
  //     TransformComponent,
  //     BarChart,
  //     LabelLayout,
  //     UniversalTransition,
  //     CanvasRenderer,
  //   ]);
  // },
  mounted() {
    var chartDom = document.getElementById("main1");
    var myChart = echarts.init(chartDom);
    function resizeChart() {
      myChart.resize();
    }
    window.addEventListener("resize", resizeChart);
    resizeChart();
    let option = {
      legend: {
        top: '0%', // 调整图例的垂直位置
    },
      tooltip: {
        trigger: "axis",
        showContent: false,
      },
      dataset: {
        source: [
          ["salary range", "(0, 3000)", "(3001, 6000)", "(6001, 9000)", "(9001, 10000)", "(10001, 15000)", "(15001, 20000)", "(20001, 30000)", "(30001, inf)"],
          ["办公", 7, 166, 118, 16, 48, 10, 8, 25],
          ["餐饮", 22, 486, 537, 70, 275, 73, 55, 70],
          ["房产", 22, 549, 850, 149, 694, 124, 103, 97],
          ["服装", 22, 614, 941, 175, 733, 137, 116, 97],
          ["广告", 26, 650, 1026, 197, 854, 182, 154, 142],
          ["护理", 27, 817, 1158, 214, 904, 196, 158, 155],
          ["家具", 27, 849, 1297, 237, 1012, 225, 172, 209],
          ["检测", 29, 966, 1454, 253, 1072, 232, 181, 241],
          ["建筑", 29, 986, 1560, 280, 1181, 274, 225, 293],
          ["教育", 30, 1011, 1684, 305, 1282, 327, 253, 333],
          ["科研", 30, 1055, 1909, 379, 1589, 418, 333, 507],
          ["旅游", 33, 1133, 2057, 423, 1670, 423, 354, 521],
          ["汽车", 37, 1151, 2118, 438, 1730, 431, 366, 523],
          ["软件", 37, 1156, 2139, 444, 1775, 475, 418, 550],
          ["新能源", 37, 1165, 2191, 470, 1903, 540, 472, 616],
          ["冶炼", 37, 1189, 2286, 488, 2022, 573, 528, 671],
          ["影视", 37, 1211, 2379, 499, 2076, 578, 530, 682],
          ["硬件", 37, 1219, 2399, 509, 2132, 632, 565, 699],
          ["政府", 39, 1243, 2464, 534, 2260, 690, 623, 737],
          ["中介", 39, 1281, 2609, 577, 2400, 705, 639, 740],
        ],
      },
      xAxis: { type: "category" },
      yAxis: { gridIndex: 0 },
      grid: { top: "55%" },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "pie",
          id: "pie",
          radius: "30%",
          center: ["50%", "35%"],//控制饼图的位置
          emphasis: {
            focus: "self",
          },
          label: {
            formatter: "{b}: {@2012} ({d}%)",
          },
          encode: {
            itemName: "salary range",
            value: "2012",
            tooltip: "2012",
          },
        },
      ],
    };
    myChart.on("updateAxisPointer", function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: "pie",
            label: {
              formatter: "{b}: {@[" + dimension + "]} ({d}%)",
            },
            encode: {
              value: dimension,
              tooltip: dimension,
            },
          },
        });
      }
    });
    myChart.setOption(option);
  },
};
</script>
   
<style></style>