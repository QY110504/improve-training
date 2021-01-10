<template>
    <div id="notFound">
        <img :src="require('@assets/background404.png')" alt="" srcset="" class="backgroundImg">
        <div class="errorBox">
            <div class="inlineBox">
                <div class="errorMsg">
                    <p class="errorCode">
                        <img :src="require('@assets/errorcode404.png')" alt="" class="backgroundImg">
                    </p>
                    <p class="errorInfo">
                        抱歉，您所访问的页面不存在,正在跳转
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"notFound",
}
</script>
<style lang="less">
    #notFound{
        display: table;
        margin: 30px auto;
        img{
            max-width: 482px;
            max-height: 378px;
            margin: 30px auto;
            display: block;
        }
        .errorBox{
            margin-left: 20px;
            display: table-cell;
            font-size: 0px;
            text-align: center;
            .inlineBox{
                display: inline-block;
                .errorMsg{
                    display: table-cell;
                    vertical-align: middle;
                    height: 378px;
                    text-align: left;
                    .errorCode{
                        img{
                            width: 153px;
                            height: 68px;
                        }
                    }
                    .errorInfo {
                        line-height: 68px;
                        font-size: 20px;
                        color: rgba(0, 0, 0, 0.427450980392157);
                    }
                    .errorBtn{
                        height: 50px;
                    }
                }
            }
        }
    }
</style>