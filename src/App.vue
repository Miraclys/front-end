<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="100px">
          Aside
        </el-aside>

        <el-container>
          <el-main>
            Main
          </el-main>

          <el-footer>
            Footer
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

  .common-layout {
    height: 100vh;
  }

  .el-container {
    height: 100%;
  }

  .el-header,
  .el-footer {
    background-color: #b3c0d1; color: #333; text-align: center; line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6; color: #333; text-align: center; line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3; color: #333; text-align: center; line-height: 160px;
  }

  .el-menu {
    background-color: #d3dce6;
  }
</style>

<script>
  export default {
    name: "App", 
  }
</script>
