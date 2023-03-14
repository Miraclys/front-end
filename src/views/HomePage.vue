<template>
    <div class="chat-layout">
    <el-container>
      <el-header class="header">

        Mini-chatGPT

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
            <div class="chat-window">
              <div class="chat-bubble" v-for="(message, index) in messages" :key="index">
                <div class="message-info">{{message.username}} {{message.time}}</div>
                <div class="message-content">{{message.content}}</div>
              </div>
            </div>
          </el-main>

          <el-footer class="footer">
            <!--<el-input v-model="input" placeholder="Entering please..." clearable size="medium" style="height: 50px; flex: 1;"/>
            -->
            <!--<el-input v-model="input" placeholder="Entering please..." clearable size="medium" style="flex: 1;" :autosize="{minRows: 2, maxRows: 5}" @keyup.enter="send" id = "inputText" />
            -->
            <el-input type="textarea" v-model="input" :autosize="{minRows: 2, maxRows: 5}" placeholder="Entering please..." :auto-complete="on" clearable size="medium" @keyup.enter="send"></el-input>
            <el-button class="send-button" @click="sendMessage">submit</el-button>
            <el-button class="export-button" @click="exportChat">export</el-button>
          </el-footer>

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

  .menu-item i {
    font-size: 20px;
    margin-right: 10px;
  }

  .menu-text {
    margin-left: 10px;
  }
</style>

<style>

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .aside {
    /*background-image: url('E:\Background&ProfilePhoto\初音未来.png');*/
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    line-height: 250px;
    border: 3px solid #ccc;
    font-size: 20px;
  }

  .aside a {
    text-decoration: none;
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
    line-height: 220px;
  }

  .el-main {
    background-color: #fff; 
    color: #333; 
    padding: 0;
    overflow-y: auto;
    height: calc(100% - 50px);
  }

  .chat-window {
    display: flex;
    flex-direction: column;
  }

  .chat-bubble {
    margin: 10px 0;
    max-width: 60%;
    align-self: flex-start;
    border-radius: 25px;
    padding: 10px;
    background-color: #f0f0f0;
    /*background-color: #989797;*/
  }

  .chat-bubble:nth-child(even) {
    align-self: flex-end;
    background-color: #007bff;
    color: #fff;
  }

  .message-info {
    font-size: 12px;
    color: #999;
    /*color: #e7e5e5;*/
    margin-bottom: 5px;
  }

  .message-content {
    font-size: 14px;
    word-break: break-word;
  }

  .footer {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
  }

  .send-button {
    margin-left: 10px;
    height: 50px;
    border-radius: 20px;
  }

  .export-button {
    margin-left: 10px;
    height: 50px;
    border-radius: 20px;
  }

  /* 自动补齐下拉框的样式 */
.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: #fff;
  border: 0;
}

</style>

<script>

import {House, User, Histogram} from "@element-plus/icons";

  export default {
    components: {
      House,
      User,
      Histogram
    },
    name: "ChatRoom", 
    data() {
      return {
        input: "",
        messages: [
          {
            username: "<Mini-chatGPT>",
            time: new Date().toLocaleTimeString(),
            content: "你好，我是 Mini-chatGPT，有什么可以帮助你的吗？"
          },
        ],
        sendOnEnter: true,
      }
    },
    methods: {
      exportChat() {
        //const exportBtn = document.querySelector('#export-button');
        //const chatLog = document.querySelectorAll('chat-bubble'); // 获取聊天记录
   
        // 创建一个空的 CSV 文件
        let csvContent = "data:text/csv;charset=utf-8,";

        // 将聊天记录转换为 CSV 格式
        this.messages.forEach((message) => {
          let time = message.time;
          let user = message.username;
          let text = message.content;
          csvContent += `${time},${user},${text}\n`;
        })


        // 创建一个下载链接并将其添加到 DOM 中
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'chat-log.txt');
        document.body.appendChild(link);

        // 模拟用户点击下载链接
        link.click();
      },
      sendMessage() {
        let self = this;
        const message = this.input;
        if (message == '') {
          alert("输入不能为空！")
        } else { /* 发送信息到某个端口，然后获取后端的信息 */
          const time = new Date().toLocaleTimeString();
          const newRecord = { username:'<Miraclys>', time, content: message };
          this.messages.push(newRecord);
          console.log(`发送消息：${message},时间：${time}`);
          this.input = '';  


          let xhr = new XMLHttpRequest();
          let url = "http://127.0.0.1:9000/dialogue";
          let data = {
            value: message
          };

          let json = JSON.stringify(data);

          xhr.open("POST", url);
          xhr.setRequestHeader("Content-Type", "application/json")

          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              let response = xhr.responseText;
              console.log(response);

              const times = new Date().toLocaleTimeString();
              const newRecords = { username:'<Mini-chatGPT>', time:times, content: response };
              console.log(newRecords);
              self.messages.push(newRecords);
              
              /*console.log(`发送消息：${response},时间：${times}`);*/
              this.input = '';  

            }
          }

          xhr.send(json);
        }
        // 获取聊天框元素
        var chatbox = document.getElementById("chat-window");
        // 在发送消息后，将聊天框滚动到底部
        chatbox.scrollTop = chatbox.scrollHeight;
      }, 
      send() {
          if (this.sendOnEnter) {
            this.sendMessage(); // 这里发送后，可以接受后端的信息，然后输出
          }
      }
    },
    
}
</script>
           