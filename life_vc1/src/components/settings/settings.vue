<template>
    <div>
        <div class="header-Ico"><h2>设置</h2></div>
        <div class="dashboard">
            <ul>
                <li>
                    <div @click="clearCookis">
                        <span class="item_title">清理缓存</span>
                        <span class="item_bz"><img src="./ic10.png" alt=""></span>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <span class="item_title">关于LifeVC</span>
                        <span class="item_tips">平台: browser 版本：5.1.2 - 261</span>
                        <span class="item_bz"><img src="./ic10.png" alt=""></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            clearCookis(){
                setTimeout(()=>{
                    alert('清除成功')
                },1000)
            }
        }
    }
</script>

<style>
    .header-Ico {
        height: 4rem;
        background-color: #89BE48;
        position: relative;
        margin-bottom:.5rem;
    }
    .header-Ico h2 {
        line-height: 4rem;
        color: white;
        font-size: 2rem;
        text-align: center;
    }

    .dashboard ul{
        margin-bottom:1rem;
    }
    .dashboard li{
        width: 100%;
        height: 5rem;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        margin: -1px auto 0;
    }
    .dashboard li a{
        display: block;
        height:5rem;
        width:100%;
    }
    .item_title{
        display: inline-block;
        line-height:5rem;
        font-size:1.4rem;
        color: #585858;
        margin-left:20px;
    }
    .item_tips{
      margin-left:70px;
    }
    .item_bz{
        width: 10px;
        height: 10px;
        display: inline-block;
        float: right;
        border-right: 2px solid #bbb;
        border-top: 2px solid #bbb;
        margin: 25px 10px 0 0;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }
</style>
