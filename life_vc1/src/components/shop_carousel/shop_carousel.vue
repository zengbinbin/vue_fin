<template>
    <div class="sp_container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="img in shop_imgs"
                 :style="{ backgroundImage: 'url(' + img.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white "></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props:['shop_imgs'],
        mounted() {
            console.log('mounted', this)
            var swiper = new Swiper('.sp_container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 1000,
                autoplay: 500,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style>
    .sp_container {
        width: 100%;
        height:375px;
    }
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }

    .swiper-pagination-bullet {
        width:0.833rem;
        height: 0.833rem;

        display: inline-block;
        background: #7c5e53;
        color:green;
    }
    .swiper-pagination-white .swiper-pagination-bullet {
        background: green;
    }
</style>
