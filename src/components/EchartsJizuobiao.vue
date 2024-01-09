<template>
    <div id="myChart" :style="{width: '100%', height: '1000px'}" />
  </template>
  <script>
  
  export default {
    mounted() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: [
            {
              text: 'Radial Polar Bar Label Position (middle)'
            }
          ],
          polar: {
            radius: [30, '80%']
          },
          radiusAxis: {
            max: 4
          },
          angleAxis: {
            type: 'category',
            data: ['a', 'b', 'c', 'd'],
            startAngle: 75
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: [2, 1.2, 2.4, 3.6],
            coordinateSystem: 'polar',
            label: {
              show: true,
              position: 'middle',
              formatter: '{b}: {c}'
            }
          },
          backgroundColor: '#fff',
          animation: false
        })
      }
    }
  }
  </script>
  
  