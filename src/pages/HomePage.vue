<template>
  <!-- 背景图片 -->
  <div class="background-container">
    <!-- 内容区域 -->
    <el-col :span="12" :offset="12" class="content-container">
      <el-card class="content-card" :body-style="{ padding: '20px' }" :bordered="false">
        <h1 class="card-title">欢迎访问我们的大数据职业能力分析平台主页！</h1>
        <p>
          在当今数字化时代，大数据技术的迅猛发展正在深刻地改变着各行各业。为了适应这一变革，我们精心打造了一款创新的大数据职业能力分析平台，旨在帮助您更好地理解、评估和提升在大数据领域的职业能力。
        </p>

        <h2 class="card-subtitle">平台特色：</h2>
        <ul>
          <li>全面评估： 我们的平台采用全面的数据指标，结合行业认可的技能要求，对用户在大数据领域的技术、工具和方法进行评估。通过详尽的分析，为您量身定制最适合的职业发展路径。</li>
          <li>实时趋势： 大数据行业不断演进，我们通过实时数据分析，将最新的技术趋势、市场需求以及职业发展机会呈现给您，助您在激烈的竞争中始终保持领先地位。</li>
          <li>个性化建议： 基于您的能力评估和行业趋势，我们提供个性化的职业发展建议，帮助您精准锁定发展方向，提升职业竞争力。</li>
          <li>学习资源推荐： 为了帮助您更好地提升技能，我们将根据您的评估结果为您推荐相关的学习资源，包括在线课程、培训机构和最新的学术文献，助您不断精进自己。</li>
          <li>社交互动： 平台还设有社交互动功能，您可以与行业内的专业人士、同行交流经验，拓展人脉，共同成长。</li>
        </ul>

        <p>
          通过我们的大数据职业能力分析平台，您将更好地了解自己的职业潜力，做出明智的职业决策，助力您在大数据领域取得更为卓越的成就。马上注册，开启您的职业发展新征程！
        </p>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  // Your component logic goes here
};
</script>

<style scoped>
.background-container {
  /* 设置背景图片 */
  background: url("../assets/background.jpg");
  /* 设置背景图片充满整个容器，并保持纵横比 */
  background-size: contain;
  background-repeat: no-repeat;
  /* 设置背景图片水平方向靠左 */
  background-position: 20% top;
  /* 固定位置，使得图片高度与屏幕相同 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-container {
  display: flex;
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 设置高度为视口高度，实现垂直居中 */
}

.content-card {
  width: 80%;
  margin: 0 auto;
  background: #fffff5; /* 设置背景色为白色，你可以更改为你想要的颜色 */
  border-radius: 10px; /* 设置边框圆角，使得卡片更具视觉美感 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果，提升卡片的立体感 */
}

.card-title {
  font-size: 24px;
  color: #333;
}

.card-subtitle {
  font-size: 20px;
  color: #333;
  margin-top: 10px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

/* 可以根据需要添加其他样式 */
</style>
