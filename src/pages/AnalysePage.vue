<template>
  <el-main>
    <div class="analysis-container">
      <!-- 左侧热力图区域 -->
      <div class="heatmap-container">
        <!-- ECharts 图表 -->
        <EchartsPieChart />
      </div>

      <!-- 右侧文字区域 -->
      <div class="text-container">
        <!-- 第一个 el-card，用户简历评价 -->
        <el-card class="resume-evaluation-card" :body-style="{ padding: '20px' }" :bordered="false">
          <h2 class="card-title">用户简历评价</h2>
          <div class="resume-evaluation">
            {{ resumeAnalyse }}
          </div>
        </el-card>

        <!-- 第二个 el-card，学习建议 -->
        <el-card class="learning-guidance-card" :body-style="{ padding: '20px' }" :bordered="false">
          <h2 class="card-title">学习建议</h2>
          <div class="learning-guidance">
            {{ learningGuidance }}
          </div>
        </el-card>

        <!-- 第三个 el-card，职业规划建议 -->
        <el-card class="career-plan-card" :body-style="{ padding: '20px' }" :bordered="false">
          <h2 class="card-title">职业规划建议</h2>
          <div class="career-plan-suggestions">
            {{ careerGuidance }}
          </div>
        </el-card>
      </div>
    </div>
  </el-main>
</template>

<script>
// import axios from 'axios';
import EchartsPieChart from "@/components/EchartsPieChart.vue";
export default {
  components: {
    EchartsPieChart,
  },
//   data() {
//     return {
//       resumeAnalyse: '', // 存放用户简历评价的数据
//       careerGuidance: '', // 存放职业规划建议的数据
//       learningGuidance: '', // 存放学习建议的数据
//     };
//   },
//   mounted() {
//     this.fetchData();
//   },
//   methods: {
//     fetchData() {
//       // 使用axios发起GET请求
//       axios.get(`/analyse?userId=${yourUserId}`)
//         .then(response => {
//           // 处理后端返回的数据
//           const data = response.data;
//           this.resumeAnalyse = data.resumeAnalyse;
//           this.careerGuidance = data.careerGuidance;
//           this.learningGuidance = data.learningGuidance;
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     },
//   },
};
</script>

<style scoped>
.analysis-container {
  display: flex;
  justify-content: space-between;
}

.heatmap-container {
  width: 33%;
}

.text-container {
  width: 66%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /* 将子元素纵向排列 */
  justify-content: flex-start; /* 从左侧开始排列 */
}

.resume-evaluation-card {
  width: 100%;
  background-color: #ffffff; /* 设置背景颜色 */
}

.learning-guidance-card {
  width: 100%;
  background-color: #ffffff; /* 设置背景颜色 */
  margin-top: 30px;

}

.career-plan-card {
  width: 100%;
  background-color: #ffffff; /* 设置背景颜色 */
  margin-top: 30px;
}

.resume-evaluation-card h2,
.learning-guidance-card h2,
.career-plan-card h2 {
  font-size: 18px;
  color: #33338f;
}

</style>
