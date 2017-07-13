<template>
    <div class="header-Ico">
        <h2>LìfeVC°丽芙家居</h2>
        <div class="header_search" @click="searchAll">
            <img src="./s1.png" />
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            searchAll(){
            setTimeout(()=>{
                this.$router.push({path:'/allshop'})
            },1000)
            }
        }
    }
</script>

<style>
    *{
        margin:0;
        padding:0;
        text-decoration: none;
        list-style: none;
    }
    .header-Ico{
        height:4rem;
        background-color: #89BE48;
        position: relative;
    }
    .header-Ico h2{
        line-height: 4rem;
        color:white;
        font-size:2.5rem;
        text-align: center;
    }
    .header_search{
        width:44px;
        height:44px;
        position: absolute;
        right:0;
        top:0;
    }
    .header_search img{
        display: block;
        width: 25px;
        height: 25px;
        margin-top: 12px;
        margin-left:5px;
        z-index:5
    }
</style>
