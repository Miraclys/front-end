<template>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-9bwd5f6F5U6h3qneWZDw17dflh1M/JGK8HzQWMMg+m+PTjs7eO13mlWT8AtOQqwCw1d0BN/DOoDZ3qfP4p4uw==" crossorigin="anonymous" />

  <div class="chat-layout">
    <el-container>
      <el-header class="header">
        Mini-chatGPT
        <div id="clock" class="clock">00:00:00</div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          
          <el-icon color="#6495ED" class="no-inherit"><Comment /></el-icon>
          <router-link to="/">Home</router-link>
          <hr>
          <el-icon color="#6495ED" class="no-inherit"><Search /></el-icon>
          <router-link to="/login"><i class="fas fa-sign-in-alt"></i>Login</router-link>
          <hr>
          <el-icon color="#6495ED" class="no-inherit"><TrendCharts /></el-icon>
          <router-link to="/rank"><i class="fas fa-ranking-star"></i>Rank</router-link> 

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

    mounted() {
      const chatWindow = this.$refs.chatWindow.$el;
        chatWindow.addEventListener('wheel', event => {
        event.preventDefault();
        chatWindow.scrollTop += event.deltaY;
      });
    },

    methods: {
      sendMessage() {
        const message = this.input;
        if (message == '') {
          alert("输入不能为空！")
        } else {
          const time = new Date().toLocaleTimeString();
          const newRecord = { time, content: message };
          this.messages.push(newRecord);
          console.log(`发送消息：${message}，时间：${time}`);
          this.input = '';
        }
      }, 
      send() {
          if (this.sendOnEnter) {
            this.sendMessage();
          }
      },
      mounted() {
        const chatWindow = this.$refs.chatWindow.$el;
        chatWindow.addEventListener('wheel', event => {
          event.preventDefault();
          chatWindow.scrollTop += event.deltaY;
        });
        const input = this.$refs.input.$refs.input;
        input.addEventListener('focus', () => {
          this.sendOnEnter = false;
        });
        input.addEventListener('blur', () => {
          this.sendOnEnter = true;
        });
      }
    }
  }
</script>
           
