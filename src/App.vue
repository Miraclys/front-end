<template>
  <div class="chat-layout">
    <el-container>
      <el-header class="header">
        Mini-chatGPT
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          在线用户列表
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
            <el-input v-model="input" placeholder="请输入消息" clearable size="medium" style="height: 50px; flex: 1;"/>
            <el-button class="send-button" @click="sendMessage">发送</el-button>
          </el-footer>

        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  html, body {
    height: 100%;
  }

  .chat-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .el-container {
    height: 100%;
  }

  .header {
    background-color: #007bff; 
    color: #fff; 
    text-align: center; 
    line-height: 60px;
  }

  .aside {
    background-color: #f0f0f0; 
    color: #333; 
    text-align: center; 
    line-height: 200px;
  }

  .el-main {
    background-color: #fff; 
    color: #333; 
    padding: 20px;
    overflow-y: auto;
  }

  .chat-window {
    display: flex;
    flex-direction: column;
  }

  .chat-bubble {
    margin: 10px 0;
    max-width: 60%;
    align-self: flex-start;
    border-radius: 5px;
    padding: 10px;
    background-color: #f0f0f0;
  }

  .chat-bubble:nth-child(even) {
    align-self: flex-end;
    background-color: #007bff;
    color: #fff;
  }

  .message-info {
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
  }

  .message-content {
    font-size: 14px;
  }

  .footer {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
  }

  .send-button {
    margin-left: 10px;
  }
</style>

<script>
  export default {

    sendMessage() {
      const message = this.input;
      const time = new Date().toLocaleTimeString();
      const newRecord = { time, content: message };
      this.records.push(newRecord);
      console.log(`发送消息：${message}，时间：${time}`);
      this.input = '';
    },

    name: "ChatRoom", 
    data() {
      return {
        input: "",
        messages: [
          {
            username: "Alice",
            time: "2022-01-01 10:00:00",
            content: "你好"
          },
          {
            username: "Bob",
            time: "2022-01-01 10:01:00",
            content: "你好，有什么需要帮助的吗？"
          },
          {
            username: "Alice",
            time: "2022-01-01 10:02:00",
          }
        ]
      }
    }
  }
</script>
           
