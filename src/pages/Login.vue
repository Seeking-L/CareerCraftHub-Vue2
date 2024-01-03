<template>
  <div class="center">
    <div class="logon">
      <div :class="overlaylong">
        <div class="overlaylong-Signin" v-if="disfiex == 0">
          <h2 class="overlaylongH2" v-if="ifdisplay == 1">Sign in</h2>
          <el-form
            label-width="0px"
            class="login_form"
            v-if="ifdisplay == 1"
            :model="signinForm"
            :rules="signinFormRules"
            ref="loginFormRef"
          >
            <el-form-item prop="userphone">
              <el-input
                v-model="signinForm.userphone"
                placeholder="userphone/email"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="signinForm.password"
                placeholder="password"
              />
            </el-form-item>
            <h3>Forgot your password?</h3>
            <!--待添加，忘记密码功能-->
            <el-form-item>
              <button type="button" class="inupbutton" @click="login">
                Sign in
              </button>
            </el-form-item>
          </el-form>
        </div>
        <div class="overlaylong-Signup" v-if="disfiex == 1">
          <h2 class="overlaylongH2" v-if="ifdisplay == 1">
            Registered Account
          </h2>
          <el-form
            label-width="0px"
            class="login_form"
            v-if="ifdisplay == 1"
            :model="signupForm"
            :rules="signupFormRules"
            ref="signupFormRef"
          >
            <el-form-item prop="newusername">
              <el-input
                type="text"
                placeholder="username"
                v-model="signupForm.newusername"
              />
            </el-form-item>
            <el-form-item prop="newpassword">
              <el-input
                type="password"
                placeholder="password"
                v-model="signupForm.newpassword"
              />
            </el-form-item>
            <el-form-item prop="newuserphone">
              <el-input
                type="text"
                placeholder="userphone"
                v-model="signupForm.newuserphone"
                :disabled="inputPhoneDisabled"
              />
            </el-form-item>
            <el-form-item>
              <el-input
                class="bind_code_input code"
                type="text"
                placeholder="请输入验证码"
                :disabled="inputCodeDisabled"
                v-model="signupForm.code"
              >
                <el-button
                  slot="append"
                  @click.native.prevent="bindforgetSendCode"
                  :disabled="sendCodeDisabled"
                  >{{ this.btnTxt }}</el-button
                >
              </el-input>
            </el-form-item>
            <el-form-item>
              <button
                type="button"
                class="inupbutton"
                @click="tryRegister"
              >
                Sign up
              </button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div :class="overlaytitle">
        <div class="overlaytitle-Signin" v-if="disfiex == 0">
          <h2 class="overlaytitleH2" v-if="ifdisplay == 1">Hello,Friend!</h2>
          <p class="overlaytitleP" v-if="ifdisplay == 1">
            Enter your personal details and start journey with us
          </p>
          <div class="buttongohs" @click="SigninUI" v-if="ifdisplay == 1">
            Sign up
          </div>
        </div>
        <div class="overlaytitle-Signup" v-if="disfiex == 1">
          <h2 class="overlaytitleH2" v-if="ifdisplay == 1">Welcome Back!</h2>
          <p class="overlaytitleP" v-if="ifdisplay == 1">
            To keep connected with us please login with your personal info
          </p>
          <div class="buttongohs" @click="SignupUI" v-if="ifdisplay == 1">
            Sign in
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../util/request";

export default {
  name: "LogIn",
  data() {
    return {
      //控制UI
      overlaylong: "overlaylong",
      overlaytitle: "overlaytitle",
      disfiex: 0,
      ifdisplay: 1,

      //表单
      signinForm: {
        userphone: "",
        password: "",
      },
      signupForm: {
        newusername: "",
        newpassword: "",
        newuserphone: "",
        code: "",
      },
      //表单验证规则
      signinFormRules: {
        //验证用户名
        userphone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 1,
            max: 1000,
            // message: "长度在 3 到 10 个字符",
            message: "格式错误",
            trigger: "blur",
          },
        ],
        //验证密码
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 1,
            max: 1000,
            // message: "长度在 6 到 15 个字符",
            message: "格式错误",
            trigger: "blur",
          },
        ],
      },
      signupFormRules: {
        //验证用户名
        newusername: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "格式错误",
            trigger: "blur",
          },
        ],
        //验证密码
        newpassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "格式错误",
            trigger: "blur",
          },
        ],
        newuserphone: [
          { required: true, trigger: "blur", message: "请输入11位手机号" },
          {
            required: true,
            trigger: "blur",
            min: 11,
            max: 11,
            message: "长度不符合",
          },
          {
            pattern: /^1[35789]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        code: [],
      },

      //验证码按钮
      btnTxt: "获取验证码", //验证码按钮上的文字
      codeBtnTime: 60, //点击后的倒计时
      sendCodeDisabled: false, //是否可用
      //验证码输入
      inputCodeDisabled: true,

      //注册手机号
      inputPhoneDisabled: false, //注册页手机号输入是否可改
    };
  },
  methods: {
    SigninUI() {
      this.overlaylong = "overlaylongleft";
      this.overlaytitle = "overlaytitleright";
      this.ifdisplay = 0;
      setTimeout(() => {
        this.disfiex = 1;
      }, 500);
      setTimeout(() => {
        this.ifdisplay = 1;
      }, 600);
    },
    SignupUI() {
      this.overlaylong = "overlaylongright";
      this.overlaytitle = "overlaytitleleft";
      this.ifdisplay = 0;

      setTimeout(() => {
        this.disfiex = 0;
      }, 500);
      setTimeout(() => {
        this.ifdisplay = 1;
      }, 600);
    },
    login() {
      // 登录预验证 返回布尔值
      this.$refs.loginFormRef.validate(async (valid) => {
        // async异步和await配套
        if (!valid) return false;
        // 发起请求，拿到服务器返回的数据
        http
          .post("/login", {
            //用post方法传 输入框输入的用户名和密码
            userphone: this.signinForm.userphone,
            password: this.signinForm.password,
          })
          .then((res) => {
            if (res.status >= 200 && res.status <= 300) {
              if (res.data.resultCode === 1) {
                this.$message.success("登录成功");
                console.log(res.data.data.token);
                //存储token和user对象到localstorage
                this.$store.commit("setToken", res.data.data.token);
                this.$store.commit("setUser", res.data.data.user);
                this.$router.replace({
                  path: "/",
                });
              } else {
                this.$message.warning(res.data.msg);
              }
            } else {
              this.$message.error("error");
              console.log(res.error);
            }
          })
          .catch((error) => {
            // 处理错误情况
            alert("error");
            console.log(error);
            // // 用拿到的后台状态数据进行判断登录
            // if (res.data.meta.status !== 200) return this.$message.error('登录失败')
            // this.$message.success('登录成功')
            // 将返回的token保存到客户端的sessionStorage中。
            // window.sessionStorage.setItem('token', res.data.meta.token)
            // 跳转到后台主页
            // this.$router.push('/home')
          });
      });
    },
    bindforgetSendCode() {
      console.log(this.signupForm.newuserphone);
      // 预验证 返回布尔值
      this.$refs.signupFormRef.validate(async (valid) => {
        // async异步和await配套
        if (!valid) return false;
        // 发起请求，拿到服务器返回的数据
        http
          .post("/sendcode", {
            //用post方法传 输入框输入的用户手机号
            userphone: this.signupForm.newuserphone,
          })
          .then((res) => {
            if (res.status >= 200 && res.status <= 300) {
              if (res.data.resultCode === 1) {
                //后端已成功发送验证码
                this.codeBtnTime = 60;
                this.sendCodeDisabled = true;
                //调用倒计时方法
                this.timer();
                this.inputPhoneDisabled = true;
                this.inputCodeDisabled = false;
                this.signinFormRules.code = [
                  //添加code的校验规则
                  {
                    required: true,
                    trigger: "blur",
                    message: "请输入6位验证码",
                  },
                  {
                    required: true,
                    trigger: "blur",
                    min: 6,
                    max: 6,
                    message: "验证码错误",
                  },
                ];
              } else {
                this.$message.warning(res.data.msg);
              }
            } else {
              this.$message.error(res.error);
              console.log(res.error);
            }
          })
          .catch((error) => {
            // 处理错误情况
            alert("error");
            console.log(error);
          });
      });
    },
    timer() {
      //验证码发送按钮倒计时
      if (this.codeBtnTime > 0) {
        this.codeBtnTime--;
        this.btnTxt = this.codeBtnTime + "s";
        setTimeout(this.timer, 1000);
      } else {
        this.codeBtnTime = 0;
        this.btnTxt = "获取验证码";
        this.sendCodeDisabled = false;
        this.inputPhoneDisabled = false;
      }
    },
    tryRegister() {
      console.log(this.signupForm.newuserphone);
      // 预验证 返回布尔值
      this.$refs.signupFormRef.validate(async (valid) => {
        // async异步和await配套
        if (!valid) return false;
        // 发起请求，拿到服务器返回的数据
        http
          .post("/register", {
            //用post方法传 输入框输入的注册信息
            username: this.signupForm.newusername,
            userphone: this.signupForm.newuserphone,
            password: this.signupForm.newpassword,
            code: this.signupForm.code,
          })
          .then((res) => {
            if (res.status >= 200 && res.status <= 300) {
              if (res.data.resultCode === 1) {
                //do something
                this.$message.success("注册成功");
                console.log(res.data.data.token);
                //存储token和user对象到localstorage
                this.$store.commit("setToken", res.data.data.token);
                this.$store.commit("setUser", res.data.data.user);
                this.$router.replace({
                  path: "/",
                });
              } else {
                this.$message.warning(res.data.msg);
              }
            } else {
              this.$message.error(res.error);
              console.log(res.error);
            }
          })
          .catch((error) => {
            // 处理错误情况
            alert("error");
            console.log(error);
          });
      });
    },
  },
};
</script>

<style scoped>
.center {
  /* width: 1920px;
  height: 1080px; */
  margin-top: 2%;
  /* width: 100%;
  height: 100%; */
  width: 1500px;
  height: 600px;
  /* background-image: url("https://gd-hbimg.huaban.com/9165dc3c0f8279ae5402d1f47212847bff68b49f3cb547-QEli8R"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-size: 30px;
  color: black;
}

.logon {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* position: relative;
		overflow: hidden; */
  width: 50%;
  max-width: 100%;
  min-height: 480px;
  margin-top: 20px;
  display: flex;
  background: -webkit-linear-gradient(right, #d8d65f, #f98f1d);
}

.overlaylong {
  border-radius: 10px 0 0 10px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaylongleft {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 480px;
  background-color: #fff;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaylongright {
  border-radius: 10px 0 0 10px;
  width: 50%;
  height: 480px;
  background-color: #fff;
  transform: translateX(0%);
  transition: transform 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaytitle {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlaytitleH2 {
  font-size: 30px;
  color: #fff;
  margin-top: 20px;
}

.overlaytitleP {
  font-size: 15px;
  color: #fff;
  margin-top: 20px;
}

.overlaytitleleft {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0%);
  transition: transform 0.6s ease-in-out;
}

.overlaytitleright {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;
}

.overlaytitle-Signin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.overlaytitle-Signup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.buttongohs {
  width: 180px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  margin-top: 40px;
}

.overlaylongH2 {
  font-size: 25px;
  color: black;
  /* width: 250px; */
}

.overlaylong-Signin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.overlaylong-Signup {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.el-input {
  background-color: #eee;
  border: none;
  /* padding: 12px 15px; */
  margin: 3px 0;
  width: 240px;
}
.el-button {
  margin: 0 0;
}

h3 {
  font-size: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.inupbutton {
  background-color: #f98f1d;
  border: none;
  width: 180px;
  height: 40px;
  border-radius: 50px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-top: 25px;
  margin-left: 10%;
}
</style>