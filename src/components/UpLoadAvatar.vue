<template>
  <el-upload
    class="upload-demo"
    action="http://localhost:8080/uploadAvatar"
    :headers="this.headers"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
    :on-success="handleAvatarSuccess"
    :limit="1"
  >
    <el-button size="small" type="primary">上传头像</el-button>
    <div slot="tip" class="el-upload__tip">
      只能上传jpg/png文件,且不超过2MB
    </div>
  </el-upload>
</template>

<script>
export default {
  name: "UpLoadAvatar",
  data() {
    return {};
  },
  computed: {
    headers(){
      const jwt=localStorage.getItem('token')
      return{
        token:jwt
      };
    },
  },
  methods: {
    beforeAvatarUpload(file) {
      //在头像上传之前需要做的判断，如判断文件大小
      const isLt2M = file.size / 1024 / 1024 < 2;//限制为2MB
      return isLt2M
    },
    handleAvatarSuccess(res) {
        console.log("new avatar: "+res.data)
      const newAvatar=res.data
      const user=JSON.parse(this.$store.state.user)
      user.avatar=newAvatar
      this.$store.commit("setUser",user)
      location.reload();
    },
  },
};
</script>

<style>
</style>