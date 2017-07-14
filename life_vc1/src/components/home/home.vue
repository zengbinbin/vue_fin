<template>
    <div class="home">
        <header>
            <el-header></el-header>
            <navter></navter>
        </header>
        <scroller
                :on-refresh="refresh"
                :on-infinite="infinite"
                ref="my_scroller"
        >
            <div class="wraper">
                <!--轮播图-->
                <app-carousel :listImg="listImg"></app-carousel>
                <div class="item-combo carousel" v-for="homeImg in homeImgs">
                    <img :src='homeImg' usemap="#planetmap" />
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {Lazyload} from 'mint-ui'

    import header from'../header/header.vue'
    import navter from '../navter/navter.vue'
    import carousel from '../carousel/carousel.vue'
    import axios from 'axios'

    Vue.use(Lazyload)

    //引入图片
    import a1 from '../carousel/l1.jpg'
    import a2 from '../carousel/l3.jpg'
    import a3 from '../carousel/l4.jpg'
    import a4 from '../carousel/l5.jpg'
    import a5 from '../carousel/l6.jpg'
    import a6 from '../carousel/l7.jpg'
    import a7 from '../carousel/l8.jpg'
    import a8 from '../carousel/l9.jpg'

    export default {
        data(){
            return{
                homeImgs: [],
                listImg:[
                    {url : a1},
                    {url : a2},
                    {url : a3},
                    {url : a4},
                    {url : a5},
                    {url : a6},
                    {url : a7},
                    {url : a8},
                ]

            }
        },
        components: {
            'el-header': header,
            navter,
            'app-carousel':carousel
        },
        created(){
            axios.get('/api/home')
                    .then(response=>{
                const result=response.data
                if(result.code === 0){
                     console.log('520')
                    this.homeImgs=result.data.homeImgs
                }
            })
        },
        methods:{
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
                setTimeout(() => {
                    let start = this.bottom + 1
                    for (let i = start; i < start + 10; i++) {
                        this.items.push(i + ' - keep walking, be 2 with you.')
                    }
                    this.bottom = this.bottom + 10
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
    header{
        padding: 0;
        width: 100%;
        background: #89be48;
        position: fixed;
        top: 0;
        z-index: 999;
        min-width: 320px;
        max-width: 640px;
    }

    .wraper{
        height:100%;
        padding-bottom: 54px;
    }

    .carousel img {
        display: block;
        width: 100%;
    }

    .item-combo {
        margin-bottom: 1rem;
    }
    .home ._v-container[data-v-ecaca2b0]{
        padding-top:95px;
    }
</style>
