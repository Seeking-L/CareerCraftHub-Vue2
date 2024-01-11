<template>
  <div class="home">
    <!-- 定义图表外层容器 -->
    <div id="myHomeChart" ref="homeEcharts"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 调用当前图表
    this.dataChart();
  },
  methods: {
    // 绘制图表
    dataChart() {
      //初始化图表，this.$refs.homeEcharts获取到图表容器
      var myChart = this.$echarts.init(this.$refs.homeEcharts);
      // 初始化配置（官网实例详情左侧代码，直接复制过来按项目需求修改即可）
      var option = {
        title: {
          text: '学习视频2022-2023数量统计',
          left: 'center',
          textStyle: {
            color: '#333',
            fontSize: 18,
            fontWeight: 'bold',
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          left: 10,
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他",
          ],
        },
        series: [
          {
            name: "2023新增学习视频数量前五",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
          show: true,
          position: 'inner',
          color: '#fff',  // Set text color
          fontSize: 10,   // Set text size
        },
            labelLine: {
              show: false,
            },
            data: [
              { value: 45, name: "法场法规", itemStyle: { color: '#F7464A' } },
              { value: 38, name: "人在职场", itemStyle: { color: '#46BFBD' } },
              { value: 35, name: "人力资源", itemStyle: { color: '#FDB45C' } },
              { value: 28, name: "名校公开课", itemStyle: { color: '#949FB1' } },
              { value: 27, name: "考研政治", itemStyle: { color: '#4D5360' },position: 'inner', },
            ],
          },
          {
            name: "2022新增学习视频数量前十",
            type: "pie",
            radius: ["40%", "55%"],
            data: [
              { value: 31, name: "经济管理", itemStyle: { color: '#F7464A' } },
              { value: 31, name: "电脑基础", itemStyle: { color: '#46BFBD' } },
              { value: 28, name: "生物医药", itemStyle: { color: '#FDB45C' } },
              { value: 27, name: "家庭教育", itemStyle: { color: '#949FB1' } },
              { value: 24, name: "操作系统", itemStyle: { color: '#4D5360' } },
              { value: 23, name: "市场营销", itemStyle: { color: '#80699B' } },
              { value: 23, name: "电子通讯", itemStyle: { color: '#DAA520' } },
              { value: 23, name: "电脑网络", itemStyle: { color: '#2E8B57' } },
              { value: 23, name: "分析计算", itemStyle: { color: '#FF4500' } },
              { value: 22, name: "农业课程", itemStyle: { color: '#87CEFA' } },
            ],
          },
        ],
      };
      // 把参数配置放到容器里
      myChart.setOption(option);
    },
    // 销毁实例(看项目需要进行销毁实例)
    destroyChart() {
      this.$echarts.init(this.$refs.homeEcharts).dispose();
    },
  },
};
</script>
<style>
/* 给图表容器定义宽高 */
#myHomeChart {
  width: 400px;
  height: 400px;
  margin-left: -20px;
}
</style>
  
  
  
  