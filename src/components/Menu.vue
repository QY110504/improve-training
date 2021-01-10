<template>
    <div id="menu">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" 
                background-color="#303440" active-text-color="#39f"
                text-color="#fff" @select="handleSelect"
        >
            <template v-for="(item,index) in menuObj">
                <el-menu-item v-if="!item.children" 
                    :index="item.index" :key="index" 
                    :disabled="item.disabled"
                >{{item.title}}</el-menu-item>
                <el-submenu v-else :index="item.index" :key="index">
                    <template slot="title">{{item.title}}</template>
                    <el-menu-item 
                        v-for="(item1,index1) in item.children" 
                        :key="index1" :index="item1.index" 
                        :disabled="item1.disabled"
                    >{{item1.title}}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
import menuObj from "@/components/menuData.js";
export default {
    name:"mymenu",
    data(){
        return {
            menuObj:menuObj,
            activeIndex:"1"
        }
    },
    methods:{
        handleSelect(key, keyPath){
            this.getUrl(menuObj,key)
        },
        getUrl(arr,key){
            if(arr){
                arr.forEach(v=>{
                    if(v.index==key){
                        this.$router.push({path:v.url})
                    }else{
                        this.getUrl(v.children,key)
                    }
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
    #menu{
        height: 50px;
        /deep/.el-menu{
            height: 50px;
            line-height: 50px;
            .el-menu-item{
                height: 50px;
                line-height: 50px;
            }
            .el-submenu{
                height: 50px;
                line-height: 50px;
                .el-submenu__title{
                    height: 50px;
                    line-height: 50px;
                }
            }
        }
    }
</style>