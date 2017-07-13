<template>
    <div>
        <div class="all_container">
        <!--头部-->
        <div class="header-Ico"><h2>全部商品</h2></div>
         <!--搜索-->
        <div id="search-bar">
        <form action="">
            <input type="search" placeholder="搜索商品" class="searchinput " @focus="addClassName($event)"
                   :class="{ 'searchinput' : isA}">
            <input type="button" value="取消" class="btn_res" @click="addClassSearchInput">
        </form>
        </div>
         <div class="content_wrap">
            <div class="life_model">
                <div class="life-goodsAll">
                    <div class="life-goodsBox">
                        <div class="life-goodsTip">
                            <dl class="life-goodsMark">家务</dl>
                        </div>
                        <ul class="life-goodsUl clearFix onlyStyle">
                            <li>
                                <img src="./j1.jpg" alt="">
                                <dl>家务工具</dl>
                            </li>
                            <li>
                                <img src="./j2.jpg" alt="">
                                <dl>家庭清洁剂</dl>
                            </li>
                            <li>
                                <img src="./j3.jpg" alt="">
                                <dl>防霉除菌</dl>
                            </li>
                            <li>
                                <img src="./j4.jpg" alt="">
                                <dl>百纳箱</dl>
                            </li>
                            <li>
                                <img src="./j5.jpg" alt="">
                                <dl>衣物收纳</dl>
                            </li>
                            <li>
                                <img src="./j6.jpg" alt="">
                                <dl>孝素洗衣液</dl>
                            </li>
                            <li>
                                <img src="./j7.jpg" alt="">
                                <dl>魔力挂钩</dl>
                            </li>
                            <li>
                                <img src="./j8.jpg" alt="">
                                <dl>生活必备</dl>
                            </li>
                            <li>
                                <img src="./j9.jpg" alt="">
                                <dl>地毯地垫</dl>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isA:true
            }
        },
        methods:{
            addClassName($event){
                $event.currentTarget.className='searchinput2';
            },
            addClassSearchInput(){
                    this.isA=this.isA
            }
        }
    }
</script>

<style>

    .all_container{
        position: relative;
        height:667px;
    }
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
    #search-bar{
        width: 94%;
        height: 3rem;
        overflow: hidden;
        border-radius: 6px;
        padding: 0;
        position: relative;
        margin:0 auto;

    }
    .searchinput{
        width: 100%;
        height: 3rem;
        background-color: #fff;
        background-image:url("./gj.png");
        background-position:38% .1rem;
        background-repeat: no-repeat;
        border: 0px;
        text-align: center;
        border-radius: 6px;
        padding-left: 3rem;
        font-size:1.6rem;
        position:absolute;
        left:0;
        top:0;
        z-index:5;
    }
    .searchinput2{
        width: 88%;
        height: 3rem;
        background-color: #fff;
        background-image:url("./gj.png");
        background-position:2% .1rem;
        background-repeat: no-repeat;
        border: 0px;
        text-align: left;
        border-radius: 6px;
        padding-left: 3rem;
        font-size:1.6rem;
        position:absolute;
        left:0;
        top:0;
    }
    .btn_res{
        float: right;
        background: none;
        background-color: transparent;
        border: 0;
        text-align: right;
        font-size: 16px;
        color: #83b842;
        line-height:20px;
        margin-top:6px;
    }

    .content_wrap{
        position: absolute;
        top:96px;
        height:516px;
    }
    .life_model{
        overflow: hidden;
    }
    .life-goodsAll,.life-goodsBox{
        margin-top:2rem;
        width:100%;
    }
    .life-goodsTip{
        width:10rem;
        text-align: center;
        margin:0 auto;
    }
    .life-goodsMark{
        text-align: center;
    }
    .life-goodsTip dl:last-child {
        line-height: 2.4rem;
    }
    .life-goodsTip dl{
        height:3rem;
    }
    .life-goodsTip .life-goodsMark {
        font-size: 1.8rem;
        letter-spacing: .2rem;
        position: relative;
    }

    .life-goodsUl  li{
        width:33%;
        float: left;
        text-align:center;
        border: 1px solid #f1f1f1;
        margin: 0 0 -1px -1px;
    }
    .life-goodsUl  li img{
        width:60%;
        padding-top: 1rem;
    }
    .life-goodsUl li dl{
        height: 2rem;
        line-height: 2rem;
        padding-bottom: 1rem;
        padding-top: .5rem;
        font-size: 1.3rem;
    }
</style>
