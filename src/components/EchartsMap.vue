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
        geo: {
          type: "map",
          map: "china", //使用 registerMap 注册的地图名称
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
          },
        },
      };

      // 使用刚指定的配置项和数据显示图表
      chinaMap.setOption(option);
    },
  },
};
</script>

<style>
</style>