<template>
<el-container>
    <el-aside width="400px">
        <UserBlock/>
    </el-aside>
    <el-main>
        <h1>这里是简历</h1>
    </el-main>
</el-container>
  
</template>

<script>
import UserBlock from "../components/UserBlock.vue"
export default {
    name:"PersonalPage",
    components:{UserBlock,}
}
</script>

<style>

</style>