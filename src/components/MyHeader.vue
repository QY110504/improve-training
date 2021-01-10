<template>
    <div id="header">
        <div class="logo"></div>
        <div class="menuBox"><myMenu/></div>
        <div class="user">
            <el-popover
                placement="top" popper-class="logoutPop"
                width="40" trigger="hover"
            >
                <div style="text-align: center; margin: 0;width:100%;height:100;cursor:pointer;">
                    <span @click="logout">注销</span>
                </div>
                <el-avatar slot="reference" :size="30" :src="circleUrl"></el-avatar>
            </el-popover>
            <span @click="loginOrRegist" class="loginOrRegist">{{'登录/注册'}}</span>
        </div>
    </div>
</template>
<script>
import myMenu from "@/components/Menu.vue"
export default {
    name:"myheader",
    components:{
        myMenu
    },
    data(){
        return {
            visible:false,
            circleUrl:require('@assets/user.png')
        }
    },
    methods:{
        loginOrRegist(){

        },
        logout(){

        }
    }
}
</script>
<style lang="less" scoped>
    #header{
        display: flex;
        height: 50px;
        color: #fff;
        background: #303440;
        padding-left: 20px;
        .logo{
            width: 120px;
            height: 50px;
            // padding-left: 20px;
            background: url("~@assets/logo.jpg") no-repeat;
            background-size: 100px 50px;
            margin-right: 80px;
        }
        .user{
            width: 200px;
            height: 50px;
            display: flex;
            align-items: center;
            direction: rtl;
            .el-avatar{
                margin: 0 20px;
            }
        }
        .menuBox{
            width: calc(100% - 400px);
            height: 50px;
        }
    }
</style>
<style lang="less">
    .logoutPop{
        padding-top: 0;
        padding-bottom: 0;
        height: 40px;
        line-height: 40px;
        background: #303440;
        color: #fff;
    }
</style>