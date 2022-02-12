<template>
  <div id="login">
    <img class="img-login" src="~assets/img/login/bg_log.jpeg" alt="" />
    <div id="Login-1">
      <img class="img-logo" src="~assets/img/login/hzau_logo.png" alt="">
      <div class="login-2">
        <h2 class="h2-2">树种资源管理系统</h2>
        <div id="input_login">
          <el-input
            class="username"
            placeholder="用户名"
            v-model="username"
          ></el-input>
          <div class="input_focus"></div>
          <el-input
            class="password"
            placeholder="密码"
            v-model="password"
          ></el-input>
          <button id="submit" @click="vertify_land">登陆</button>
        </div>
        
      </div>
    </div>
    <div id="footer">
      <!-- <div id="feidian_logo"><img src="~assets/img/login/feidian-logo.png" alt=""></div> -->
      <p>
        <a href="http://www.52feidian.com" target="_blank" class="feidian-link"
          >Copyright © 2021 Feidian studio. All Rights Reserved.</a
        >
      </p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    console.log(this.$request);
  },
  methods: {
    vertify_land() {
      if (this.username == "" || this.password == "") {
        this.$message({
          message: "用户名和密码不能为空！",
          type: "warning",
        });
      } else {
        this.$router.push("/Home");
      }
    },
  },
};
</script>
<style>
#login {
  width: 100%;
  height: 100%;
  /* background-image: url('~assets/img/login/bg_log.jpeg'); */
  position: relative;
  /* overflow: hidden; */
}
.img-login {
  filter: blur(5px);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#Login-1 {
  width: 45%;
  height: 58%;
  background-color: #666060;
  position: absolute;
  top: 50%;
  transform: translateY(-45%) translateX(-50%);
  left: 50%;
  /* text-align: center; */
  /* border-radius: 10px; */
  opacity: 0.93;
  background-image: url("~assets/img/login/bg_log.jpeg");
  background-size: cover;
  /* background-image: url("~assets/img/login/hzau_logo.png"); */
}
.login-2 {
  width: 320px;
  height: 330px;
  background-color: rgb(229, 231, 243);
  position: absolute;
  top: 50%;
  transform: translateY(-45%) translateX(-50%);
  left: 50%;
  text-align: center;
  border-radius: 2px;
  opacity: 0.65;
}
.img-logo{
    margin-top: 10px;
}
.h2-2 {
  margin-top: 10px;
  font-family: "楷体";
  font-size: 30px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgb(182,196,233);
}
#Login h2 {
  display: inline-block;
  color: rgb(255, 255, 255);
  /* margin-top: 40px; */
}
#input_login {
  width: 300px;
  margin: 0 auto;
  height: 2px;
}
#input_login input {
  margin-top: 25px;
  font-size: 13px;
  
  border: none;
  width: 240px;
  height: 33px;
}
#submit {
  display: block;
  width: 110px;
  height: 33px;
  background-color: rgb(10, 119, 24);
  /* line-height: 40px; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
  border: none;
  color: white;
  text-align: center;
  font-size: 15px;
  letter-spacing: 3px;
  border-radius: 2px;
  opacity: 0.9;
}
.password {
  margin-top: 0px;
  /* width: 20px; */
}
#submit:hover {
  cursor: pointer;
  opacity: 1;
}
#submit:focus {
  border: 0 none;
  outline: none;
}
.input_focus {
  width: 0px;
  margin: 0 auto;
  border: 1px red solid;
  opacity: 0;
  transition: width 0.5s;
}
.username:focus ~ .input_focus {
  width: 96%;
  opacity: 1;
}
#footer {
  position: absolute;
  /* border-top: 0px solid white; */
  width: 100%;
  height: 80px;
  bottom: 0px;
  /* background-color:#B0C4DE; */
  font-size: 13px;
}
#footer #feidian_logo {
  width: 40px;
  height: 40px;
  margin: 0 auto;
}
#feidian_logo img {
  width: 100%;
  height: 100%;
  margin-top: 7px;
}
#footer p {
  position: absolute;
  width: 50%;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  margin: 0 auto;
  text-align: center;
}
#footer a {
  color: rgb(14, 12, 12);
}
</style>