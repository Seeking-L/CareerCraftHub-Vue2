<template>
  <el-main>
    <el-card class="box-card" style="margin-bottom:50px" shadow="always">
      <div slot="header" class="clearfix">
        <h3>公务员</h3>
      </div>
      <div v-for="(item, index) in this.PublicServants" :key="index">
        <el-row
          @click.native="downloadFile(item.pdfName, item.category)"
          style="cursor: pointer;margin-top:3px;border-radius: 5px 5px 5px 5px;"
        >
          <el-col :span="20" style="margin-top:10px">
            <cyText :value="item.category" row="1" style="margin-left: 10px" />
          </el-col>
          <el-col :span="4" style="margin-top:10px">
            <span>{{ item.examDate }}</span>
          </el-col>
          <el-divider />
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-bottom:50px" shadow="always">
      <div slot="header" class="clearfix">
        <h3>教师资格</h3>
      </div>
      <div v-for="(item, index) in this.TeacherQualifications" :key="index">
        <el-row
          @click.native="downloadFile(item.pdfName, item.category)"
          style="cursor: pointer;margin-top:3px;border-radius: 5px 5px 5px 5px;"
        >
          <el-col :span="20" style="margin-top:10px">
            <cyText :value="item.category" row="1" style="margin-left: 10px" />
          </el-col>
          <el-col :span="4" style="margin-top:10px">
            <span>{{ item.examDate }}</span>
          </el-col>
          <el-divider />
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-bottom:50px" shadow="always">
      <div slot="header" class="clearfix">
        <h3>软考</h3>
      </div>
      <div v-for="(item, index) in this.SoftTest" :key="index">
        <el-row
          @click.native="downloadFile(item.pdfName, item.category)"
          style="cursor: pointer;margin-top:3px;border-radius: 5px 5px 5px 5px;"
        >
          <el-col :span="20" style="margin-top:10px">
            <cyText :value="item.category" row="1" style="margin-left: 10px" />
          </el-col>
          <el-col :span="4" style="margin-top:10px">
            <span>{{ item.examDate }}</span>
          </el-col>
          <el-divider />
        </el-row>
      </div>
    </el-card>
  </el-main>
</template>

<script>
import cyText from "../components/CyText.vue";
import http from "../util/request";

export default {
  name: "TestPage",
  components: { cyText },
  data() {
    return {
      PublicServants: [{ category: "", examDate: "", pdfName: "", type: "" }],
      TeacherQualifications: [
        { category: "", examDate: "", pdfName: "", type: "" },
      ],
      SoftTest: [{ category: "", examDate: "", pdfName: "", type: "" }],
    };
  },
  mounted() {
    http
      .get("/getExam", {
        params: {
          type: this.$route.params.type,
        },
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          if (res.data.resultCode === 1) {
            console.log(res.data.data);
            this.PublicServants = res.data.data.PublicServants;
            this.TeacherQualifications = res.data.data.TeacherQualifications;
            this.SoftTest = res.data.data.SoftTest;
          } else {
            this.$message.error(res.data.message);
          }
        } else {
          this.$message.error(res.error);
          console.log(res.error);
        }
      })
      .catch((error) => {
        // 处理错误情况
        this.$message.error(error);
        console.log(error);
      });
  },
  methods: {
    downloadFile(str, filename) {
      // 发送请求到后端的文件下载API
      // 请求后端接口，获取文件流
      http({
        method: "get",
        url: "/downloadExam", // 替换成实际的后端接口地址
        responseType: "blob", // 指定响应类型为二进制流
        params: {
          pdf: str, //请求参数
        },
      })
        .then((response) => {
          // 创建一个Blob对象，并指定 MIME 类型
          const blob = new Blob([response.data], { type: "application/pdf" });

          // 创建一个a标签
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);

          // 设置下载的文件名
          link.download = filename + ".pdf"; // 你可以根据后端的设置来指定文件名

          // 添加到页面中，模拟点击进行下载
          document.body.appendChild(link);
          link.click();

          // 移除a标签
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("文件下载失败", error);
        });
    },
  },
};
</script>

<style scoped>
.el-row:hover {
  background-color: #eded8e;
}
.el-divider{
    margin: 30px 0px 15px 0px;
    border-top: 0.5px solid  #e8eaec;
  }
  .el-card {
  /* background-color: #ffc0cb; */
  /* background-color: #ffe4e1; */
  background-color: #fffff5;
  border-radius: 12px;
}
</style>