<template>
    <div id="homeBox">
        <myheader/>
        <router-view/>
        <myfooter/>
    </div>
</template>
<script>
import myheader from "@/components/MyHeader"
import myfooter from "@/components/MyFooter"
export default {
    name:"homeIndex",
    components:{
        myheader,
        myfooter
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    #homeBox{
        height: 100%;
    }
</style>