<template>
  <div id="personalinfo">
    <topnav ref="topnav" :activer="activer" :funcs="funcs"></topnav>
    <div id="bottom-right">
      <el-row :gutter="20">
        <el-col :span="6" :xs="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>个人信息</span>
            </div>
            <div>
              <div class="text-center">
                <userAvatar :user="user" />
              </div>
              <ul class="list-group list-group-striped">
                <li class="list-group-item">
                  id号
                  <div class="pull-right">{{ user.id }}</div>
                </li>
                <li class="list-group-item">
                  昵称
                  <div class="pull-right">{{ user.userName }}</div>
                </li>
                <li class="list-group-item">
                  邮箱
                  <div class="pull-right">{{ user.email }}</div>
                </li>
                <li class="list-group-item">
                  号码
                  <div class="pull-right">{{ user.phonenumber }}</div>
                </li>
                <li class="list-group-item">
                  QQ号码
                  <div class="pull-right">{{ user.qqnumber }}</div>
                </li>
                <li class="list-group-item">
                  权限等级
                  <div class="pull-right">{{ user.level }}</div>
                </li>
                <li class="list-group-item">
                  所属单位
                  <div class="pull-right" v-if="user.dept">
                    {{ user.dept }}
                  </div>
                </li>
                <li class="list-group-item">
                  职业
                  <div class="pull-right">{{ user.rolecareer }}</div>
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
        <el-col :span="18" :xs="24">
          <el-card>
            <div slot="header" class="clearfix">
              <span>基本资料</span>
            </div>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="基本资料" name="userinfo">
                <userInfo :user="user" />
              </el-tab-pane>
              <el-tab-pane label="修改密码" name="resetPwd">
                <resetPwd :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import topnav from "components/common/TopNav.vue";
import userAvatar from "./userAvatar";
import userInfo from "./userInfo";
import resetPwd from "./resetPwd";
export default {
  name: "personalinfo",
  data() {
    return {
      user: {
        id: 100,
        userName: "兔兔",
        email: "123456@qq.com",
        phonenumber: 13567250000,
        qqnumber: 12345678,
        level: "超级管理员",
        dept: "华中农业大学信息学院",
        rolecareer: "老师",
      },
      roleGroup: {},
      postGroup: {},
      activeTab: "userinfo",
      activer: this.$route.name || "SystemDetails",
      funcs: [
        {
          icon: "el-icon-notebook-1",
          func: "个人中心",
          name: "PersonalInfo",
          route: "",
        },
      ],
      ruleForm: {
        user_id: "",
        user_name: "",
        mail: "",
        phone: "",
        qq: "",
        authority_level: "",
        unit: "",
        career: "",
      },
      dialogVisible: false,
      imageUrl: "",
    };
  },
  components: {
    topnav,
    userAvatar,
    userInfo,
    resetPwd,
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      user.img = "http://localhost/static/img/profile.473f5971.jpg";
      return user;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    Changepicture() {
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    returnHome() {
      this.$router.push("/Home");
    },
    returnHelp() {
      this.$router.push("/User/Help");
    },
  },
};
</script>
<style scope>
.text {
  font-size: 16px;
}

.item {
  padding: 18px 0;
}

.box-card {
  margin-left: 0px;
  height: 500px;
  font-weight: normal;
}
el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
el-form-item {
  text-align: center;
}
.input_box {
  width: 300px;
  margin-left: 0px;
}
.select_box {
  margin-left: 0px;
  text-align: center;
}
/* .el-form-item{
  text-align: center;
} */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.list-group {
  list-style: none;
}
#bottom-right {
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
}
.el-col-6 {
  /* width: 25%; */
  min-width: 182px;
}
.box-card {
  height: 580px;
}
.list-group-item {
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 10px;
  padding-top: 10px;
}
.pull-right {
  float: right !important;
}
/* 
.el-col-18{
  width: 70%;
}
.box-card{
  margin-left: 50px;
  /* margin-right: 1px; */
</style>
