<template>
    <div class="userCenter">
        <!--头部-->
        <div class="usercenter">
            <h2>账户中心</h2>
            <span @click="mySettings"><router-link to="/settings">设置</router-link></span>
        </div>
        <!--包裹区-->
        <scroller
                :on-refresh="refresh"
                :on-infinite="infinite"
                ref="my_scroller"
        >
            <div class="usercenterWrap">
                <div class="acct-user-wrap">
                    <div class="acct-nolog">
                        <span class="state">您还未登录</span>
                        <br>
                        <div class="btn-entry">
                            <router-link to="/login"> 登录</router-link>
                            <a><span class="split">|</span></a>
                            <router-link to="/register"> 注册</router-link>
                        </div>
                    </div>
                </div>
                <!--六个无序列表-->
                <div class="dashboard-order life-dashboard-order">
                        <ul class="f1_ul">
                            <li class="f1_li"><a href="#">
                                <span class="s1_img s_img"></span>
                                <span class="Item_title">待支付</span>
                            </a></li>
                            <li class="f1_li"><a href="#">
                                <span class="s2_img s_img"></span>
                                <span class="Item_title">待发货</span>
                            </a></li>
                            <li class="f1_li"><a href="#">
                                <span class="s3_img s_img"></span>
                                <span class="Item_title">待收货</span>
                            </a></li>
                        </ul>
                        <ul class="f1_ul">
                        <li class="f1_li"><a href="#">
                            <span class="s4_img s_img"></span>
                            <span class="Item_title">带评论</span>
                        </a></li>
                        <li class="f1_li"><a href="#">
                            <span class="s5_img s_img"></span>
                            <span class="Item_title">回复</span>
                        </a></li>
                        <li class="f1_li"><a href="#">
                            <span class="s6_img s_img"></span>
                            <span class="Item_title">退换货</span>
                        </a></li>
                    </ul>
                </div>
                <div class="dashboard">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="./ic1.png" alt="">
                                <span class="item_title">我的订单</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="./ic1.png" alt="">
                                <span class="item_title">我的订单</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./ic2.png" alt="">
                                <span class="item_title">我的优惠券</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./ic3.png" alt="">
                                <span class="item_title">现金积分</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="./ic4.png" alt="">
                                <span class="item_title">关于发票</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./ic5.png" alt="">
                                <span class="item_title">密码和登录信息</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                            <img src="./ic6.png" alt="">
                            <span class="item_title">老会员建议</span>
                            <span class="item_bz"><img src="./ic10.png" alt=""></span>
                        </a>
                    </li>
                        <li>
                            <a href="#">
                                <img src="./ic7.png" alt="">
                                <span class="item_title">客户服务</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./ic8.png" alt="">
                                <span class="item_title">手机验证</span>
                                <span class="item_bz"><img src="./ic10.png" alt=""></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        methods:{
            mySettings(){
            },
            refresh(done) {
                setTimeout(() => {
                    let start = this.top - 1
                    for (let i = start; i > start - 10; i--) {
                        this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
                    }
                    this.top = this.top - 10;
                    done()
                }, 1500)
            },
            infinite(done) {
                setTimeout(()=> {
                    let start = this.bottom + 1
                    for (let i = start; i < start + 5; i++) {
                        this.items.push(i + ' - keep walking, be 2 with you.')
                    }
                    this.bottom = this.bottom + 5
                    done()
                }, 1500)
            },
            onItemClick(index, item) {
                console.log(index)
            }
        }
    }
</script>

<style>
    .userCenter ._v-container>._v-content>.pull-to-refresh-layer[data-v-ecaca2b0] {
        position: absolute;
    }
    .usercenter{
        width:100%;
        height:4rem;
        font-size:2rem;
        background-color:#89BE48;
        text-align: center;
        position: fixed;
        z-index:500;
    }
    .usercenter h2{
        line-height: 4rem;
        color:white;
        font-size:2.5rem;
        text-align: center;
    }
    .usercenterWrap{
        height:100%;
        margin-top:48px;
        padding-bottom:54px;
    }
    .usercenter span{
        display: inline-block;
        font-size:2rem;
        line-height: 4rem;
        position: absolute;
        right:2%;
        top:0;
        margin-right:2%;
        color:white;
    }

    .acct-user-wrap{
        height:9rem;
        background-image: url("./background.png");
        background-repeat: no-repeat;
        background-size:100% 100%;
    }

    .acct-nolog {
        width: 100%;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        padding: .5rem 0 0;
    }
    .acct-nolog,.state{
        text-align: center;
        font-size: 1.6rem;
        line-height: 3rem
    }
    .acct-nolog .btn-entry{
        display: inline-block;
        padding: 0 10px;
        border-radius: 1.5rem;
        border: 1px solid #009c42;
        margin: .5rem auto 0;
        padding: 0 2rem;
    }
    .split{
        padding:0 .5rem 0 .5rem;
    }
    .btn-entry a {
        color:#009c42;
    }

    .f1_ul{
        height:5rem;
        border-bottom: 1px solid #eee;
    }
    .f1_ul span{
        display:block;
    }
    .f1_ul a{
        text-align: center;
    }
    .s1_img{
        background-image: url("./p1.png");
    }
    .s2_img{
        background-image: url("./p2.png");
    }
    .s3_img{
        background-image: url("./p3.png");
    }
    .s4_img{
        background-image: url("./p4.png");
    }
    .s5_img{
        background-image: url("./p5.png");
    }
    .s6_img{
        background-image: url("./p6.png");
    }
    .f1_li{
        margin:1.5rem 0 0;
        width: 33%;
        height: 2.5rem;
        float: left;
        border-right: 1px solid #dedede;
        line-height: 2rem;
        padding: 0;

    }
    .s_img{
        width:4rem;
        height:3rem;
        background-repeat: no-repeat;
        background-size: 75% 120%;
        background-position: 15px -7px;
    }
    .Item_title {
        font-size:1.2rem;
        margin-top:-2.5rem;
        margin-left:3.5rem;
        color: #585858;
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
    .dashboard li img{
        width: 2.5rem;
        overflow: hidden;
        display: inline-block;
        float: left;
        margin: 1.3rem 1.1rem 0;
    }
    .item_title{
        display: inline-block;
        line-height:5rem;
        font-size:1.4rem;
        color: #585858;
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
