<template>
    <div>
        <div class="login_wrap">
            <div class="old_user_login">
                <div class="icon" @click="toBack"></div>
                <img class="login_img" src="./bg_img.png" alt="">
            </div>
            <div class="bg_wrap">
                <div class="login_content">
                    <h1>老用户登录</h1>
                    <div id="wrap">
                        <div v-show="isShow"  class="res_login">
                            <form action="" id="res_form">
                                <ul class="login_fm_list">
                                    <li class="tel">
                                        <input class="res_tel" type="text" maxlength="11" placeholder="请输入手机号">
                                    </li>
                                    <li class="pas">
                                        <input class="res_pas" type="password" maxlength="20" placeholder="请输入手机验证码">
                                        <a href="#" class="gettext">获取验证码</a>
                                    </li>
                                </ul>
                                <div id="res_setting" class="set_link">
                                    <span class="res_sp1">遇到问题？请<a href="#">联系客服</a></span>
                                    <span class="res_sp2" @click="forgetPsd">账号密码登录 〉</span>
                                </div>
                            </form>
                        </div>
                        <div v-show="isClose" class="login">
                            <form action="" id="login_form">
                                <ul class="login_fm_list">
                                    <li class="tel">
                                        <input class="tel_num" type="text" maxlength="11" placeholder="请输入手机号">
                                    </li>
                                    <li class="pas">
                                        <input class="pas_num" type="password" maxlength="20" placeholder="请输入登录密码">
                                        <a class="rePssword">忘记密码</a>
                                    </li>
                                </ul>
                                <div id="setting" class="set_link">
                                    <span @click="forgetPsd">手机号快速登录 〉</span>
                                </div>
                            </form>
                        </div>
                        <input @click="login" class="btn_login" type="button" value="登录">
                        <input @click="rogin" class="btn_register" type="button" value="注册">
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
              isShow:false,
              isClose:true
            }
        },
        methods:{
            toBack(){
                this.$router.push({path:'/usercenter'})
            },
            forgetPsd(){
                this.isShow=!this.isShow
                this.isClose=!this.isClose
            },
            login(){
                alert('点也没用')
            },
            rogin(){
                this.$router.push({path:'/register'})
            }
        }
    }
</script>

<style>
    .login_wrap{
        position: relative;
        left: 0;
        top: 0;
        z-index: 100;
    }
    .old_user_login{
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
    .old_user_login :after{
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
    .login_img{
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
    .login_content{
        height:325px;
    }
    .login_content h1{
        width: 100%;
        text-align: center;
        color: #037049;
        font-size: 20px;
        line-height: 84px;
        box-sizing: border-box;
        height:84px;
        fonnt-weight:400;
    }
    #wrap{
        height:243px;
    }
    #login_form,#res_form{
        height:152px;
    }
    .login_fm_list{
        height:102px;
        position: relative;
    }

    .tel,.pas{
       width:90%;
       height:50px;
       margin:0 auto;
       border-bottom: 1px solid #dbdbdb
    }
    .tel_num,.pas_num,.res_tel,.res_pas{
        font-size: 16px;
        width: 100%;
        background: transparent;
        height: 50px;
        border: none;
        position: relative;
        outline: none;
    }
    .gettext{
        position: absolute;
        right: 20px;
        top: 4px;
        border: 1px solid #3aad36;
        color: #3aad36;
        padding: 10px 15px;
        border-radius: 5px;
        font-size:16px;
    }
    .rePssword{
        position: absolute;
        right: 20px;
        top: 58px;
        border: 1px solid #3aad36;
        color: #3aad36;
        padding: 10px 15px;
        border-radius: 5px;
        font-size:16px;
    }
    #res_setting{
        height:50px;
    }
    #res_setting .res_sp1{
        float: left;
        margin-right:20px;
        font-size:15px;
        line-height: 50px;
        margin-left:20px;
    }
    #res_setting .res_sp2{
        float: right;
        margin-right:20px;
        font-size:16px;
        line-height: 50px;
        color:#3aad36;
    }
    #res_setting .res_sp1 a{
        color:#3aad36;
    }
    #setting{
        height:50px;
    }
    #setting span{
        float: right;
        margin-right:20px;
        font-size:16px;
        line-height: 50px;
        color:#3aad36;
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
