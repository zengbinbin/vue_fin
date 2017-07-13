<template>
    <div>
        <div class="register_wrap">
            <div class="new_user_register">
                <div class="icon" @click="toBack"></div>
                <img class="register_img" src="./bg_img.png" alt="">
            </div>
            <div class="bg_wrap">
                <div class="register_content">
                    <h1>新用户注册</h1>
                    <div id="wrap">
                        <div class="register">
                            <form action="" id="register_form">
                                <ul class="fm_list">
                                    <li class="tel">
                                        <input class="it_tel" type="text" maxlength="11" placeholder="请输入手机号">
                                    </li>
                                    <li class="pas">
                                        <input class="it_pas" type="password" maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号">
                                    </li>
                                    <li class="tes">
                                        <input class="it_tes" type="text" maxlength="4" placeholder="请输入图形验证码">
                                    </li>
                                    <li class="tel_tes">
                                        <input class="it_tel_tes" type="text" maxlength="4" placeholder="请输入手机验证码">
                                    </li>
                                </ul>
                                <div id="setting" class="set_link">
                                    <span>遇到问题？请<a href="#">联系客服</a></span>
                                </div>
                                <input @click="r_register" class="btn_login" type="button" value="注册">
                                <input @click="r_login" class="btn_register" type="button" value="登录">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
    export default {
        methods:{
            toBack(){
                this.$router.push({path:'/usercenter'})
            },
            r_register(){
                alert('别傻了，注册成功')
            },
            r_login(){
                this.$router.push({path:'/login'})
            }
    }
    }
</script>

<style>
    .register_wrap{
        position:relative;
        left:0;
        top:0;
        z-index:100;

    }
    .new_user_register{
        width: 100%;
        height: 141px;
        background: #fff;
        position: relative;
    }
    .icon{
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 46px;
        border: 1px solid #3aad36;
    }
    .new_user_register :after{
        content: "";
        width: 14px;
        height: 14px;
        display: block;
        border-left: 1px solid #3aad36;
        border-top: 1px solid #3aad36;
        position: absolute;
        left: 10px;
        top: 5px;
        -webkit-transform: rotate(-45deg)
    }
    .register_img{
        width: 120px;
        height:61px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 30%;
        left: 40%;
        margin-left: -1.2rem;
    }

    .bg_wrap{
        height:526px;
        background-image: url("./login-big-bg.jpg");
        background-size:100% 100%;
        background-repeat: no-repeat;
    }
    .register_content{
        height:325px;
    }
    .register_content h1{
        width: 100%;
        text-align: center;
        color: #037049;
        font-size: 20px;
        line-height: 52px;
        box-sizing: border-box;
        height:52px;
        fonnt-weight:400;
    }
    #wrap{
        height:331px;
    }
    #register_form{
        height:331px;
    }
    .fm_list{
        height:204px;
        position: relative;
    }

    .tel,.pas,.tes,.tel_tes{
        width:90%;
        height:50px;
        margin:0 auto;
        border-bottom: 1px solid #dbdbdb
    }
    .it_tel,.it_pas,.it_tes,.it_tel_tes{
        font-size: 16px;
        width: 100%;
        background: transparent;
        height: 50px;
        border: none;
        position: relative;
        outline: none;
    }
    #setting{
        height:21px;
    }
    #setting span{
        display: block;
        text-align: center;
        font-size:14px;
        line-height: 16px;
        margin-top:10px;
    }
    #setting span a{
        color:green;
    }
    .btn_login,.btn_register{
        width: 80%;
        overflow: hidden;
        display: block;
        outline: none;
        text-align: center;
        font-size: 19px;
        color: #fff;
        line-height: 38px;
        letter-spacing: 20px;
        text-indent: 20px;
        box-sizing: border-box;
        margin:0 auto;
    }
    .btn_login{
        margin-bottom: 10px;
        background-color: #3aad36;
        border: 1px solid #3aad36;
        border-radius: 5px;
    }
    .btn_register{
        background-color: #8a8a8a;
        border: 1px solid #8a8a8a;
        border-radius: 5px;
        opacity: .5
    }

</style>
