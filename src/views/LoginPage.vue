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
           
          </el-main>

          <el-footer class="footer">
            
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

  .footer {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px;
  }

</style>