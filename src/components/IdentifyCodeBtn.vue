<template>
  <el-button
    :disabled="isDisabled"
    size="small"
    type="primary"
    @click="getIdentifyCodeBtn"
  >
    {{ isDisabled ? count + "s后获取" : click }}
  </el-button>
</template>

<script>
export default {
  name: "IdentifyCodeBtn",
  data() {
    return {
      count: "59",
      click: "获取短信验证码",
      isDisabled: false,
    };
  },
  props: {
    userphone: String,
    required: true,
  },
  methods: {
    //验证码
    getIdentifyCodeBtn() {
      if (typeof this.userphone=='string' &&this.userphone.length>0) {
        this.$message({
          showClose: true,
          message: "手机号格式不正确",
          type: "error",
        });
        return false;
      }
      getIdentifyCode({
        phoneNumber: this.uphone,
        language: this.$store.state.language,
      }).then((result) => {
        const { code, data } = result;
        if (code == 200) {
          this.countTime(); //200才需要发送验证码，发送手机短信后倒计时便开启
          this.$message({
            showClose: true,
            message: "短信验证码发送成功",
            type: "success",
          });
        }
      });
    },
    // 倒计时
    countTime() {
      const TIME_COUNT = 60; //倒计时60秒
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.isDisabled = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.isDisabled = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>
 