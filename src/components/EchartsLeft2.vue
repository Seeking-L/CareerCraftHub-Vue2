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
        title: {
          text: '各类学习视频收藏数量统计图',
          left: "5%",
          textStyle: {
            color: '#333',
            fontSize: 18,
            fontWeight: 'bold',
          },
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
          right:  0,
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
            name: "B站播放量",
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
              { name: "经济管理", value: 166194.4444 },
              { name: "生物医药", value: 3741.777778 },
              { name: "市场营销", value: 24443.56944 },
              { name: "机械工程", value: 107943.662 },
              { name: "大学理工", value: 210436.6197 },
              { name: "公共课程", value: 84263.88889 },
              { name: "名校公开课", value: 16555.875 },
              { name: "建筑工程", value: 32350 },
              { name: "金融财会", value: 186.2894737 },
              { name: "环境地理", value: 21146.625 },
              { name: "社会科学", value: 118000 },
              { name: "创新技术", value: 28034.18056 },
              { name: "电子通讯", value: 1448 },
              { name: "哲学课程", value: 96529.41176 },
              { name: "自然科学", value: 253588.2353 },
              { name: "法律法规", value: 97202.89855 },
              { name: "人力资源", value: 40197.6087 },
              { name: "石油化工", value: 1639.605634 },
              { name: "农业课程", value: 19824.71831 },
              { name: "环境工程", value: 25705.89855 },
              { name: "电气工程", value: 105089.5522 },
              { name: "文化历史", value: 551111.1111 },
              { name: "园林专业", value: 5691.777778 },
              { name: "人工智能", value: 563211.2676 },
              { name: "办公软件", value: 123694.4444 },
              { name: "程序设计", value: 439869.5652 },
              { name: "网页设计", value: 54444.44444 },
              { name: "平面设计", value: 392357.1429 },
              { name: "三维软件", value: 38115.33333 },
              { name: "应用软件", value: 151532.2581 },
              { name: "电脑网络", value: 43515.88406 },
              { name: "电脑基础", value: 111938.4615 },
              { name: "数据库", value: 620358.209 },
              { name: "操作系统", value: 264590.1639 },
              { name: "移动开发", value: 60730.04167 },
              { name: "IT认证", value: 17955.81429 },
              { name: "分析计算", value: 144923.0769 },
              { name: "工程软件", value: 188135.5932 },
              { name: "服务器", value: 251436.6197 },
              { name: "考研数学", value: 1255847.222 },
              { name: "考研英语", value: 868507.0423 },
              { name: "考研政治", value: 408852.9412 },
              { name: "考研专业课", value: 306031.25 },
              { name: "名家讲坛", value: 1490.972222 },
              { name: "成功讲座", value: 4736.791667 },
              { name: "人文讲座", value: 113840.5797 },
              { name: "礼仪讲座", value: 945.5409836 },
              { name: "国学讲座", value: 30107.31884 },
              { name: "演讲口才", value: 8569.202899 },
              { name: "百家讲坛", value: 19845.55072 },
              { name: "人在职场", value: 37170.31944 },
              { name: "年轻成长", value: 4190.042254 },
              { name: "企业管理", value: 128000 },
              { name: "销售管理", value: 21166.61111 },
              { name: "家庭教育", value: 59887.32394 },
              { name: "心理学", value: 404194.4444 },
              { name: "MBA课程", value: 97250 },
              { name: "投资理财", value: 171819.6721 },
              { name: "TED", value: 133463.7681 },
              { name: "四六级考试", value: 94250 },
              { name: "品牌英语", value: 3632.746479 },
              { name: "基础英语", value: 801393.4426 },
              { name: "其他语种", value: 18767.84722 },
              { name: "雅思托福", value: 192770.4918 },
              { name: "听力口语", value: 778142.8571 },
              { name: "健康养生", value: 59790.41429 },
              { name: "禅佛智慧", value: 98.5 },
              { name: "有声读物", value: 148929.5775 },
              { name: "情感天地", value: 116.8333333 },
              { name: "强身健体", value: 6447.84507 },
              { name: "美容美发", value: 417.7058824 }
            ]

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
  height: 350px;
  display: inline-block;
  margin-left: 50px;
}
</style>
