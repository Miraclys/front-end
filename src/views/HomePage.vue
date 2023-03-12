<template>
    <div class="chat-layout">
    <el-container>
      <el-header class="header">
        Mini-chatGPT
        <div id="clock" class="clock">00:00:00</div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          
          <!--<el-icon color="#6495ED" class="no-inherit"><Comment /></el-icon>-->
          <router-link to="/home">Home</router-link>
          <hr>
          <!--<el-icon color="#6495ED" class="no-inherit"><Search /></el-icon>-->
          <router-link to="/login">Login</router-link>
          <hr>
          <!--<el-icon color="#6495ED" class="no-inherit"><TrendCharts /></el-icon>-->
          <router-link to="/rank">Rank</router-link> 

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
            <el-input v-model="input" placeholder="Entering please..." clearable size="medium" style="flex: 1;" :autosize="{minRows: 2, maxRows: 5}" @keyup.enter="send"/>
            <el-button class="send-button" @click="sendMessage">submit</el-button>
          </el-footer>

        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
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
    word-break: break-word;
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
    name: "ChatRoom", 
    data() {
      return {
        input: "",
        messages: [
          {
            username: "Mini-chatGPT",
            time: new Date().toLocaleTimeString(),
            content: "你好，我是 Mini-chatGPT，有什么可以帮助你的吗？"
          }
        ],
        sendOnEnter: true
      }
    },
    methods: {
      sendMessage() {
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
          let url = "http://127.0.0.1:8900/login";
          let data = {
            value: this.input
          }

          let json = JSON.stringify(data);

          xhr.open("POST", url, json);
          xhr.setRequestHeader("Content-Type", "application/json")

          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              let response = xhr.responseText;
              console.log(response);

              const times = new Date().toLocaleTimeString();
              const newRecords = { username:'Mini-chatGPT', time, content: message };
              this.messages.push(newRecords);
              console.log(`发送消息：${response},时间：${times}`);
              this.input = ''; 

            }
          }
        }
      }, 
      send() {
          if (this.sendOnEnter) {
            this.sendMessage(); // 这里发送后，可以接受后端的信息，然后输出
          }
      }
    }
  }
</script>
           