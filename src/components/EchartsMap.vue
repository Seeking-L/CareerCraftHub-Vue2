<template>
  <div ref="echartsMap" style="width: 100%; height: 600px"></div>
</template>

<script>
import map from "@/assets/map/china.json";

export default {
  name: "EchartsMap",
  data() {
    return {
      chinaMap: null,
      mapName: "map",

      datas:[[
        //办公
        { name: "陕西省", value: 3 },
        { name: "江苏省", value: 42 },
        { name: "四川省", value: 24 },
        { name: "云南省", value: 8 },
        { name: "重庆市", value: 6 },
        { name: "湖南省", value: 6 },
        { name: "广东省", value: 84 },
        { name: "山东省", value: 11 },
        { name: "湖北省", value: 38 },
        { name: "上海市", value: 60 },
        { name: "浙江省", value: 24 },
        { name: "江西省", value: 5 },
        { name: "安徽省", value: 13 },
        { name: "贵州省", value: 5 },
        { name: "北京市", value: 28 },
        { name: "广西壮族自治区", value: 11 },
        { name: "河南省", value: 5 },
        { name: "福建省", value: 13 },
        { name: "辽宁省", value: 4 },
        { name: "河北省", value: 6 },
        { name: "宁夏回族自治区", value: 1 },
        { name: "山西省", value: 1 },
        { name: "吉林省", value: 2 },
      ],[
        //餐饮
        { name: "广东省", value: 329 },
        { name: "广西壮族自治区", value: 11 },
        { name: "上海市", value: 225 },
        { name: "云南省", value: 26 },
        { name: "湖北省", value: 88 },
        { name: "湖南省", value: 37 },
        { name: "福建省", value: 20 },
        { name: "河南省", value: 12 },
        { name: "江西省", value: 12 },
        { name: "山东省", value: 17 },
        { name: "河北省", value: 7 },
        { name: "安徽省", value: 21 },
        { name: "江苏省", value: 107 },
        { name: "山西省", value: 5 },
        { name: "四川省", value: 89 },
        { name: "黑龙江省", value: 2 },
        { name: "北京市", value: 37 },
        { name: "重庆市", value: 24 },
        { name: "浙江省", value: 66 },
        { name: "海南省", value: 8 },
        { name: "陕西省", value: 18 },
        { name: "辽宁省", value: 17 },
        { name: "贵州省", value: 5 },
        { name: "天津市", value: 3 },
        { name: "吉林省", value: 4 },
        { name: "宁夏回族自治区", value: 1 },
        { name: "新疆维吾尔自治区", value: 3 },
        { name: "青海省", value: 1 },
        { name: "甘肃省", value: 1 },
        { name: "西藏自治区", value: 3 },
      ], [
        //房产
        { name: "上海市", value: 189 },
        { name: "重庆市", value: 52 },
        { name: "四川省", value: 74 },
        { name: "江苏省", value: 193 },
        { name: "内蒙古自治区", value: 1 },
        { name: "广东省", value: 191 },
        { name: "陕西省", value: 39 },
        { name: "北京市", value: 50 },
        { name: "云南省", value: 6 },
        { name: "山东省", value: 9 },
        { name: "浙江省", value: 39 },
        { name: "河南省", value: 9 },
        { name: "辽宁省", value: 1 },
        { name: "湖南省", value: 11 },
        { name: "河北省", value: 3 },
        { name: "湖北省", value: 104 },
        { name: "海南省", value: 2 },
        { name: "江西省", value: 2 },
        { name: "安徽省", value: 8 },
        { name: "贵州省", value: 4 },
        { name: "黑龙江省", value: 6 },
        { name: "福建省", value: 6 },
        { name: "吉林省", value: 1 },
      ],[
        //服装
        { name: "江苏省", value: 104 },
        { name: "湖北省", value: 26 },
        { name: "上海市", value: 39 },
        { name: "浙江省", value: 26 },
        { name: "广东省", value: 39 },
        { name: "山东省", value: 13 },
        { name: "北京市", value: 13 },
      ], [
        //广告
        { name: "上海市", value: 100 },
        { name: "云南省", value: 8 },
        { name: "广东省", value: 122 },
        { name: "安徽省", value: 4 },
        { name: "江苏省", value: 20 },
        { name: "北京市", value: 33 },
        { name: "浙江省", value: 21 },
        { name: "陕西省", value: 4 },
        { name: "四川省", value: 24 },
        { name: "湖北省", value: 23 },
        { name: "河南省", value: 5 },
        { name: "重庆市", value: 13 },
        { name: "江西省", value: 3 },
        { name: "辽宁省", value: 2 },
        { name: "山东省", value: 6 },
        { name: "湖南省", value: 5 },
        { name: "贵州省", value: 1 },
        { name: "福建省", value: 3 },
        { name: "吉林省", value: 1 },
        { name: "甘肃省", value: 1 },
        { name: "新疆维吾尔自治区", value: 1 },
      ],[
        //护理
        { name: "湖北省", value: 33 },
        { name: "江苏省", value: 46 },
        { name: "安徽省", value: 5 },
        { name: "浙江省", value: 25 },
        { name: "广东省", value: 109 },
        { name: "山东省", value: 8 },
        { name: "上海市", value: 79 },
        { name: "陕西省", value: 7 },
        { name: "四川省", value: 38 },
        { name: "云南省", value: 12 },
        { name: "甘肃省", value: 1 },
        { name: "北京市", value: 14 },
        { name: "重庆市", value: 9 },
        { name: "河南省", value: 4 },
        { name: "江西省", value: 3 },
        { name: "辽宁省", value: 2 },
        { name: "湖南省", value: 2 },
        { name: "广西壮族自治区", value: 1 },
        { name: "黑龙江省", value: 1 },
        { name: "河北省", value: 1 },
      ],[
        //家具
        { name: "江苏省", value: 25 },
        { name: "安徽省", value: 6 },
        { name: "上海市", value: 57 },
        { name: "四川省", value: 29 },
        { name: "山东省", value: 8 },
        { name: "河北省", value: 4 },
        { name: "浙江省", value: 41 },
        { name: "广东省", value: 162 },
        { name: "湖北省", value: 20 },
        { name: "江西省", value: 5 },
        { name: "云南省", value: 9 },
        { name: "贵州省", value: 1 },
        { name: "天津市", value: 1 },
        { name: "河南省", value: 3 },
        { name: "辽宁省", value: 4 },
        { name: "重庆市", value: 9 },
        { name: "北京市", value: 7 },
        { name: "福建省", value: 4 },
        { name: "广西壮族自治区", value: 1 },
        { name: "陕西省", value: 3 },
        { name: "山西省", value: 1 },
      ],[
        //检测
        { name: "广东省", value: 113 },
        { name: "安徽省", value: 9 },
        { name: "江苏省", value: 59 },
        { name: "浙江省", value: 37 },
        { name: "河南省", value: 8 },
        { name: "云南省", value: 6 },
        { name: "上海市", value: 59 },
        { name: "北京市", value: 15 },
        { name: "宁夏回族自治区", value: 1 },
        { name: "陕西省", value: 6 },
        { name: "新疆维吾尔自治区", value: 1 },
        { name: "江西省", value: 7 },
        { name: "山东省", value: 4 },
        { name: "广西壮族自治区", value: 8 },
        { name: "湖北省", value: 19 },
        { name: "湖南省", value: 9 },
        { name: "河北省", value: 7 },
        { name: "福建省", value: 11 },
        { name: "重庆市", value: 7 },
        { name: "山西省", value: 1 },
        { name: "辽宁省", value: 3 },
        { name: "内蒙古自治区", value: 2 },
        { name: "四川省", value: 3 },
        { name: "贵州省", value: 1 },
        { name: "吉林省", value: 1 },
        { name: "天津市", value: 1 },
        { name: "海南省", value: 1 },
        { name: "黑龙江省", value: 1 },
      ],[
        //建筑
        { name: "广东省", value: 86 },
        { name: "江苏省", value: 35 },
        { name: "上海市", value: 72 },
        { name: "重庆市", value: 21 },
        { name: "四川省", value: 26 },
        { name: "北京市", value: 13 },
        { name: "河南省", value: 8 },
        { name: "湖北省", value: 24 },
        { name: "浙江省", value: 46 },
        { name: "辽宁省", value: 5 },
        { name: "云南省", value: 12 },
        { name: "山东省", value: 6 },
        { name: "湖南省", value: 7 },
        { name: "安徽省", value: 8 },
        { name: "陕西省", value: 9 },
        { name: "黑龙江省", value: 1 },
        { name: "贵州省", value: 3 },
        { name: "天津市", value: 2 },
        { name: "江西省", value: 2 },
        { name: "广西壮族自治区", value: 2 },
        { name: "福建省", value: 1 },
        { name: "河北省", value: 7 },
        { name: "内蒙古自治区", value: 1 },
        { name: "甘肃省", value: 2 },
        { name: "海南省", value: 1 },
      ],[
        //教育
        { name: "广东省", value: 115 },
        { name: "四川省", value: 27 },
        { name: "重庆市", value: 13 },
        { name: "山东省", value: 7 },
        { name: "湖南省", value: 8 },
        { name: "福建省", value: 3 },
        { name: "山西省", value: 1 },
        { name: "湖北省", value: 36 },
        { name: "江苏省", value: 34 },
        { name: "上海市", value: 54 },
        { name: "云南省", value: 6 },
        { name: "北京市", value: 18 },
        { name: "广西壮族自治区", value: 12 },
        { name: "吉林省", value: 5 },
        { name: "江西省", value: 7 },
        { name: "安徽省", value: 11 },
        { name: "辽宁省", value: 2 },
        { name: "陕西省", value: 10 },
        { name: "浙江省", value: 20 },
        { name: "河南省", value: 5 },
        { name: "新疆维吾尔自治区", value: 1 },
        { name: "贵州省", value: 3 },
        { name: "黑龙江省", value: 1 },
        { name: "天津市", value: 1 },
      ],[
        //科研
        { name: "广西壮族自治区", value: 5 },
        { name: "浙江省", value: 106 },
        { name: "江苏省", value: 89 },
        { name: "北京市", value: 86 },
        { name: "四川省", value: 42 },
        { name: "湖北省", value: 99 },
        { name: "新疆维吾尔自治区", value: 7 },
        { name: "陕西省", value: 18 },
        { name: "上海市", value: 143 },
        { name: "黑龙江省", value: 9 },
        { name: "重庆市", value: 14 },
        { name: "广东省", value: 223 },
        { name: "河南省", value: 12 },
        { name: "云南省", value: 17 },
        { name: "贵州省", value: 4 },
        { name: "江西省", value: 11 },
        { name: "山西省", value: 18 },
        { name: "湖南省", value: 21 },
        { name: "安徽省", value: 5 },
        { name: "天津市", value: 5 },
        { name: "辽宁省", value: 14 },
        { name: "山东省", value: 28 },
        { name: "海南省", value: 3 },
        { name: "吉林省", value: 4 },
        { name: "甘肃省", value: 2 },
        { name: "福建省", value: 10 },
        { name: "河北省", value: 3 },
        { name: "宁夏回族自治区", value: 1 },
        { name: "青海省", value: 1 },
      ],[
        //旅游
        { name: "上海市", value: 70 },
        { name: "四川省", value: 56 },
        { name: "广东省", value: 76 },
        { name: "重庆市", value: 11 },
        { name: "云南省", value: 44 },
        { name: "陕西省", value: 11 },
        { name: "江苏省", value: 24 },
        { name: "湖北省", value: 19 },
        { name: "江西省", value: 1 },
        { name: "山东省", value: 10 },
        { name: "河南省", value: 9 },
        { name: "浙江省", value: 17 },
        { name: "福建省", value: 2 },
        { name: "广西壮族自治区", value: 6 },
        { name: "黑龙江省", value: 9 },
        { name: "河北省", value: 2 },
        { name: "辽宁省", value: 7 },
        { name: "北京市", value: 14 },
        { name: "新疆维吾尔自治区", value: 4 },
        { name: "内蒙古自治区", value: 2 },
        { name: "天津市", value: 2 },
        { name: "山西省", value: 1 },
        { name: "湖南省", value: 1 },
        { name: "安徽省", value: 1 },
        { name: "甘肃省", value: 1 },
      ],[
        //汽车
        { name: "广东省", value: 37 },
        { name: "浙江省", value: 11 },
        { name: "湖北省", value: 18 },
        { name: "江苏省", value: 27 },
        { name: "重庆市", value: 13 },
        { name: "四川省", value: 21 },
        { name: "上海市", value: 16 },
        { name: "甘肃省", value: 2 },
        { name: "云南省", value: 8 },
        { name: "贵州省", value: 1 },
        { name: "江西省", value: 7 },
        { name: "陕西省", value: 1 },
        { name: "安徽省", value: 7 },
        { name: "北京市", value: 3 },
        { name: "海南省", value: 1 },
        { name: "河北省", value: 2 },
        { name: "湖南省", value: 1 },
        { name: "内蒙古自治区", value: 1 },
        { name: "山东省", value: 1 },
        { name: "河南省", value: 2 },
      ],[
        //软件
        { name: "江苏省", value: 30 },
        { name: "陕西省", value: 22 },
        { name: "上海市", value: 26 },
        { name: "广东省", value: 57 },
        { name: "湖北省", value: 10 },
        { name: "安徽省", value: 8 },
        { name: "四川省", value: 9 },
        { name: "北京市", value: 7 },
        { name: "湖南省", value: 10 },
        { name: "浙江省", value: 9 },
        { name: "辽宁省", value: 4 },
        { name: "重庆市", value: 3 },
        { name: "福建省", value: 1 },
        { name: "江西省", value: 1 },
        { name: "天津市", value: 1 },
        { name: "山西省", value: 1 },
        { name: "山东省", value: 1 },
      ], [
        //新能源
        { name: "广东省", value: 130 },
        { name: "江苏省", value: 41 },
        { name: "上海市", value: 65 },
        { name: "湖北省", value: 17 },
        { name: "云南省", value: 10 },
        { name: "四川省", value: 26 },
        { name: "重庆市", value: 10 },
        { name: "甘肃省", value: 5 },
        { name: "浙江省", value: 16 },
        { name: "安徽省", value: 10 },
        { name: "山西省", value: 4 },
        { name: "河北省", value: 5 },
        { name: "广西壮族自治区", value: 21 },
        { name: "天津市", value: 3 },
        { name: "辽宁省", value: 3 },
        { name: "山东省", value: 3 },
        { name: "海南省", value: 1 },
        { name: "北京市", value: 16 },
        { name: "湖南省", value: 5 },
        { name: "陕西省", value: 5 },
        { name: "宁夏回族自治区", value: 1 },
        { name: "福建省", value: 1 },
        { name: "河南省", value: 2 },
      ],[
        //冶炼
        { name: "江苏省", value: 42 },
        { name: "贵州省", value: 29 },
        { name: "江西省", value: 55 },
        { name: "上海市", value: 19 },
        { name: "广西壮族自治区", value: 12 },
        { name: "湖南省", value: 28 },
        { name: "河南省", value: 6 },
        { name: "浙江省", value: 21 },
        { name: "广东省", value: 41 },
        { name: "山东省", value: 6 },
        { name: "河北省", value: 10 },
        { name: "安徽省", value: 23 },
        { name: "辽宁省", value: 5 },
        { name: "四川省", value: 28 },
        { name: "云南省", value: 7 },
        { name: "陕西省", value: 14 },
        { name: "湖北省", value: 25 },
        { name: "福建省", value: 4 },
        { name: "青海省", value: 4 },
        { name: "北京市", value: 12 },
        { name: "重庆市", value: 3 },
        { name: "新疆维吾尔自治区", value: 2 },
        { name: "黑龙江省", value: 1 },
        { name: "宁夏回族自治区", value: 2 },
        { name: "内蒙古自治区", value: 1 },
      ], [
        //影视
        { name: "广东省", value: 88 },
        { name: "云南省", value: 6 },
        { name: "浙江省", value: 10 },
        { name: "上海市", value: 28 },
        { name: "江苏省", value: 9 },
        { name: "山东省", value: 12 },
        { name: "辽宁省", value: 2 },
        { name: "安徽省", value: 1 },
        { name: "北京市", value: 11 },
        { name: "湖北省", value: 9 },
        { name: "陕西省", value: 5 },
        { name: "海南省", value: 4 },
        { name: "福建省", value: 6 },
        { name: "重庆市", value: 2 },
        { name: "湖南省", value: 3 },
        { name: "江西省", value: 2 },
        { name: "四川省", value: 2 },
      ], [
        //硬件
        { name: "广东省", value: 69 },
        { name: "江苏省", value: 14 },
        { name: "上海市", value: 39 },
        { name: "湖南省", value: 12 },
        { name: "湖北省", value: 19 },
        { name: "四川省", value: 11 },
        { name: "安徽省", value: 5 },
        { name: "陕西省", value: 8 },
        { name: "浙江省", value: 10 },
        { name: "重庆市", value: 2 },
        { name: "北京市", value: 6 },
        { name: "辽宁省", value: 2 },
        { name: "黑龙江省", value: 1 },
        { name: "河北省", value: 1 },
        { name: "云南省", value: 1 },
      ], [
        //政府
        { name: "安徽省", value: 5 },
        { name: "江苏省", value: 40 },
        { name: "河南省", value: 7 },
        { name: "广东省", value: 113 },
        { name: "浙江省", value: 30 },
        { name: "四川省", value: 23 },
        { name: "陕西省", value: 12 },
        { name: "上海市", value: 54 },
        { name: "湖北省", value: 39 },
        { name: "北京市", value: 18 },
        { name: "山东省", value: 3 },
        { name: "海南省", value: 2 },
        { name: "湖南省", value: 7 },
        { name: "云南省", value: 9 },
        { name: "福建省", value: 5 },
        { name: "天津市", value: 3 },
        { name: "重庆市", value: 10 },
        { name: "山西省", value: 1 },
        { name: "辽宁省", value: 5 },
        { name: "内蒙古自治区", value: 1 },
        { name: "江西省", value: 5 },
        { name: "黑龙江省", value: 1 },
        { name: "河北省", value: 4 },
        { name: "广西壮族自治区", value: 3 },
      ], [
        //中介
        { name: "广东省", value: 66 },
        { name: "河南省", value: 4 },
        { name: "上海市", value: 50 },
        { name: "江苏省", value: 87 },
        { name: "重庆市", value: 24 },
        { name: "四川省", value: 33 },
        { name: "湖北省", value: 21 },
        { name: "浙江省", value: 27 },
        { name: "北京市", value: 27 },
        { name: "黑龙江省", value: 1 },
        { name: "陕西省", value: 11 },
        { name: "海南省", value: 2 },
        { name: "湖南省", value: 12 },
        { name: "安徽省", value: 3 },
        { name: "内蒙古自治区", value: 1 },
        { name: "福建省", value: 4 },
        { name: "河北省", value: 2 },
        { name: "山东省", value: 8 },
        { name: "辽宁省", value: 3 },
        { name: "云南省", value: 2 },
        { name: "广西壮族自治区", value: 2 },
        { name: "江西省", value: 7 },
        { name: "天津市", value: 2 },
        { name: "贵州省", value: 1 },
      ],
      ],
      types:[
            "办公",
            "餐饮",
            "房产",
            "服装",
            "广告",
            "护理",
            "家具",
            "检测",
            "建筑",
            "教育",
            "科研",
            "旅游",
            "汽车",
            "软件",
            "新能源",
            "冶炼",
            "影视",
            "硬件",
            "政府",
            "中介",
          ]
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var option = {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            // console.log(params);
            var value = params.value ? params.value : 0;
            return params.seriesName + "<br/>" + params.name + " : " + value;
          },
        },
        // 图例按钮，点击可选择哪些不显示
        legend: {
          orient: "vertical",
          selectedMode: "single", // 单选
          left: "right",
          top: "bottom",
          data: [
            "办公",
            "餐饮",
            "房产",
            "服装",
            "广告",
            "护理",
            "家具",
            "检测",
            "建筑",
            "教育",
            "科研",
            "旅游",
            "汽车",
            "软件",
            "新能源",
            "冶炼",
            "影视",
            "硬件",
            "政府",
            "中介",
          ],
          textStyle: {
            color: "#ff69b4",
          },
        },
        visualMap: {
          min: 0,
          max: 400,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        geo: {
          map: "china",
          roam: true,
          scaleLimit: {
            min: 1,
            max: 30,
          },
          zoom: 1.23,
          top: 120,
          label: {
            normal: {
              show: false,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "#ff69b4", //地区边框颜色
            },
            emphasis: {
              areaColor: "#ff69b4",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
          },
        },
        // 系列列表
        series: [
          {
            name: "办公",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.bangong,
          },
          {
            name: "餐饮",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: [],
          },
          {
            name: "房产",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data:[],
          },
          {
            name: "服装",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data:[],
          },
          {
            name: "广告",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.guanggao,
          },
          {
            name: "护理",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.huli,
          },
          {
            name: "家具",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jiaju,
          },
          {
            name: "检测",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jiance,
          },
          {
            name: "建筑",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jianzhu,
          },
          {
            name: "教育",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jiaoyu,
          },
          {
            name: "科研",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.keyan,
          },
          {
            name: "旅游",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.lvyou,
          },
          {
            name: "汽车",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.qiche,
          },
          {
            name: "软件",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.ruanjian,
          },
          {
            name: "新能源",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.xinnengyuan,
          },
          {
            name: "冶炼",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.yelian,
          },
          {
            name: "影视",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.yingshi,
          },
          {
            name: "硬件",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.yingjian,
          },
          {
            name: "政府",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.zhengfu,
          },
          {
            name: "中介",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.zhongjie,
          },
        ],
      };

      const series=[];
      for(let i=0;i<this.types.length;i++){
        var oneseries={
            name: this.types[i],
            type: "map",
            geoIndex: 0,
            label: {
              show: i==0,
            },
            data:this.datas[i],
          }
          series.push(oneseries)
      }
      option.series=series;
      console.log(option.series)
      // 使用ECharts初始化地图
      this.chinaMap = this.$echarts.init(this.$refs.echartsMap);
      //注册地图
      this.$echarts.registerMap("china", map);

      // 使用刚指定的配置项和数据显示图表
      this.chinaMap.setOption(option, { notMerge: true, lazyUpdate: false });
      this.chinaMap.on("legendselectchanged", this.handleLegendClick);
    },
    handleLegendClick(params){
      console.log(params)
      var option = {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            // console.log(params);
            var value = params.value ? params.value : 0;
            return params.seriesName + "<br/>" + params.name + " : " + value;
          },
        },
        // 图例按钮，点击可选择哪些不显示
        legend: {
          selected:params.selected,
          orient: "vertical",
          selectedMode: "single", // 单选
          left: "right",
          top: "bottom",
          data: [
            "办公",
            "餐饮",
            "房产",
            "服装",
            "广告",
            "护理",
            "家具",
            "检测",
            "建筑",
            "教育",
            "科研",
            "旅游",
            "汽车",
            "软件",
            "新能源",
            "冶炼",
            "影视",
            "硬件",
            "政府",
            "中介",
          ],
          textStyle: {
            color: "#ff69b4",
          },
        },
        visualMap: {
          min: 0,
          max: 400,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        geo: {
          map: "china",
          roam: true,
          scaleLimit: {
            min: 1,
            max: 30,
          },
          zoom: 1.23,
          top: 120,
          label: {
            normal: {
              show: false,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "#ff69b4", //地区边框颜色
            },
            emphasis: {
              areaColor: "#ff69b4",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
          },
        },
        // 系列列表
        series: [
          {
            name: "办公",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.bangong,
          },
          {
            name: "餐饮",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: [],
          },
          {
            name: "房产",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data:[],
          },
          {
            name: "服装",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data:[],
          },
          {
            name: "广告",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.guanggao,
          },
          {
            name: "护理",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.huli,
          },
          {
            name: "家具",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jiaju,
          },
          {
            name: "检测",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jiance,
          },
          {
            name: "建筑",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jianzhu,
          },
          {
            name: "教育",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.jiaoyu,
          },
          {
            name: "科研",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.keyan,
          },
          {
            name: "旅游",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.lvyou,
          },
          {
            name: "汽车",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.qiche,
          },
          {
            name: "软件",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.ruanjian,
          },
          {
            name: "新能源",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.xinnengyuan,
          },
          {
            name: "冶炼",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.yelian,
          },
          {
            name: "影视",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.yingshi,
          },
          {
            name: "硬件",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.yingjian,
          },
          {
            name: "政府",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.zhengfu,
          },
          {
            name: "中介",
            type: "map",
            geoIndex: 0,
            label: {
              show: true,
            },
            data: this.zhongjie,
          },
        ],
      };
      const series=[];
      for(let i=0;i<this.types.length;i++){
        if(this.types[i]==params.name){
          var oneseries1={
            name: this.types[i],
            type: "map",
            geoIndex: 0,
            label: {
              show: this.types[i]==params.name,
            },
            data:this.datas[i],
          }
          series.push(oneseries1)
        }}
        for(let i=0;i<this.types.length;i++){
          if(this.types[i]!=params.name){
        var oneseries={
            name: this.types[i],
            type: "map",
            geoIndex: 0,
            label: {
              show: this.types[i]==params.name,
            },
            data:this.datas[i],
          }
          series.push(oneseries)
          }
      }
      option.series=series;
      console.log(option)
      this.chinaMap.setOption(option, { notMerge: true, lazyUpdate: false });

    }
  },
};
</script>

<style>
</style>