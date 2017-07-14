<template>
    <div>
        <!-- <div class="header-wrapper">
           <div id="header">
             <router-link to="/all">
               <span class="allP"></span>
             </router-link>

           </div>
           <div class="menuWrap" ref="menuWrap">
             <ul class="menuWrap_u">
               <li>
                 <a>首页</a>
               </li>
               <li>
                 <router-link to="/new">新品</router-link>
                 &lt;!&ndash;<a>新品</a>&ndash;&gt;
               </li>
               <li>
                 <a>家务</a>
               </li>
               <li>
                 <a>下厨</a>
               </li>
               <li>
                 <a>家居服</a>
               </li>
               <li>
                 <a>生活</a>
               </li>
               <li>
                 <a>软装</a>
               </li>
               <li>
                 <a>床品</a>
               </li>
               <li>
                 <a>工作和旅行</a>
               </li>
               <li>
                 <a>了解LifeVC</a>
               </li>

             </ul>
           </div>
         </div>-->

        <live-header></live-header>

        <scroller :on-infinite="infinite"
                  :on-refresh="refresh"

        >

            <div class="main-wrap" id="w" >

                <div class="swiper">
                    <mt-swipe :auto="2000">
                        <mt-swipe-item>
                            <router-link to="/login">
                                <img src="./09c6c6a15c2d48d19a03b473a7c3764a_d1242x0.jpg"/>
                            </router-link>

                        </mt-swipe-item>
                        <mt-swipe-item>
                            <router-link to="/detail">
                                <img src="http://i.lifevccdn.com/upload/IndexBanner/924590309cb749fabf810a832a402984_d1242x0.jpg"/>
                            </router-link>

                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="http://i.lifevccdn.com/upload/IndexBanner/dd0e77b30b7a4457ad4bff10a5ef028e_d1242x0.jpg"/>
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <div class="img-wrap3" v-for="(item,index) in lists" key="index">
                    <img v-lazy="item" usemap="#planetmap"/>
                </div>

                <map name="planetmap" id="planetmap">
                    <area
                            shape="rect"
                            coords="0,9,123,88"
                            href ="http://localhost:8080/#/all"
                            target ="_self"
                            alt="Sun" />
                    <area
                            shape="rect"
                            coords="123,9,251,90"
                            href ="http://localhost:8080/#/login"
                            target ="_self"
                            alt="Sun" />
                    <area
                            shape="rect"
                            coords="251,9,375,89"
                            href ="http://localhost:8080/#/register"
                            target ="_self"
                            alt="Sun" />

                </map>

            </div>

        </scroller>
        <a class="backTop" href="w" v-show="backShow"></a>

    </div>

</template>

<script>
    import Vue from 'vue'
    import {Swipe, SwipeItem} from 'mint-ui'
    import BScroll from 'better-scroll'
    import {Lazyload} from 'mint-ui'
    import axios from 'axios'
    import header from '../header/header.vue'


    Vue.use(Lazyload);

    export default {

        data () {
            return {
                items: [],
                lists: [],
                top :0,
                bottom :0,
                backShow:false,


            }
        },

        updated () {

            var back = document.getElementById("w")
            /*console.log(back)*/
            if(back.getBoundingClientRect().top <-800) {
                this.backShow = true
            }else {
                this.backShow = false
            }
        },
        components :{
            'live-header' :header,
        },
        created () {


            axios.get('/api/homeImg')
                    .then(response=>{
                                var result = response.data
                                /*console.log(result.code)*/
                                if(result.code === 0 ){
                                    this.items = result.data
                                    var imgArr = this.items
                                    console.log(imgArr.length)
                                    for (let i = 0; i <= 1; i++) {
                                        this.lists.push(imgArr[i].local)
                                    }
                            this.top = 1
                            this.bottom = 3
                            /*this.lists = result.data*/
                        }

                    });


        },
        methods: {

            myFunction (event) {
                console.log('sdsd')
            },

            refresh(done) {
                setTimeout(() => {

                    done()
                }, 1500)
            },
            infinite(done) {
                if (this.bottom >= 25) {
                    setTimeout(() => {
                        done(true)
                    }, 1500)
                    return;
                }

                setTimeout(() => {

                    let start = this.bottom + 1
                    for (let i = start; i < start +2; i++) {


                        this.lists.push(this.items[i].local)
                    }
                    this.bottom = this.bottom + 2;
                    setTimeout(() => {
                        done()
                    })
                }, 1500)
            }
        }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .main-wrap
        padding-bottom: 130px
        .swiper
            width: 100%
            height: 250px
            margin-top: 94px
            .mint-swipe-item
                img
                    width: 100%
            .mint-swipe-indicator.is-active
                background: blue
                opacity: 0.6
        .newproduct-wrap
            width: 100%
            height: 150px
            background: #eee
            margin-top: 1rem
            img
                width: 100%
        .img-wrap3
            width: 100%
            height: auto
            /*height: 238px*/
            background: #eee
            padding-bottom: 1rem
            img
                width: 100%
            image[lazy=loading]
                width: 40px
                height: 375px
                margin: auto
    .backTop
        display :inline-block
        width :70px
  </style>