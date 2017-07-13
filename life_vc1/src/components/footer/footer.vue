<template>
    <div class="bottombar footer" >
            <ul class="footermenuNav">
                <li><Link to="/home">
                    <div class="ico"><img src="./f1.png"></div>
                    <span class="lispan">首页</span></Link>
                </li>
                <li><Link to="/allshop">
                    <div class="ico"><img src="./f2.png"></div>
                    <span>全部产品</span></Link>></li>
                <li><<Link to="/stroll">
                    <div class="ico"><img src="./f3.png"></div>
                    <span>闲逛</span></Link>></li>
                <li><<Link to="/shopcard">
                    <div class="ico"><img src="./f4.png"></div>
                    <span>购物车</span> </Link></li>
                <li><Link to="/userperson">
                    <div class="ico"><img src="./f5.png"></div>
                    <span>账户中心</span> <span class=""></span></Link>
                </li>

            </ul>
    </div>
</template>
<script>
    export default {}
</script>
<style>
    .footer{
        position: absolute;
        bottom:0;
        left:0;
        background-color:white;
    }
    .footermenuNav{
        height:55px;
        width:100%;
    }
    .footermenuNav li{
        width:20%;
        float: left;
    }
    .footermenuNav li span{
        display: block;
        color: black;
        text-align: center;
    }
    .ico{
        width:100%;
        height:39.59px;
    }
    .ico img{
        display: block;
        width:20px;
        height:20px;
        text-align: center;
        margin-left:25px;
        padding-top:15px;
    }


</style>
