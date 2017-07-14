<template>
    <div class="naver" ref="slideNaver">
        <ul>
            <li>
                <a href="#">首页</a>
            </li>
            <li>
                <a href="#">新品</a>
            </li>
            <li>
                <a href="#">家务</a>
            </li>
            <li>
                <a href="#">下厨</a>
            </li>
            <li>
                <a href="#">家居服</a>
            </li>
            <li>
                <a href="#">生活</a>
            </li>
            <li>
                <a href="#">软装</a>
            </li>
            <li>
                <a href="#">床品</a>
            </li>
            <li>
                <a href="#">工作和旅行</a>
            </li>
            <li>
                <a href="#">了解LifeVC</a>
            </li>
        </ul>
    </div>

</template>

<script>
    import Vue from 'vue'
    import BScroll from 'better-scroll'
    export default {
        created(){
                this._initScroll()
        },
        methods: {
            _initScroll () {
                // 创建分类列表的Scroll对象
                setTimeout(()=>{
                    new BScroll(this.$refs.slideNaver, {
                        startx: 0,
                        scrollX:true
                    },1000)
                })

            }
        }
    }
</script>

<style>
    .naver{
        height:45px;
        width: 800px;
        float: left;
        overflow: hidden;
        background-color: white;
    }
    .naver ul{
        height:100%;
        width: 800px;
        overflow:hidden ;
    }
    .naver ul li{
        width:80px;
        float: left;
        list-style: none;
    }
    .naver ul li a{
        width:80px;
        display:block;
        color:black;
        line-height: 45px;
        height:45px;
        text-align: center;
    }
</style>
