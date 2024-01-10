<template>
  <el-form ref="form" :model="form" label-width="80px" style="margin-left:-5%">
    <el-form-item label="分类">
      <el-select
        v-model="form.refer"
        placeholder="请选择类别"
        :disabled="canChooseType"
      >
        <el-option
          v-for="item in types"
          :key="item.id"
          :label="item.type"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="标题" >
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input
        type="textarea"
        v-model="form.content"
        :autosize="{ minRows: 5, maxRows: 50 }"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">发布贴子</el-button>
      <el-button @click="this.closeDialog">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import http from "../util/request";

export default {
  name: "SendPost",
  data() {
    return {
      types: [
        {
          id: 1,
          type: "大学课程",
        },
        {
          id: 2,
          type: "生活相关",
        },
        {
          id: 3,
          type: "考研保研",
        },
        {
          id: 4,
          type: "工作",
        },
        {
          id: 5,
          type: "其他",
        },
      ],
      form: {
        refer: 1,
        title: "",
        content: "",
      },
    };
  },
  props:{
    closeDialog: {
      //父组件PostList的关闭方法
      type: Function,
      require: true,
      default: null,
    },
  },
  methods:{
    onSubmit(){
      http
          .post("/addPost", this.form)
          .then((res) => {
            if (res.status >= 200 && res.status <= 300) {
              if (res.data.resultCode === 1) {
                this.$message.success("发布成功");
                this.$router.push({name: 'postDetail', params: {postId: res.data.data} });
              } else {
                this.$message.warning(res.data.data.message);
              }
            } else {
              this.$message.error("error");
              console.log(res.error);
            }
          })
          .catch((error) => {
            // 处理错误情况
            this.$message.error(error);
          });
    },
  }
};
</script>

<style>
</style>