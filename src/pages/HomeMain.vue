<template>
    <div id="homeMain">
        <div class="carousel">
            <el-carousel>
                <el-carousel-item v-for="(item,index) in carousel" :key="index">
                    <img class="imgBox" :src="item.src" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="modle">
            <div class="item">我的课程</div>
            <div class="item">我的考试</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"homeMain",
    data(){
        return{
            carousel:[
                {
                    index:1,
                    src:require('@assets/a1.jpg')
                },{
                    index:2,
                    src:require('@assets/b2.jpg')
                },{
                    index:3,
                    src:require('@assets/c3.jpg')
                },{
                    index:4,
                    src:require('@assets/d4.jpg')
                }
            ]
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    #homeMain{
        overflow-y: auto;
        .carousel{
            height: calc(100% - 250px);
            /deep/.el-carousel{
                height: 100%;
                .el-carousel__container{
                    height: 100%;
                    .el-carousel__item{
                        .imgBox{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .modle{
            padding: 25px 0; 
            height: 200px;
            background: #c8dcf7;
            display: flex;
            justify-content: center;
            align-items: center;
            .item{
                width: 180px;
                height: 150px;
                border: 1px solid #39f;
                +.item{
                    margin-left: 150px;
                }
            }
        }
    }
</style>