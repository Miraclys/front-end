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
              <el-table :data="rankList" border stripe class="rank-table" id = "rankings">
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
  setup() {
    /*const rankList = reactive([
      { rank: 1, name: '张三', score: 98 },
      { rank: 2, name: '李四', score: 95 },
      { rank: 3, name: '王五', score: 92 },
      { rank: 4, name: '赵六', score: 89 },
      { rank: 5, name: '钱七', score: 86 }
    ]);

    return {
      rankList
    };*/

    // 创建一个 XMLHttpRequest 对象
    var xmlhttp = new XMLHttpRequest();

    // 定义回调函数，当服务器返回数据时会自动调用该函数
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // 在回调函数中处理从服务器返回的数据
        var data = JSON.parse(this.responseText); // 在 js 中将 json 格式转为数组格式
        //var data = JSON.loads(this.responseText);
        //var data = this.responseText;
        //alert(data);
        //console.log(data);
        alert(data);
        //updatePage(data);
      }
    };

    // 发送 HTTP 请求
    xmlhttp.open("GET", "http://127.0.0.1:9910/rank", true);
    xmlhttp.send();

    // 更新网页内容
    
  }
}
  /*name: "ChatRoom", 
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

    /*time_send() {
      const messages = this.messages;
      let messageIndex = 0;
      let charIndex = 0;

      function typeMessage() {
        const message = messages[messageIndex];
        const chatBubble = document.getElementById("chat-bubble");

        chatBubble.innerHTML = message.substring(0, charIndex);
        charIndex++;

        if (charIndex > message.length) {
          charIndex = 0;
          messageIndex++;
          if (messageIndex >= messages.length) {
            messageIndex = 0;
          }
        }
      }
      setInterval(typeMessage, 100);
    },
    sendMessage() {
      let self = this;
      const message = this.input;
      if (message == '') {
        alert("输入不能为空！")
      } else { /* 发送信息到某个端口，然后获取后端的信息 
        const time = new Date().toLocaleTimeString();
        const newRecord = { username:'<Miraclys>', time, content: message };
        this.messages.push(newRecord);
        console.log(`发送消息：${message},时间：${time}`);
        this.input = '';  


        let xhr = new XMLHttpRequest();
        let url = "http://127.0.0.1:9910/dialogue";
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
            const newRecords = { username:'<Mini-chatGPT>', times, content: response };
            console.log(newRecords);
            self.messages.push(newRecords);
            
            /*console.log(`发送消息：${response},时间：${times}`);
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
  autocomplete() {
    // 定义自动补齐的数据
var autoCompletionData = [
"apple",
"banana",
"cherry",
"date",
"elderberry",
"fig",
"grape",
"honeydew",
"kiwi",
"lemon"
];

// 绑定输入框的keyup事件
("#inputText").on("keyup", function() {
// 获取输入框的值
var inputVal = (this).val();

// 如果输入框的值为空，隐藏自动补齐下拉框
if (inputVal == "") {
  ("#autoCompletionDropdown").hide();
  return;
}

// 过滤自动补齐的数据
var filteredData = autoCompletionData.filter(function(item) {
  return item.indexOf(inputVal) == 0;
});

// 构建自动补齐下拉框的内容
var dropdownHtml = "";
filteredData.forEach(function(item) {
  dropdownHtml += "<a class='dropdown-item' href='#'>" + item + "</a>";
});

// 将自动补齐下拉框的内容插入到页面中
("#autoCompletionDropdown").html(dropdownHtml);

// 显示自动补齐下拉框
("#autoCompletionDropdown").show();
});

// 绑定自动补齐下拉框的鼠标点击事件
("#autoCompletionDropdown").on("click", ".dropdown-item", function() {
// 将选中的自动补齐项插入到输入框中
("#inputText").val((this).text());

// 隐藏自动补齐下拉框
("#autoCompletionDropdown").hide();
});

  }
}*/
</script>
        