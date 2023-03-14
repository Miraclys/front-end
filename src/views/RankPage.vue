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
        <router-link to="/login">
          <el-icon><ChatDotRound /></el-icon>
          Login
        </router-link>
        <hr>

        <router-link to="/home">
          <el-icon><ChatSquare /></el-icon>
          Home
        </router-link>

        <hr>
        <!--<el-icon color="#6495ED" class="no-inherit"><TrendCharts /></el-icon>-->
        <router-link to="/rank">
          <el-icon><Histogram /></el-icon>
          Rank
        </router-link> 

        </el-aside>
        <el-container>
          <el-main>
            <div class="rank">
              <h1 class="rank-title">排行榜</h1>
              <el-table :data="rankList" border stripe class="rank-table">
                <el-table-column prop="rank" label="排名"></el-table-column>
                <el-table-column prop="name" label="问题"></el-table-column>
                <el-table-column prop="score" label="频率"></el-table-column>
              </el-table>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
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

import {ChatSquare, ChatDotRound, Histogram} from "@element-plus/icons";
import { ElTable, ElTableColumn } from 'element-plus';

export default {
  components: {
    ChatSquare,
    ChatDotRound,
    Histogram,
    ElTable,
    ElTableColumn
},

  data() {
    return {
      rankList: [
          {
            question: '',
            answer: ''
          },
      ],
    }
  },

  mothods: {
    setup() {
      alert("123123133");
      //let self = this;
      // 创建一个 XMLHttpRequest 对象
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText); // 在 js 中将 json 格式转为数组格式
          data.forEach(element => {
          alert(element[0]);
          });
        }
      };

      // 发送 HTTP 请求
      xmlhttp.open("GET", "http://127.0.0.1:9910/rank", true);
      xmlhttp.send();

      // 更新网页内容
    }
  }
}
</script>
        