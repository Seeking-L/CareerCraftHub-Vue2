<template>
    <img ref="myImage" :alt="alt" class="auth-img" />
</template>

<script>
export default {
  name: "ImgVue",
  props: {
    imgUrl: String,
    authToken: String,
    alt:String
  },
  // // 结合具体业务需求添加
  // watch: {
  //   imgUrl() {
  //     this.getImgUrl();
  //   },
  // },
  // methods: {
  //   getImgUrl() {
  //     Object.defineProperty(Image.prototype, "imgurl", {
  //       configurable: true,
  //       writable: true,
  //       enumerable: true,
  //     });
  //     let request = new XMLHttpRequest();
  //     request.responseType = "blob";
  //     request.open("get", this.imgUrl, true);
  //     request.setRequestHeader("token", this.authToken);
  //     let imgRef = this.$ref.authImg;
  //     request.onreadystatechange = () => {
  //       if (
  //         request.readyState == XMLHttpRequest.DONE &&
  //         request.status == 200
  //       ) {
  //         imgRef.src = URL.createObjectURL(request.response); // 将生成的blob对象的值赋值给img的src属性
  //         imgRef.onLoad = () => {
  //           URL.revokeObjectURL(imgRef.src); // 在图片加载完成后释放
  //         };
  //       }
  //     };
  //     request.send(null);
  //   },
  // },
  created() {
    this.loadImage();
  },

  methods: {
    loadImage() {
      const imageUrl = this.imgUrl;

      fetch(imageUrl, {
        headers: {
          'token':localStorage.getItem("token")
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then(blob => {
          const imageUrl = URL.createObjectURL(blob);
          // 将imageUrl设置到<img>标签的src属性中
          this.$refs.myImage.src = imageUrl;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    },
  },
};
</script>

<!-- 在 AuthImg.vue 组件中添加样式 -->
<style scoped>
.auth-img {
  max-width: 50px; /* 设置最大宽度，可以根据需要进行调整 */
  max-height: 50px; /* 设置最大高度，可以根据需要进行调整 */
  border-radius: 50%; /* 使图像呈圆形 */
  margin-left: 20px;
  cursor: pointer; /* 添加指针样式，以表示可点击 */
}

.auth-img:hover {
  transform: scale(1.1); /* 添加鼠标悬停时的缩放效果，可以根据需要进行调整 */
}
</style>
