<template>
    <img ref="myImage" :alt="alt" />
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
