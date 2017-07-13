<template>
    <div>
            <!--商品详情头部-->
        <div class="sd_header">
            <div class="sd_header_icon">
                <h2>商品介绍</h2>
            </div>
        </div>
        <div class="sd_content">
                      <!--轮播图-->
            <shop_carousel :shop_imgs="shop_imgs"></shop_carousel>
        </div>
    </div>
</template>

<script>
    import shop_carousel from '../shop_carousel/shop_carousel.vue'

    import b1 from'./sp1.jpg'
    import b2 from'./sp2.jpg'
    import b3 from'./sp3.jpg'
    import b4 from'./sp4.jpg'
    import b5 from './sp5.jpg'
    export default {
        data(){
            return{
                shop_imgs:[
                    {url: b1},
                    {url: b2},
                    {url: b3},
                    {url: b4},
                    {url: b5},
                ]
            }
        },
        components:{
            shop_carousel
        }
    }
</script>

<style>

    .sd_header_icon{
        height: 4rem;
        background-color: #89BE48;
        position: relative;
        margin-bottom:.5rem;
    }
    .sd_header_icon h2{
        line-height: 4rem;
        color: white;
        font-size: 2rem;
        text-align: center;
    }
</style>
