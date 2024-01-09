<template>
  <div>
    <!-- 折线图 -->
    <div ref="lineRef" id="line" class="whClass"></div>
    <!-- 柱状图 -->
    <div ref="barRef" id="bar" class="whClass"></div>
    <!-- 横向柱状图 -->
    <div ref="xbarRef" id="xbar" class="whClass"></div>
    <!-- 饼图 -->
    <div ref="pieRef" id="pie" class="whClass"></div>
    <!-- 动态创建多个图表 -->
    <div
      v-for="item in pieList"
      :key="item.id"
      :ref="`id${item.id}Ref`"
      :id="`id${item.id}ID`"
      class="dynamicClass"
    ></div>
  </div>
</template>

<script>
// 对于echarts按需引入
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";

import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components";
import { LineChart, BarChart, PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  GridComponent,
  LineChart,
  CanvasRenderer,
  TooltipComponent,
  BarChart,
  LegendComponent,
  PieChart,
  TitleComponent,
]);

export default {
  name: "echartZhus",
  created() { },
  mounted() {
    this.init();
  },
  data() {
    return {
      // 折线图
      lineOption: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        grid: {
          top: 30,
          right: 10,
          bottom: 20,
          left: 30,
        },
        series: [
          {
            data: [11, 222, 45, 1111, 129, 133, 132],
            type: "line",
            smooth: true,
          },
        ],
      },
      // 柱状图
      barOption: {
        title: {
          text: "标题",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "6%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "全部",
            type: "bar",
            // barWidth: '60%',
            stack: "广告",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
          {
            name: "不合格",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
        ],
      },
      // 横向柱状图
      xbarOption: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
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
            barGap: "-100%", // 设置外框粗细
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
      // 饼图
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
              {
                name: "数据1",
                value: 36,
              },
              {
                name: "数据2",
                value: 20,
              },
              {
                name: "数据3",
                value: 16,
              },
              {
                name: "数据4",
                value: 10,
              },
              {
                name: "数据5",
                value: 9,
              },
              {
                name: "数据6",
                value: 9,
              },
            ],
          },
        ],
      },
      // 动态创建多个图表
      idsOption: {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "动态创建多个图表",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            data: [
              { value: 1048, name: "one" },
              { value: 735, name: "two" },
            ],
          },
        ],
      },
      pieList: [
        {
          one: 3,
          id: 1,
          two: 2,
        },
        {
          one: 3,
          id: 2,
          two: 2,
        },
      ],
    };
  },
  methods: {
    init() {
      this.getlineData();
      this.getbarData();
      this.getxbarData();
      this.getpieData();
      this.getpies();
    },
    // 折线图
    getlineData() {
      //有的话就获取已有echarts实例的DOM节点。
      let myChart = echarts.getInstanceByDom(document.getElementById("line"));
      if (myChart == null) {
        // 如果不存在，就进行初始化
        myChart = echarts.init(document.getElementById("line"));
      }
      myChart.setOption(this.lineOption, true);
    },
    // 柱状图
    getbarData() {
      let myChart = echarts.getInstanceByDom(document.getElementById("bar"));
      if (myChart == null) {
        // 如果不存在，就进行初始化
        myChart = echarts.init(document.getElementById("bar"));
      }
      myChart.setOption(this.barOption, true);
    },
    // 横向柱状图
    getxbarData() {
      let myChart = echarts.getInstanceByDom(document.getElementById("xbar"));
      if (myChart == null) {
        // 如果不存在，就进行初始化
        myChart = echarts.init(document.getElementById("xbar"));
      }
      myChart.setOption(this.xbarOption, true);
    },
    // 饼图
    getpieData() {
      let myChart = echarts.getInstanceByDom(document.getElementById("pie"));
      if (myChart == null) {
        // 如果不存在，就进行初始化
        myChart = echarts.init(document.getElementById("pie"));
      }
      myChart.setOption(this.pieOption, true);
    },
    // 动态创建多个图表
    getpies() {
      this.pieList.map((val) => {
        let myChart = echarts.getInstanceByDom(
          document.getElementById(`id${val.id}ID`)
        );
        if (myChart == null) {
          // 如果不存在，就进行初始化
          myChart = echarts.init(document.getElementById(`id${val.id}ID`));
        }
        let _thisOption = JSON.parse(JSON.stringify(this.idsOption));
        _thisOption.series.data = [
          { value: val.one, name: "one" },
          { value: val.two, name: "two" },
        ];
        myChart.setOption(_thisOption, true);
      });
    },
  },
};
</script>

<style scoped>
.whClass {
  width: 300px;
  height: 300px;
  display: inline-block;
}
.dynamicClass {
  width: 100px;
  height: 100px;
  display: inline-block;
}
</style>

