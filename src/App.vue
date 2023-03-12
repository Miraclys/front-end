<template>
  <div class="common-layout">

    <el-container> 
      <div>
        <el-aside width="150px">
            <el-scrollbar height="320px">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </el-scrollbar>
        </el-aside>
      </div>
    <el-container>

    <el-header>A Mini-chatGPT</el-header> 
    
    <el-main>Main

      

    </el-main>       

    <el-footer>

      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-input v-model="input" placeholder="Please input" clearable @keyup.enter="submit" > 
              
          </el-input>
        </el-form>
      </div>
      

    </el-footer>


      </el-container>
    </el-container>
  </div>
</template>

<script>



  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        input: ref(''),
      }
    },
      submit() {
        console.log('回车发送');
      },
      handleKeydown(event) {
        event.preventDefault();
      return false;
    }
  })
</script>

<style scoped>

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 5px;
  text-align: center;
  border-radius: 100px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

html,body,#app{
    height: 100%;
  }
  
.el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-menu {
  background-color: #d3dce6;
}
</style>
