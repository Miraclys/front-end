<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        
        

      </el-header>
      <el-main>

        <!--<el-avatar :src="../src/assets/logo.png" :size="100" :fit="cover">-->
          <!-- 头像未加载时显示的文字 -->
        <!--  <span>Avatar</span>-->
        <!--</el-avatar>-->
        
        <div class="login-container">
        <div class="login-box">
      <h2 class="title">Login</h2>
      <el-form class="login-form" ref="form" :model="form" :rules="rules" label-width="0">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="Username" id = "userName"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="Password" type="password" id = "passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit-btn" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

      </el-main>
    </el-container>
  </div>
</template>

<style>

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); /* subtract height of header */
}

.login-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px #ccc;
  max-width: 400px;
  width: 100%;
  background-color: #fff;
}

.title {
  font-size: 24px; 
  text-align: center;
  margin-bottom: 20px;
  font-size: larger;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
  border-radius: 60px;
}


</style>

<script>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';

export default {
  components: {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
        password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
      },
    };
  },
  methods: {
    login() {
      const name = document.getElementById('userName').value;
      const word = document.getElementById('passWord').value;
      
      /*let xhr = new XMLHttpRequest();
      let url = "http://127.0.0.1:9900/login";
      let data = {
        value: message
      };*/
      alert(name);
      alert(word);
    }
  }
}
</script>

