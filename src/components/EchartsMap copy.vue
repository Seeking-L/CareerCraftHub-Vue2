<template>
  <div ref="echartsMap" style="width: 100%; height: 600px"></div>
</template>

<script>
import map from "@/assets/map/china.json";

export default {
  name: "EchartsMap",
  data() {
    return {
      mapName: "map",
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 使用ECharts初始化地图
      const chinaMap = this.$echarts.init(this.$refs.echartsMap);
      //注册地图
      this.$echarts.registerMap("china", map);
      // 地图配置
      var option = {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            return params.name + " : " + params.value[2];
          },
        },
        // 图例按钮，点击可选择哪些不显示
        legend: {
          orient: "vertical",
          left: "left",
          top: "bottom",
          data: ["地区热度", "top5"],
          textStyle: {
            color: "#ff69b4",
          },
        },
        geo: {
          type: "map",
          map: "china", //使用 registerMap 注册的地图名称
          label: {
            //标签
            emphasis: {
              //鼠标放上去时显示
              show: true,
            },
          },
          itemStyle: {
            //地区颜色
            normal: {
              areaColor: "#ffe4b5",
              borderColor: "#ff69b4", //地区边框颜色
            },
            emphasis: {
              //鼠标放上去时地区颜色
              areaColor: "#ff69b4",
            },
          },
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
          },
        },
        // 系列列表
        series: [
          {
            name: "地区热度",
            // 表的类型 这里是散点
            type: "scatter",
            // 使用地理坐标系，通过 `geoIndex` 指定相应的地理坐标系组件
            coordinateSystem: "geo",
            data: [
              { name: "北京", value: [116.46, 39.92, 100] },
              { name: "上海", value: [121.48, 31.22, 80] },
              { name: "广州", value: [113.23, 23.16, 60] },
              // 其他地区的数据
            ],
            // 标记的大小
            symbolSize: 12,
            // 鼠标悬浮的时候在圆点上显示数值
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: "#ddb926",
              },
              // 鼠标悬浮的时候圆点样式变化
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1,
              },
            },
          },
          {
            name: "top5",
            // 表的类型 这里是散点
            type: "effectScatter",
            // 使用地理坐标系，通过 `geoIndex` 指定相应的地理坐标系组件
            coordinateSystem: "geo",
            data: [
              { name: "江苏", value: [118.78, 32.04, 40] },
              { name: "四川", value: [104.06, 30.67, 24] },
              { name: "云南", value: [102.73, 25.04, 8] },
              { name: "重庆", value: [106.54, 29.59, 6] },
              { name: "湖南", value: [113, 28.21, 6] },
              { name: "广东", value: [113.23, 23.16, 80] },
              { name: "山东", value: [117, 36.65, 10] },
              { name: "上海", value: [121.48, 31.22, 60] },
              { name: "湖北", value: [114.31, 30.52, 37] },
              { name: "浙江", value: [120.19, 30.26, 24] },
              { name: "江西", value: [115.89, 28.68, 5] },
              { name: "安徽", value: [117.27, 31.86, 13] },
              { name: "贵州", value: [106.71, 26.57, 5] },
              { name: "北京", value: [116.46, 39.92, 32] },
              { name: "广西", value: [108.33, 22.84, 11] },
              { name: "河南", value: [113.65, 34.76, 5] },
              { name: "福建", value: [119.3, 26.08, 13] },
              { name: "陕西", value: [108.95, 34.27, 2] },
              { name: "河北", value: [114.48, 38.03, 6] },
              { name: "辽宁", value: [123.38, 41.8, 3] },
              { name: "宁夏", value: [106.27, 38.47, 1] },
              { name: "山西", value: [112.53, 37.87, 1] },
              { name: "吉林", value: [125.35, 43.88, 1] },
            ],
            // 标记的大小
            symbolSize: 12,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            zlevel: 1,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表
      chinaMap.setOption(option);
    },
  },
};
</script>

<style>
</style>