<!-- EchartsCiyun.vue -->

<template>
    <div ref="wordcloud" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  import echarts from 'echarts';
  
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      // 使用传入的数据渲染词云图
      this.renderWordCloud();
    },
    methods: {
      renderWordCloud() {
        // 获取词云图的 DOM 元素
        const wordcloudChart = echarts.init(this.$refs.wordcloud);
  
        // 配置词云图的参数
        const option = {
          series: [{
            type: 'wordCloud',
            gridSize: 10,
            sizeRange: [12, 60],
            rotationRange: [0, 90],
            shape: 'circle',
            textStyle: {
              normal: {
                color: () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
              },
            },
            data: this.data,
          }],
        };
  
        // 使用配置项显示词云图
        wordcloudChart.setOption(option);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 这里可以添加组件的样式 */
  </style>