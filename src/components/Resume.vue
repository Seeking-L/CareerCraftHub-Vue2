<template>
  <el-form
    ref="Resume"
    :model="Resume"
    label-width="80px"
    label-position="left"
  >
    <h3>基本信息</h3>
    <el-form-item
      label="姓名"
      @mouseover.native="toolName = true"
      @mouseout.native="toolName = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.name"
          :readonly="nameRO"
          @change="changeName"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-edit" v-show="toolName" @click="nameRO = false"></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="出生日期"
      @mouseover.native="toolbirth = true"
      @mouseout.native="toolbirth = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.birthday_date"
          :readonly="birthday_dateRO"
          @change="changeBirthdayDate"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolbirth"
          @click="birthday_dateRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="性别"
      @mouseover.native="toolGender = true"
      @mouseout.native="toolGender = false"
    >
      <el-col :span="5">
        <el-select
          v-model="Resume.gender"
          placeholder="选择性别"
          :disabled="genderRO"
          @change="changeGender"
        >
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolGender"
          @click="genderRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="毕业年份"
      @mouseover.native="toolGraduationYear = true"
      @mouseout.native="toolGraduationYear = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.graduation_year"
          :readonly="graduationYearRO"
          @change="changeGraduationYear"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolGraduationYear"
          @click="graduationYearRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="城市"
      @mouseover.native="toolCity = true"
      @mouseout.native="toolCity = false"
    >
      <el-col :span="5">
        <el-cascader
          size="large"
          :options="cityoptions"
          v-model="cityselectedOptions"
          :disabled="cityRO"
          @change="changeCity"
        >
        </el-cascader>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-edit" v-show="toolCity" @click="cityRO = false"></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="身份"
      @mouseover.native="toolIdentity = true"
      @mouseout.native="toolIdentity = false"
    >
      <el-col :span="5">
        <el-select
          v-model="Resume.identity"
          placeholder="选择身份"
          :disabled="identityRO"
          @change="changeIdentity"
        >
          <el-option label="学生" value="学生"></el-option>
          <el-option label="职场人" value="职场人"></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolIdentity"
          @click="identityRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="手机号"
      @mouseover.native="toolTel = true"
      @mouseout.native="toolTel = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.tel"
          :readonly="telRO"
          @change="changeTel"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-edit" v-show="toolTel" @click="telRO = false"></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="邮箱"
      @mouseover.native="toolEmail = true"
      @mouseout.native="toolEmail = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.email"
          :readonly="emailRO"
          @change="changeEmail"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-edit" v-show="toolEmail" @click="emailRO = false"></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="求职状态"
      @mouseover.native="toolJob_status = true"
      @mouseout.native="toolJob_status = false"
    >
      <el-col :span="5">
        <el-select
          v-model="Resume.job_status"
          placeholder="选择状态"
          :disabled="job_statusRO"
          @change="changeJob_status"
        >
          <el-option label="随时到岗" value="随时到岗"></el-option>
          <el-option label="月内到岗" value="月内到岗"></el-option>
          <el-option label="考虑机会" value="考虑机会"></el-option>
          <el-option label="暂不考虑" value="暂不考虑"></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolJob_status"
          @click="job_statusRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="个人优势"
      @mouseover.native="toolpersonal_advantages = true"
      @mouseout.native="toolpersonal_advantages = false"
    >
      <el-col :span="8">
        <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
          v-model="Resume.personal_advantages"
          :readonly="personal_advantagesRO"
          @change="changepersonal_advantages"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolpersonal_advantages"
          @click="personal_advantagesRO = false"
        ></i>
      </el-col>
      <el-col :span="13"> </el-col>
    </el-form-item>
    <h3>期望岗位</h3>
    <el-form-item
      label="期望行业"
      @mouseover.native="toolexpected_industry = true"
      @mouseout.native="toolexpected_industry = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.expected_industry"
          :readonly="expected_industryRO"
          @change="changeexpected_industry"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolexpected_industry"
          @click="expected_industryRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="期望职位"
      @mouseover.native="toolexpected_position = true"
      @mouseout.native="toolexpected_position = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.expected_position"
          :readonly="expected_positionRO"
          @change="changeexpected_position"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolexpected_position"
          @click="expected_positionRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="职位详情"
      @mouseover.native="toolposition_details = true"
      @mouseout.native="toolposition_details = false"
    >
      <el-col :span="10">
        <el-input
          v-model="Resume.position_details"
          :readonly="position_detailsRO"
          @change="changeposition_details"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolposition_details"
          @click="position_detailsRO = false"
        ></i>
      </el-col>
      <el-col :span="11"> </el-col>
    </el-form-item>
    <el-form-item
      label="期望薪资"
      @mouseover.native="toolsalary_requirements = true"
      @mouseout.native="toolsalary_requirements = false"
    >
      <el-col :span="5">
        <el-input
          v-model="Resume.salary_requirements"
          :readonly="salary_requirementsRO"
          @change="changesalary_requirements"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolsalary_requirements"
          @click="salary_requirementsRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="期待城市"
      @mouseover.native="toolwork_city = true"
      @mouseout.native="toolwork_city = false"
    >
      <el-col :span="5">
        <el-cascader
          size="large"
          :options="work_cityoptions"
          v-model="work_cityselectedOptions"
          :disabled="work_cityRO"
          @change="changework_city"
        >
        </el-cascader>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolwork_city"
          @click="work_cityRO = false"
        ></i>
      </el-col>
      <el-col :span="16"> </el-col>
    </el-form-item>
    <el-form-item
      label="其他城市"
      @mouseover.native="toolother_city = true"
      @mouseout.native="toolother_city = false"
    >
      <el-col :span="10">
        <el-input
          v-model="Resume.other_city"
          :readonly="other_cityRO"
          @change="changeother_city"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolother_city"
          @click="other_cityRO = false"
        ></i>
      </el-col>
      <el-col :span="11"> </el-col>
    </el-form-item>
    <el-row
      @mouseover.native="toolexperiences = true"
      @mouseout.native="toolexperiences = false"
    >
      <el-col :span="4">
        <h3>工作/实习经历</h3>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-circle-plus-outline"
          v-show="toolexperiences"
          @click="addExperience"
        ></i>
      </el-col>
      <el-col :span="17"> </el-col>
    </el-row>
    <ul>
      <el-form v-for="(experience, index) in Resume.experiences" :key="index" label-width="100px" style="margin-left:-40px">
        <el-form-item
          label="公司名称"
          @mouseover.native="experienceTools[index].toolcompany_name = true"
          @mouseout.native="experienceTools[index].toolcompany_name = false"
        >
          <el-col :span="8">
            <el-input
              v-model="experience.company_name"
              :readonly="experiencesRO"
              @change="changeexperiences"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="experienceTools[index].toolcompany_name"
              @click="experiencesRO = false"
            ></i>
          </el-col>
          <el-col :span="13"> </el-col>
        </el-form-item>
        <el-form-item
          label="行业"
          @mouseover.native="experienceTools[index].toolindustry = true"
          @mouseout.native="experienceTools[index].toolindustry = false"
        >
          <el-col :span="5">
            <el-input
              v-model="experience.industry"
              :readonly="experiencesRO"
              @change="changeexperiences"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="experienceTools[index].toolindustry"
              @click="experiencesRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="在职时间"
          @mouseover.native="experienceTools[index].toolwork_time = true"
          @mouseout.native="experienceTools[index].toolwork_time = false"
        >
          <el-col :span="5">
            <el-input
              v-model="experience.work_time"
              :readonly="experiencesRO"
              @change="changeexperiences"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="experienceTools[index].toolwork_time"
              @click="experiencesRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="职位名称"
          @mouseover.native="experienceTools[index].toolposition_name = true"
          @mouseout.native="experienceTools[index].toolposition_name = false"
        >
          <el-col :span="5">
            <el-input
              v-model="experience.position_name"
              :readonly="experiencesRO"
              @change="changeexperiences"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="experienceTools[index].toolposition_name"
              @click="experiencesRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="工作内容"
          @mouseover.native="experienceTools[index].tooljob_description = true"
          @mouseout.native="experienceTools[index].tooljob_description = false"
        >
          <el-col :span="10">
            <el-input
            type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
              v-model="experience.job_description"
              :readonly="experiencesRO"
              @change="changeexperiences"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="experienceTools[index].tooljob_description"
              @click="experiencesRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
        <el-form-item
          label="是否为实习"
          @mouseover.native="experienceTools[index].toolisInternship = true"
          @mouseout.native="experienceTools[index].toolisInternship = false"
        >
          <el-col :span="5">
            <el-input
              v-model="experience.isInternship"
              :readonly="experiencesRO"
              @change="changeexperiences"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="experienceTools[index].toolisInternship"
              @click="experiencesRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <hr />
      </el-form>
    </ul>
    <el-row
      @mouseover.native="toolprojects = true"
      @mouseout.native="toolprojects = false"
    >
      <el-col :span="4">
        <h3>项目经历</h3>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-circle-plus-outline"
          v-show="toolprojects"
          @click="addProjects"
        ></i>
      </el-col>
      <el-col :span="17"> </el-col>
    </el-row>
    <ul>
      <el-form v-for="(project, index) in Resume.projects" :key="index" label-width="100px" style="margin-left:-40px">
        <el-form-item
          label="项目名称"
          @mouseover.native="projectsTools[index].toolproject_name = true"
          @mouseout.native="projectsTools[index].toolproject_name = false"
        >
          <el-col :span="8">
            <el-input
              v-model="project.project_name"
              :readonly="projectsRO"
              @change="changeprojects"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="projectsTools[index].toolproject_name"
              @click="projectsRO = false"
            ></i>
          </el-col>
          <el-col :span="13"> </el-col>
        </el-form-item>
        <el-form-item
          label="角色"
          @mouseover.native="projectsTools[index].toolrole = true"
          @mouseout.native="projectsTools[index].toolrole = false"
        >
          <el-col :span="5">
            <el-input
              v-model="project.role"
              :readonly="projectsRO"
              @change="changeprojects"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="projectsTools[index].toolrole"
              @click="projectsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="项目时间"
          @mouseover.native="projectsTools[index].toolproject_time = true"
          @mouseout.native="projectsTools[index].toolproject_time = false"
        >
          <el-col :span="5">
            <el-input
              v-model="project.project_time"
              :readonly="projectsRO"
              @change="changeprojects"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="projectsTools[index].toolproject_time"
              @click="projectsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="项目描述"
          @mouseover.native="
            projectsTools[index].toolproject_description = true
          "
          @mouseout.native="
            projectsTools[index].toolproject_description = false
          "
        >
          <el-col :span="10">
            <el-input
            type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
              v-model="project.project_description"
              :readonly="projectsRO"
              @change="changeprojects"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="projectsTools[index].toolproject_description"
              @click="projectsRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
        <el-form-item
          label="项目业绩"
          @mouseover.native="
            projectsTools[index].toolproject_performance = true
          "
          @mouseout.native="
            projectsTools[index].toolproject_performance = false
          "
        >
          <el-col :span="10">
            <el-input
            type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
              v-model="project.project_performance"
              :readonly="projectsRO"
              @change="changeprojects"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="projectsTools[index].toolproject_performance"
              @click="projectsRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
        <el-form-item
          label="项目链接"
          @mouseover.native="projectsTools[index].toolproject_link = true"
          @mouseout.native="projectsTools[index].toolproject_link = false"
        >
          <el-col :span="10">
            <el-input
              v-model="project.project_link"
              :readonly="projectsRO"
              @change="changeprojects"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="projectsTools[index].toolproject_link"
              @click="projectsRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
        <hr />
      </el-form>
    </ul>
    <el-row
      @mouseover.native="tooleducations = true"
      @mouseout.native="tooleducations = false"
    >
      <el-col :span="4">
        <h3>教育经历</h3>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-circle-plus-outline"
          v-show="tooleducations"
          @click="addEducations"
        ></i>
      </el-col>
      <el-col :span="17"> </el-col>
    </el-row>
    <ul>
      <el-form v-for="(education, index) in Resume.educations" :key="index" label-width="100px" style="margin-left:-40px">
        <el-form-item
          label="学校名称"
          @mouseover.native="educationsTools[index].tooluniversity = true"
          @mouseout.native="educationsTools[index].tooluniversity = false"
        >
          <el-col :span="5">
            <el-input
              v-model="education.university"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].tooluniversity"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="学历"
          @mouseover.native="educationsTools[index].toolqualification = true"
          @mouseout.native="educationsTools[index].toolqualification = false"
        >
          <el-col :span="5">
            <el-input
              v-model="education.qualification"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].toolqualification"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="专业"
          @mouseover.native="educationsTools[index].toolmajor = true"
          @mouseout.native="educationsTools[index].toolmajor = false"
        >
          <el-col :span="5">
            <el-input
              v-model="education.major"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].toolmajor"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="时间段"
          @mouseover.native="educationsTools[index].toolstudy_time = true"
          @mouseout.native="educationsTools[index].toolstudy_time = false"
        >
          <el-col :span="5">
            <el-input
              v-model="education.study_time"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].toolstudy_time"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="主修课程"
          @mouseover.native="educationsTools[index].toolmajor_courses = true"
          @mouseout.native="educationsTools[index].toolmajor_courses = false"
        >
          <el-col :span="10">
            <el-input
            type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
              v-model="education.major_courses"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].toolmajor_courses"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
        <el-form-item
          label="专业排名"
          @mouseover.native="educationsTools[index].toolprofession_rank = true"
          @mouseout.native="educationsTools[index].toolprofession_rank = false"
        >
          <el-col :span="5">
            <el-input
              v-model="education.profession_rank"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].toolprofession_rank"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="16"> </el-col>
        </el-form-item>
        <el-form-item
          label="在校经历"
          @mouseover.native="educationsTools[index].toolstudy_experience = true"
          @mouseout.native="educationsTools[index].toolstudy_experience = false"
        >
          <el-col :span="10">
            <el-input
            type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
              v-model="education.study_experience"
              :readonly="educationsRO"
              @change="changeeducations"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="educationsTools[index].toolstudy_experience"
              @click="educationsRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
        <hr />
      </el-form>
    </ul>
    <el-form-item
      label="所获荣誉"
      @mouseover.native="toolhonor_name = true"
      @mouseout.native="toolhonor_name = false"
    >
      <el-col :span="10">
        <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 10}"
          v-model="Resume.honor_name"
          :readonly="honor_nameRO"
          @change="changehonor_name"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolhonor_name"
          @click="honor_nameRO = false"
        ></i>
      </el-col>
      <el-col :span="11"> </el-col>
    </el-form-item>
    <el-row
      @mouseover.native="toolcertificates = true"
      @mouseout.native="toolcertificates = false"
    >
      <el-col :span="4">
        <h3>资格证书</h3>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-circle-plus-outline"
          v-show="toolcertificates"
          @click="addcertificates"
        ></i>
      </el-col>
      <el-col :span="17"> </el-col>
    </el-row>
    <ul>
      <el-form
        v-for="(certificate_name, index) in Resume.certificate"
        :key="index"
        style="margin-left:-40px"
      >
        <el-form-item
          label="证书"
          @mouseover.native="
            certificatesTools[index].toolcertificate_name = true
          "
          @mouseout.native="
            certificatesTools[index].toolcertificate_name = false
          "
          label-width="100px"
        >
          <el-col :span="10">
            <el-input
              v-model="Resume.certificate[index]"
              :readonly="certificatesRO"
              @change="changecertificate_name"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <i
              class="el-icon-edit"
              v-show="certificatesTools[index].toolcertificate_name"
              @click="certificatesRO = false"
            ></i>
          </el-col>
          <el-col :span="11"> </el-col>
        </el-form-item>
      </el-form>
      <hr style="margin-left:-40px"/>
    </ul>
    <el-form-item
      label="课余经历"
      @mouseover.native="toolorganization = true"
      @mouseout.native="toolorganization = false"
    >
      <el-col :span="12">
        <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 20}"
          v-model="Resume.organization"
          :readonly="organizationRO"
          @change="changeorganization"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolorganization"
          @click="organizationRO = false"
        ></i>
      </el-col>
      <el-col :span="11"> </el-col>
    </el-form-item>
    <el-form-item
      label="专业技能"
      @mouseover.native="toolmajor_skills = true"
      @mouseout.native="toolmajor_skills = false"
    >
      <el-col :span="15">
        <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 20}"
          v-model="Resume.major_skills"
          :readonly="major_skillsRO"
          @change="changemajor_skills"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <i
          class="el-icon-edit"
          v-show="toolmajor_skills"
          @click="major_skillsRO = false"
        ></i>
      </el-col>
      <el-col :span="6"> </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
import { provinceAndCityData, codeToText } from "element-china-area-data";
import http from "../util/request";

export default {
  name: "ResumeComponent",
  data() {
    return {
      user: {},
      Resume: {
        name: "张三",
        gender: "男",
        identity: "学生",
        graduation_year: "2022",
        tel: "123456789",
        birthday_date: "2000-01-01",
        city: "某地",
        email: "zhangsan@example.com",
        job_status: "考虑机会",
        personal_advantages: "沟通能力强，团队协作",
        expected_industry: "IT",
        expected_position: "软件工程师",
        position_details: "Web开发",
        salary_requirements: "15000元/月",
        work_city: "北京",
        other_city: "上海",
        experiences: [
          {
            company_name: "ABC公司",
            industry: "IT",
            work_time: "2020 - 2022",
            position_name: "实习生",
            job_description: "负责前端开发",
            isInternship: "是",
          },
        ],
        projects: [
          {
            project_name: "项目A",
            role: "项目经理",
            project_time: "2021 - 2022",
            project_description: "开发一个Web应用",
            project_performance: "成功上线",
            project_link: "http://projecta.com",
          },
        ],
        educations: [
          {
            university: "某大学",
            qualification: "本科",
            major: "计算机科学与技术",
            study_time: "时间段：2018-2022",
            major_courses: "数据结构，算法",
            profession_rank: "前30%",
            study_experience: "参与学生科研项目",
          },
        ],
        honor_name: "优秀学生奖",
        certificate: ["计算机专业证书"],
        organization: "学生会,主席,时间段：2019-2021,经历描述：组织校园活动",
        major_skills: "Python, HTML, CSS, JavaScript",
      },
      //name
      nameRO: true,
      toolName: false,

      //birthday
      birthday_dateRO: true,
      toolbirth: false,

      //gender
      genderRO: true,
      toolGender: false,

      //graduation_year
      graduationYearRO: true,
      toolGraduationYear: false,

      //city
      cityRO: true,
      toolCity: false,
      cityoptions: provinceAndCityData,
      cityselectedOptions: ["12", "120104"],

      //identity
      identityRO: true,
      toolIdentity: false,

      //tel
      telRO: true,
      toolTel: false,

      //email
      emailRO: true,
      toolEmail: false,

      //job_status
      job_statusRO: true,
      toolJob_status: false,

      personal_advantagesRO: true,
      toolpersonal_advantages: false,

      expected_industryRO: true,
      toolexpected_industry: false,

      expected_positionRO: true,
      toolexpected_position: false,

      position_detailsRO: true,
      toolposition_details: false,

      salary_requirementsRO: true,
      toolsalary_requirements: false,

      work_cityRO: true,
      toolwork_city: false,
      work_cityoptions: provinceAndCityData,
      work_cityselectedOptions: ["12", "120104"],

      other_cityRO: true,
      toolother_city: false,

      //experience
      experiencesRO: true,
      toolexperiences: false,
      experienceTools: [
        {
          company_nameRO: true,
          toolcompany_name: false,

          industryRO: true,
          toolindustry: false,

          work_timeRO: true,
          toolwork_time: false,

          position_nameRO: true,
          toolposition_name: false,

          job_descriptionRO: true,
          tooljob_description: false,

          isInternshipRO: true,
          toolisInternship: false,
        },
      ],
      //project
      projectsRO: true,
      toolprojects: false,
      projectsTools: [
        {
          project_nameRO: true,
          toolproject_name: false,

          roleRO: true,
          toolrole: false,

          project_timeRO: true,
          toolproject_time: false,

          project_descriptionRO: true,
          toolproject_description: false,

          project_performanceRO: true,
          toolproject_performance: false,

          project_linkRO: true,
          toolproject_link: false,
        },
      ],
      //学历信息
      educationsRO: true,
      tooleducations: false,
      educationsTools: [
        {
          universityRO: true,
          tooluniversity: false,

          qualificationRO: true,
          toolqualification: false,

          majorRO: true,
          toolmajor: false,

          study_timeRO: true,
          toolstudy_time: false,

          major_coursesRO: true,
          toolmajor_courses: false,

          profession_rankRO: true,
          toolprofession_rank: false,

          study_experienceRO: true,
          toolstudy_experience: false,
        },
      ],
      honor_nameRO: true,
      toolhonor_name: false,

      certificatesRO: true,
      toolcertificates: false,
      certificatesTools: [
        {
          certificate_nameRO: true,
          toolcertificate_name: false,
        },
      ],

      organizationRO: true,
      toolorganization: false,

      major_skillsRO: true,
      toolmajor_skills: false,

      // rules: {
      //   // validator
      //   platformId: [{ required: true, message: "必填项", trigger: "change" }],
      //   linkmanTel: [{ validator: checkPhone, trigger: "blur" }],
      //   rtoln: [{ required: true, message: "必填项", trigger: "blur" }],
      // },
    };
  },
  created() {
    this.user = JSON.parse(this.$store.state.user);
    this.Resume = JSON.parse(localStorage.getItem("resume"));
    // this.Resume.name = "111";
  },
  methods: {
    sendNewResume() {
      this.$refs.Resume.validate(async (valid) => {
        // async异步和await配套
        if (!valid) return false;
        // 发起请求，拿到服务器返回的数据
        http
          .post("/updateResume", this.Resume)
          .then((res) => {
            if (res.status >= 200 && res.status <= 300) {
              if (res.data.resultCode === 1) {
                this.$message.success("修改成功");
                console.log(res.data.data.token);
                //存储resume对象到localstorage
                this.$store.commit("setResume", this.Resume);
              } else {
                this.$message.warning(res.data.message);
              }
            } else {
              this.$message.error("error");
              console.log(res.error);
            }
          })
          .catch((error) => {
            // 处理错误情况
            this.$message.error("error");
            console.log(error);
          });
      });
    },
    changeName() {
      this.nameRO = true;
      this.sendNewResume();
    },
    changeBirthdayDate() {
      this.birthday_dateRO = true;
    },
    changeGender() {
      this.genderRO = true;
    },
    changeGraduationYear() {
      this.graduationYearRO = true;
    },
    changeCity() {
      this.cityRO = true;
      var loc = "";
      for (let i = 0; i < this.cityselectedOptions.length; i++) {
        loc += codeToText[this.cityselectedOptions[i]];
      }
      console.log(loc); //打印区域码所对应的属性值即中文地址
    },
    changeIdentity() {
      this.identityRO = true;
    },
    changeTel() {
      this.telRO = true;
    },
    changeEmail() {
      this.emailRO = true;
    },
    changeJob_status() {
      this.job_statusRO = true;
    },
    changepersonal_advantages() {},
    changeexpected_industry() {},
    changeexpected_position() {},
    changeposition_details() {},
    changesalary_requirements() {},
    changework_city() {},
    changeother_city() {},
    addExperience() {
      this.Resume.experiences.push({
        company_name: "",
        industry: "",
        work_time: "",
        position_name: "",
        job_description: "",
        isInternship: "",
      });
      this.experienceTools.push({
        company_nameRO: true,
        toolcompany_name: false,

        industryRO: true,
        toolindustry: false,

        work_timeRO: true,
        toolwork_time: false,

        position_nameRO: true,
        toolposition_name: false,

        job_descriptionRO: true,
        tooljob_description: false,

        isInternshipRO: true,
        toolisInternship: false,
      });
    },
    changeexperiences() {
      this.experiencesRO = true;
    },
    // changecompany_name() {},
    // changeindustry() {},
    // changework_time() {},
    // changeposition_name() {},
    // changejob_description() {},
    // changeisInternship() {},
    addProjects() {
      this.Resume.projects.push({
        project_name: "",
        role: "",
        project_time: "",
        project_description: "",
        project_performance: "",
        project_link: "",
      });
      this.projectsTools.push({
        project_nameRO: true,
        toolproject_name: false,

        roleRO: true,
        toolrole: false,

        project_timeRO: true,
        toolproject_time: false,

        project_descriptionRO: true,
        toolproject_description: false,

        project_performanceRO: true,
        toolproject_performance: false,

        project_linkRO: true,
        toolproject_link: false,
      });
    },
    changeprojects() {
      this.projectsRO = true;
    },
    // changeproject_name() {},
    // changerole() {},
    // changeproject_time() {},
    // changeproject_description() {},
    // changeproject_performance() {},
    // changeproject_link() {},
    addEducations() {
      this.Resume.educations.push({
        university: "",
        qualification: "",
        major: "",
        study_time: "",
        major_courses: "",
        profession_rank: "",
        study_experience: "",
      });
      this.educationsTools.push({
        universityRO: true,
        tooluniversity: false,

        qualificationRO: true,
        toolqualification: false,

        majorRO: true,
        toolmajor: false,

        study_timeRO: true,
        toolstudy_time: false,

        major_coursesRO: true,
        toolmajor_courses: false,

        profession_rankRO: true,
        toolprofession_rank: false,

        study_experienceRO: true,
        toolstudy_experience: false,
      });
    },
    changeeducations() {
      this.educationsRO = true;
    },

    changehonor_name() {},
    addcertificates() {
      this.Resume.certificate.push("");
      this.certificatesTools.push({
        certificate_nameRO: true,
        toolcertificate_name: false,
      });
    },
    changecertificate_name() {},

    changeorganization() {},

    changemajor_skills() {},
  },
};
</script>

<style scoped>
.el-icon-edit {
  margin-left: 20px;
  cursor: pointer;
}
.el-icon-circle-plus-outline {
  margin-left: -20px;
  margin-top: 25px;
  cursor: pointer;
}
</style>
