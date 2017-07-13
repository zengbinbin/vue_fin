<template>
    <div>
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
                <div data-v-60df7298="" class="item-combo">
                    <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
                        <div data-v-46782024="" class="combo-title"></div>
                        <div data-v-46782024="" class="img-wrap" style="height: 90px;">
                            <img data-v-46782024="" usemap="#planetmap0" src="./m1.jpg" lazy="loaded" style="width: 100%; height:
                            90px;">
                            <map data-v-46782024="" name="planetmap0" id="planetmap0">
                                <area data-v-46782024="" shape="rect" coords="0,9,123,88" href="http:www.baidu.com">
                                <area data-v-46782024="" shape="rect" coords="123,9,251,90">
                                <area data-v-46782024="" shape="rect" coords="251,9,375,89">
                            </map>
                        </div>
                    </div>
                </div>
                <div data-v-60df7298="" class="item-combo">
                    <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
                        <div data-v-46782024="" class="combo-title"></div>
                        <div data-v-46782024="" class="img-wrap" style="height: 150px;">
                            <img data-v-46782024="" usemap="#planetmap1" src="./m2.jpg" lazy="loaded" style="width: 100%; height:
                            150px;">
                            <map data-v-46782024="" name="planetmap1" id="planetmap1">
                                <area data-v-46782024="" shape="rect" coords="0,1,375,148">
                            </map>
                        </div>
                    </div>
                </div>
                <div data-v-60df7298="" class="item-combo">
                    <div title="组合图活动">
                        <div class="combo-title"></div>
                        <div class="img-wrap" style="height: 925px;">
                            <img usemap="#planetmap2" src="http://i.lifevccdn.com/upload/combinationchart/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 925px;">
                            <map name="planetmap2" id="planetmap2">
                                <area shape="rect" coords="0,64,375,231">
                               <router-link to="/shop_detail"> <area shape="rect" coords="0,240,375,407"></router-link>
                                <area shape="rect" coords="0,407,375,573">
                                <area shape="rect" coords="0,573,123,749">
                                <area shape="rect" coords="123,573,251,749">
                                <area shape="rect" coords="251,573,375,749">
                                <area shape="rect" coords="0,749,123,925">
                                <area shape="rect" coords="123,749,251,925">
                                <area shape="rect" coords="251,749,375,925">
                            </map>
                        </div>
                    </div>
                </div>
                <div data-v-60df7298="" class="item-combo">
                    <div title="组合图活动">
                        <div class="combo-title"></div>
                        <div class="img-wrap" style="height: 925px;">
                            <img usemap="#planetmap2" src="http://i.lifevccdn.com/upload/combinationchart/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 925px;">
                            <map name="planetmap3" id="planetmap3">
                                <area shape="rect" coords="0,64,375,231">
                                <area shape="rect" coords="0,240,375,407">
                                <area shape="rect" coords="0,407,375,573">
                                <area shape="rect" coords="0,573,123,749">
                                <area shape="rect" coords="123,573,251,749">
                                <area shape="rect" coords="251,573,375,749">
                                <area shape="rect" coords="0,749,123,925">
                                <area shape="rect" coords="123,749,251,925">
                                <area shape="rect" coords="251,749,375,925">
                            </map>
                        </div>
                    </div>
                </div>
        </div>
        </scroller>
    </div>
</template>
<script>
    import header from'../header/header.vue'
    import navter from '../navter/navter.vue'
    import carousel from '../carousel/carousel.vue'

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
               listImg:[
                   {url : a1},
                   {url : a2},
                   {url : a3},
                   {url : a4},
                   {url : a5},
                   {url : a6},
                   {url : a7},
                   {url : a8},
               ],
           }
        },
        components: {
            'el-header': header,
            navter,
            'app-carousel':carousel
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
        padding-bottom: 4.5rem;
    }

    .carousel img {
        display: block;
        width: 100%;
    }

    .item-combo {
        margin-bottom: 1rem;
    }
    ._v-container[data-v-ecaca2b0]{
        padding-top:95px;
    }
</style>
