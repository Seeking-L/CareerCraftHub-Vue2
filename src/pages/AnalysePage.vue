<template>
  <el-main>
    <div class="analysis-container">
      <!-- 左侧区域 -->
      <div class="heatmap-container">
        <!-- ECharts 图表 -->
        <EchartsPieChart />
        <div class="button-container"> <!-- 新增一个容器用于水平居中按钮 -->
          <el-button type="primary" @click="generateResumeAnalysis">生成简历分析</el-button>
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="text-container">
        <!-- 第一个 el-card，用户简历评价 -->
        <el-card class="resume-evaluation-card" :body-style="{ padding: '20px' }" :bordered="false">
          <h2 class="card-title">用户简历评价</h2>
          <div class="resume-evaluation" v-html="processText(resumeAnalyse)"></div>
        </el-card>

        <!-- 第二个 el-card，学习建议 -->
        <el-card class="learning-guidance-card" :body-style="{ padding: '20px' }" :bordered="false">
          <h2 class="card-title">学习建议</h2>
          <div class="learning-guidance" v-html="processText(learningGuidance)"></div>
        </el-card>

        <!-- 第三个 el-card，职业规划建议 -->
        <el-card class="career-plan-card" :body-style="{ padding: '20px' }" :bordered="false">
          <h2 class="card-title">职业规划建议</h2>
          <div class="career-plan-suggestions" v-html="processText(careerGuidance)"></div>
        </el-card>
      </div>
    </div>
  </el-main>
</template>

<script>
import http from "../util/request";
import EchartsPieChart from "@/components/EchartsPieChart.vue";
// import { Loading } from 'element-ui';

export default {
  components: {
    EchartsPieChart,
  },
  data() {
    return {
      resumeAnalyse: "",
      careerGuidance: "",
      learningGuidance: "",
      loadingInstance: null, // Loading 实例变量
    };
},

  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$message.info('请点击按钮生成简历分析');

      
    },
    generateResumeAnalysis(){
      // this.startLoading(); // 启动 Loading 动画

    // 调用后端生成简历分析的接口
    http.get("/generateResumeAnalysis", {})
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            this.resumeAnalyse = res.data.data.resumeAnalyse;
            this.careerGuidance = res.data.data.careerGuidance;
            this.learningGuidance = res.data.data.learningGuidance;
          } else {
            this.$message.error(res.data.message);
          }
        } else {
          this.$message.error(res.error);
          console.log(res.error);
        }
      })
      .catch((error) => {
        this.$message.error(error);
        console.log(error);
      })
      .finally(() => {
        // this.stopLoading(); // 停止 Loading 动画
      });
    },
    processText(text) {
      // 将 \t* 替换为换行，将 ** 包裹的内容加粗
      text = text.replace(/\\t/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
      text = text.replace(/\*(.*?)\s/g, '&emsp;· $1');
      return text;
    },
  },
};
</script>

<style scoped>
.analysis-container {
  display: flex;
  justify-content: space-between;
}

.heatmap-container {
  width: 33%;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.button-container {
  width: 100%; /* 使按钮容器占满父容器宽度 */
  display: flex;
  justify-content: center; /* 水平居中 */
  margin-top: 0px; /* 调整按钮距离上方的间距 */
}

.text-container {
  width: 66%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 33%;
  margin-right: 0;
}

.resume-evaluation-card {
  width: 100%;
  background-color: #ffffff;
}

.learning-guidance-card {
  width: 100%;
  background-color: #ffffff;
  margin-top: 30px;
}

.career-plan-card {
  width: 100%;
  background-color: #ffffff;
  margin-top: 30px;
}

.resume-evaluation-card h2,
.learning-guidance-card h2,
.career-plan-card h2 {
  font-size: 18px;
  color: #33338f;
}

</style>
