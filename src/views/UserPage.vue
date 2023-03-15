<template>
    <div class="chat-layout">
      <el-container>
        <el-header class="header">
          <div class="title">Mini-chatGPT</div>
        </el-header>
        <el-container>
          <el-aside width="200px" class="aside">
            <!--<el-icon color="#6495ED" class="no-inherit"><Comment /></el-icon>-->
          
          <!--<el-icon color="#6495ED" class="no-inherit"><Search /></el-icon>-->
  
          <router-link to="/login" style="color: #007bff;">
              <el-icon style="color: #007bff;"><User /></el-icon>
              Login
            </router-link>
            <hr>
  
            <router-link to="/home" style="color: #007bff;">
              <el-icon style="color: #007bff;"><House /></el-icon>
              Home
            </router-link>
  
            <hr>
            <!--<el-icon color="#6495ED" class="no-inherit"><TrendCharts /></el-icon>-->
            <router-link to="/rank" style="color: #007bff;">
              <el-icon style="color: #007bff;"><Histogram /></el-icon>
              Rank
            </router-link> 
  
          </el-aside>
          <el-container>
            <el-main>
  
              <div class="button-group">
                <button class="button-primary">热点问题</button>
                <button class="button-secondary" @click="toMaxUser">最多提问者</button>
                <button class="button-secondary">本月</button>
                <button class="button-secondary">全部</button>
              </div>
  
              <div class="rank">
                <h1 class="rank-title" style="font-family: 'Gill Sans', 'Gill Sans MT',Calibri,'Trebuchet MS', sans-serif;">最多提问者排行榜</h1>
                <el-table :data="rankList" border stripe class="rank-table">
                  <el-table-column prop="rank" label="排名"></el-table-column>
                  <el-table-column prop="question" label="问题"></el-table-column>
                  <el-table-column prop="time" label="频率"></el-table-column>
                </el-table>
              </div>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <style scoped>
  
  .button-group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .button-primary {
    background-color: #1e90ff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .button-secondary {
    background-color: #fff;
    color: #1e90ff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .button-secondary:hover {
    background-color: #f0f0f0;
  }
  
  
    .menu-item {
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 16px;
      color: #555;
      cursor: pointer;
      transition: all 0.3s;
    }
  
    .menu-item:hover {
      background-color: #f0f0f0;
    }
  
    .menu-item.active {
      background-color: #007bff;
      color: #fff;
    }
  
    .menu-item.active:hover {
      background-color: #007bff;
    }
  
    .menu-item i {
      font-size: 20px;
      margin-right: 10px;
    }
  
    .menu-text {
      margin-left: 10px;
    }
  
    .chat-layout {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
  
    .el-container {
      height: 100%;
      width: 100vw;
    }
  
    .header {
      background-color: #007bff;
      color: #fff;
      text-align: center;
      line-height: 60px;
      font-size: large;
      font-weight: bold;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  
    .aside {
      background-color: #f0f0f0;
      color: #333;
      text-align: center;
      border-right: 1px solid #ddd;
    }
  
    .rank {
      padding: 20px;
    }
  
    .rank-title {
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .rank-table {
      font-size: 16px;
    }
  
    .el-table__header th {
      background-color: #f0f0f0;
      font-weight: bold;
    }
    </style>
  
  <script>
  
  import {House, User, Histogram} from "@element-plus/icons";
  import { ElTable, ElTableColumn } from 'element-plus';
  
  export default {
  
    components: {
      House, 
      User,
      Histogram,
      ElTable,
      ElTableColumn
    },
  
    data() {
      return {
        rankList: [
        ],
      }
    },
  
    mounted: function() {
      this.setup();
    },
    
    methods: {
      toMaxUser() {
        let self = this;
        self.$router.push('/rank/user');
      },
      setup() {
        let self = this;
        //alert("123123123");
        let xhr = new XMLHttpRequest();
        let url = "http://127.0.0.1:9000/rank";
  
        xhr.open("GET", url, true);
  
        xhr.setRequestHeader("Content-Type", "application/json")
  
        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText); // 在 js 中将 json 格式转为数组格式
            
            for (var i = 0; i <  data.length; ++i) {
              const node = { rank: i + 1, question: data[i][0], time: data[i][2] }
              self.rankList.push(node);
            }
          }
        };
      xhr.send();
    }
    }
  
  }
  </script>
          