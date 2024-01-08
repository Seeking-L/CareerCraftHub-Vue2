<template>
  <div>
    <el-container>
      <el-main>
        <!-- <echarts-pie-chart :data="pieChartData" :options="chartOptions" /> -->
        <div ref="echartsContainer" style="width: 100%; height: 600px"></div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import * as echarts from "echarts";
import china from "@/assets/map/china.json";
// import EchartsPieChart from "@/components/EchartsPieChart.vue";
export default {
  name: "StatsPage",
  data() {
    return {
      mapName: "china",
      data: [
        { name: "北京", value: 5 },
        { name: "天津", value: 14 },
        { name: "河北", value: 157 },
        { name: "山西", value: 110 },
        { name: "内蒙古", value: 40 },
        { name: "辽宁", value: 40 },
        { name: "吉林", value: 40 },
        { name: "黑龙江", value: 60 },
        { name: "上海", value: 10 },
        { name: "江苏", value: 60 },
        { name: "浙江", value: 50 },
        { name: "安徽", value: 151 },
        { name: "福建", value: 60 },
        { name: "江西", value: 74 },
        { name: "山东", value: 200 },
        { name: "河南", value: 100 },
        { name: "湖北", value: 40 },
        { name: "湖南", value: 50 },
        { name: "重庆", value: 40 },
        { name: "四川", value: 120 },
        { name: "贵州", value: 135 },
        { name: "云南", value: 90 },
        { name: "西藏", value: 25 },
        { name: "陕西", value: 100 },
        { name: "甘肃", value: 60 },
        { name: "青海", value: 20 },
        { name: "宁夏", value: 110 },
        { name: "新疆", value: 32 },
        { name: "广东", value: 10 },
        { name: "广西", value: 100 },
        { name: "海南", value: 40 },
      ],
      geoCoordMap: {},
      toolTipData: [
        // ... (其他省份的 tooltip 数据)
        {
          name: "湖南",
          value: 5,
          areas: ["长沙", "株洲", "益阳"],
        },
        {
          name: "安徽",
          value: 3,
          areas: ["合肥", "芜湖"],
        },
        {
          name: "山东",
          value: 80,
          areas: ["济南", "青岛", "淄博", "烟台", "威海", "临沂"],
        },
        {
          name: "四川",
          value: 35,
          areas: ["成都", "攀枝花", "乐山", "泸州"],
        },
        {
          name: "云南",
          value: 27,
          areas: ["昆明", "玉溪", "丽江", "普洱", "临沧"],
        },
        {
          name: "黑龙江",
          value: 13,
          areas: ["哈尔滨", "鹤岗", "黑河", "绥化", "大庆", "佳木斯"],
        },
        {
          name: "甘肃",
          value: 42,
          areas: ["兰州", "嘉峪关", "天水", "酒泉"],
        },
      ],
      myChart: null,
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      echarts.registerMap("china", { geoJSON: china });
      this.myChart = echarts.init(this.$refs.echartsContainer);
      // 获取地图数据
      this.myChart.showLoading();
      const mapFeatures = echarts.getMap("china").geoJson.features;
      this.myChart.hideLoading();

      mapFeatures.forEach((v) => {
        const name = v.properties.name;
        this.geoCoordMap[name] = v.properties.cp;
      });

      // 转换数据
      const convertData = (data) => {
        const res = [];
        for (let i = 0; i < data.length; i++) {
          const geoCoord = this.geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };

      // Echarts 配置项
      const option = {
        backgroundColor: "#003366",
        title: {
          show: true,
          text: "项目分布图",
          x: "center",
          top: "10",
          textStyle: {
            color: "#fff",
            fontFamily: "等线",
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: (params) => {
            if (typeof params.value[2] === "undefined") {
              let toolTiphtml = "";
              for (let i = 0; i < this.toolTipData.length; i++) {
                if (params.name === this.toolTipData[i].name) {
                  toolTiphtml +=
                    this.toolTipData[i].name + "：" + this.toolTipData[i].value;
                }
              }
              console.log(toolTiphtml);
              return toolTiphtml;
            } else {
              let toolTiphtml = "";
              for (let i = 0; i < this.toolTipData.length; i++) {
                if (params.name === this.toolTipData[i].name) {
                  toolTiphtml +=
                    this.toolTipData[i].name + "：" + this.toolTipData[i].value;
                }
              }
              console.log(toolTiphtml);
              return toolTiphtml;
            }
          },
          backgroundColor: "#fff",
          borderColor: "#333",
          padding: [5, 10],
          textStyle: {
            color: "#333",
            fontSize: "16",
          },
        },
        geo: {
          layoutCenter: ["45%", "48%"],
          layoutSize: "100%",
          show: true,
          map: this.mapName,
          roam: true,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
            emphasis: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)",
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)",
                  },
                ],
                globalCoord: false,
              },
              shadowColor: "rgba(255, 255, 255, 1)",
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
            },
            emphasis: {
              areaColor: "#389BB7",
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            type: "map",
            map: this.mapName,
            geoIndex: 0,
            aspectScale: 0.9,
            zoom: 1,
            showLegendSymbol: false,
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: this.data,
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(this.toolTipData),
            symbolSize: () => {
              return 15;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                color: "#fff",
              },
            },
            itemStyle: {
              normal: {
                color: "#1DE9B6",
                shadowBlur: 10,
                shadowColor: "#1DE9B6",
              },
            },
            zlevel: 1,
          },
        ],
      };

      // 设置 Echarts 配置项
      this.myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
/* 你可以在这里添加样式 */
</style>





