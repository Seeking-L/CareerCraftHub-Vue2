<template>
  <div
    id="39b9c1804b0e4d2d866b6c1ffb86ae95"
    class="chart-container"
    style="width: 100%; height: 780px"
  ></div>
</template>

<script>
export default {
  name: "EchartsExample",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart_39b9c1804b0e4d2d866b6c1ffb86ae95 = this.$echarts.init(
        document.getElementById("39b9c1804b0e4d2d866b6c1ffb86ae95"),
        "dark",
        { renderer: "canvas" }
      );
      var option_39b9c1804b0e4d2d866b6c1ffb86ae95 = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        aria: {
          enabled: false,
        },
        series: [
          {
            type: "pie",
            colorBy: "data",
            legendHoverLink: true,
            selectedMode: false,
            selectedOffset: 10,
            clockwise: true,
            startAngle: 90,
            minAngle: 0,
            minShowLabelAngle: 0,
            avoidLabelOverlap: true,
            stillShowZeroSum: true,
            percentPrecision: 2,
            showEmptyCircle: true,
            emptyCircleStyle: {
              color: "lightgray",
              borderColor: "#000",
              borderWidth: 0,
              borderType: "solid",
              borderDashOffset: 0,
              borderCap: "butt",
              borderJoin: "bevel",
              borderMiterLimit: 10,
              opacity: 1,
            },
            data: [
              {
                name: "3-4\u5e74",
                value: 308,
              },
              {
                name: "2\u5e74",
                value: 208,
              },
              {
                name: "1\u5e74",
                value: 177,
              },
              {
                name: "5-7\u5e74",
                value: 101,
              },
              {
                name: "\u65e0\u9700\u7ecf\u9a8c",
                value: 80,
              },
              {
                name: "8-9\u5e74",
                value: 7,
              },
              {
                name: "10\u5e74\u4ee5\u4e0a",
                value: 2,
              },
            ],
            radius: ["0%", "75%"],
            center: ["50%", "50%"],
            label: {
              show: true,
              margin: 8,
              formatter: "{b}: {c}",
            },
            labelLine: {
              show: true,
              showAbove: false,
              length: 15,
              length2: 15,
              smooth: false,
              minTurnAngle: 90,
              maxSurfaceAngle: 90,
            },
            rippleEffect: {
              show: true,
              brushType: "stroke",
              scale: 2.5,
              period: 4,
            },
          },
        ],
        legend: [
          {
            data: [
              "3-4\u5e74",
              "2\u5e74",
              "1\u5e74",
              "5-7\u5e74",
              "\u65e0\u9700\u7ecf\u9a8c",
              "8-9\u5e74",
              "10\u5e74\u4ee5\u4e0a",
            ],
            selected: {},
            show: true,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            backgroundColor: "transparent",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 0,
            pageButtonItemGap: 5,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            animationDurationUpdate: 800,
            selector: false,
            selectorPosition: "auto",
            selectorItemGap: 7,
            selectorButtonGap: 10,
          },
        ],
        tooltip: {
          show: true,
          trigger: "item",
          triggerOn: "mousemove|click",
          axisPointer: {
            type: "line",
          },
          showContent: true,
          alwaysShowContent: false,
          showDelay: 0,
          hideDelay: 100,
          enterable: false,
          confine: false,
          appendToBody: false,
          transitionDuration: 0.4,
          textStyle: {
            fontSize: 14,
          },
          borderWidth: 0,
          padding: 5,
          order: "seriesAsc",
        },
        title: [
          {
            show: true,
            text: "\u524d\u7a0b\u65e0\u5fe7python\u804c\u4f4d\u7ecf\u9a8c\u8981\u6c42\u5206\u5e03\u997c\u72b6\u56fe",
            target: "blank",
            subtarget: "blank",
            padding: 5,
            itemGap: 10,
            textAlign: "auto",
            textVerticalAlign: "auto",
            triggerEvent: false,
          },
        ],
      };
      chart_39b9c1804b0e4d2d866b6c1ffb86ae95.setOption(
        option_39b9c1804b0e4d2d866b6c1ffb86ae95
      );
      window.addEventListener("resize", function () {
        chart_39b9c1804b0e4d2d866b6c1ffb86ae95.resize();
      });
    },
  },
};
</script>

<style>
/* 可以添加一些样式，根据需要自定义 */
</style>
