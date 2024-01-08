<template>
  <div class="home">
    <div class="carousel-container">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in pictureList" :key="item.url">
          <img :src="item.url" alt="轮播图片" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="category-container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category"
        @mouseover="showSubcategories(category.id)"
        @mouseleave="hideSubcategories"
      >
        <h3>{{ category.name }}</h3>
        <transition name="fade">
          <div v-show="showSubcategory === category.id" class="subcategory">
            <p v-for="subCategory in category.subcategories" :key="subCategory.id">{{ subCategory.name }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "StudyList",
  components: {},
  data() {
    return {
      //定义跑马灯的图片路径
      pictureList: [
        { url: require("../assets/image1.png") },
        { url: require("../assets/image2.png") },
        { url: require("../assets/image3.png") },
      ],
      categories: [
        {
          id: 1,
          name: "大学课程",
          subcategories: ["文学", "数学", "历史"],
        },
        {
          id: 2,
          name: "计算机课程",
          subcategories: ["编程", "数据库", "网络"],
        },
        {
          id: 3,
          name: "考研课程",
          subcategories: ["专业课", "英语", "数学"],
        },
        {
          id: 4,
          name: "生物课程",
          subcategories: ["生态学", "分子生物学", "植物学"],
        },
        {
          id: 5,
          name: "艺术课程",
          subcategories: ["绘画", "音乐", "雕塑"],
        },
        {
          id: 6,
          name: "语言课程",
          subcategories: ["英语", "法语", "西班牙语"],
        },
        // Add more categories as needed
      ],
      showSubcategory: null,
    };
  },
  methods: {
    showSubcategories(categoryId) {
      this.showSubcategory = categoryId;
    },
    hideSubcategories() {
      this.showSubcategory = null;
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: -0.5pc; /* 避免与导航栏发生重叠 */
  display: flex;
  justify-content: center; /* 水平居中 */
}

.carousel-container {
  width: 80%; /* 调整跑马灯容器的宽度，根据实际需要调整 */
  margin-top: 1pc; /* 调整距离上方的边距，根据实际需要调整 */
}

.carousel-image {
  width: auto; /* 图片宽度占满容器 */
  height: 100%; /* 高度自适应 */
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 80%;
}

.category {
  position: relative;
  flex: 0 1 calc(30% - 20px);
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f0f0f0;
  cursor: pointer;
  overflow: hidden;
}

.category:hover {
  background-color: #dcdcdc;
}

.subcategory {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-enter-active {
  opacity: 1;
}


</style>