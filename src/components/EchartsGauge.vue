<template>
    <div>
        <div ref="gaugeChart" style="width: 350px; height: 350px; padding: 20px; border-radius: 20px;"></div>
    </div>
</template>
 
<script>
import * as echarts from 'echarts'
 
export default {
    mounted() {
        this.gaugeChart = echarts.init(this.$refs.gaugeChart)
        this.gaugeChart.setOption({
            series: [
                {
                    name: '评分',
                    type: 'gauge',
                    center: ['50%', '55%'],
                    radius: '75%',
                    min: 0,
                    max: 100,
                    itemStyle: {
                        color: '#4FC3F7',
                        shadowColor: 'rgba(0,138,255,0.45)'
                    },
                    // 进度条
                    progress: {
                        show: true,
                        width: 20,
                        roundCap: true
                    },
                    // 坐标轴线
                    axisLine: {
                        show: true,
                        roundCap: true,
                        lineStyle: {
                            width: 20
                        }
                    },
                    // 仪表盘指针
                    pointer: {
                        show: false
                    },
                    // 刻度标签
                    axisLabel: {
                        show: false
                    },
                    // 刻度
                    axisTick: {
                        show: false
                    },
                    // 分隔线
                    splitLine: {
                        show: false
                    },
                    title: {
                        offsetCenter: [0, '20%'],
                        fontSize: 20
                    },
                    detail: {
                        offsetCenter: [0, '-10%'],
                        valueAnimation: true,
                        textStyle: {
                            fontSize: 30
                        },
                        formatter: '{value}'
                    },
                    data: [
                        { value:80, name: "简历评分" }
                    ]
                }
            ]
        })
    }
}
</script>