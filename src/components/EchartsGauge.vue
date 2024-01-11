<template>
  <div>
    <div
      ref="gaugeChart"
      style="width: 350px; height: 350px; padding: 20px; border-radius: 20px"
    ></div>
  </div>
</template>
 
<script>
import * as echarts from "echarts";
import http from "../util/request";

export default {
  data() {
    return {
      score: 0,
    };
  },
  async mounted() {
    this.score = this.$store.state.score;
    if (this.score == null || this.score === "") {
      await http
        .get("/getScore", {
          params: {
            // key:value
          },
        })
        .then((res) => {
          if (res.status >= 200 && res.status <= 300) {
            if (res.data.resultCode === 1) {
              this.score = res.data.data;
              this.$store.commit("setScore", this.score);
              console.log(this.score);
            } else {
              this.$message.error(res.data.message);
            }
          } else {
            this.$message.error(res.error);
            console.log(res.error);
          }
        })
        .catch((error) => {
          // 处理错误情况
          this.$message.error(error);
          console.log(error);
        });
    }
    this.gaugeChart = echarts.init(this.$refs.gaugeChart);
    this.gaugeChart.setOption({
      series: [
        {
          name: "评分",
          type: "gauge",
          center: ["50%", "55%"],
          radius: "75%",
          min: 0,
          max: 100,
          itemStyle: {
            color: "#4FC3F7",
            shadowColor: "rgba(0,138,255,0.45)",
          },
          // 进度条
          progress: {
            show: true,
            width: 20,
            roundCap: true,
          },
          // 坐标轴线
          axisLine: {
            show: true,
            roundCap: true,
            lineStyle: {
              width: 20,
            },
          },
          // 仪表盘指针
          pointer: {
            show: false,
          },
          // 刻度标签
          axisLabel: {
            show: false,
          },
          // 刻度
          axisTick: {
            show: false,
          },
          // 分隔线
          splitLine: {
            show: false,
          },
          title: {
            offsetCenter: [0, "20%"],
            fontSize: 20,
          },
          detail: {
            offsetCenter: [0, "-10%"],
            valueAnimation: true,
            textStyle: {
              fontSize: 30,
            },
            formatter: "{value}",
          },
          data: [{ value: this.score, name: "简历评分" }],
        },
      ],
    });
  },
};
</script>