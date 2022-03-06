<template>
<div>
  <b-container fluid class="mt-0">
     <social-sharing :url='getFullpath' :title='videos.title_video'></social-sharing>
     <hr>
 </b-container>
  <b-container fluid class="minPageHeight"> 
       <b-row>
         <b-col xl="9" lg="9" md="12" sm="12" cols="12">
              <b-row>
             <b-col cols="12">
               <h1>{{videos.title_video}}</h1>
             </b-col>
             <b-col>
                 <h3>{{dateNews(videos.date_video)}} |  <nuxt-link :to="{name:'categoryvideo',params:{category:category.toLowerCase()}}">{{category.split('-').join(' ').toUpperCase()}}</nuxt-link></h3>
             </b-col>
           </b-row>
             <b-row class="mt-4 bg-white">
                <b-col cols="12" >
                    <video-player class="embed-responsive-item"  :src="videos.link" ></video-player>
                </b-col>
               <b-col cols="12" class="bg-white border-0 ql-editor text-dark" v-html="videos.description">
 
               </b-col>
             </b-row>
             <b-row>
               <b-col class="mt-3">
                   <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>
               </b-col>
             </b-row>
         </b-col>
        <b-col xl="3" lg="3" md="12" sm="12" cols="12" class="text-center">
          <a href="https://esenca.rs" target="_blank">
             <img class="img-fluid" :src="require('~/static/img/brand/esenca-web-ecommerce.webp')" alt="esenca">
           </a>
         </b-col>
       </b-row>
  </b-container>
  </div>
</template>

<script>
import VideoDisplay from '~/components/videos-display/videos-display';
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';
import VideoPlayer from 'nuxt-video-player'
import srToLat from '~/util/srToLat';
import SocialSharing from '~/components/SocialSharing/SocialSharing';


export default {
name: 'categorytitle',
layout: 'DashboardLayout',
components:{
  VideoDisplay,
  Advertisements,
  VideoPlayer,
  SocialSharing
},
async asyncData({app,params,route}){
    let video = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/video-by-title?title=${params.title}`);
    let advertisement = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/ads-to-page?route=${route.path}&category=/${params.categoryvideo}`);
    
    return {
      videos: video.video,
      advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
      category : params.categoryvideo
    }
},
computed:{
getFullpath(){
        return  `https://itpraksa.com${this.$nuxt.$route.fullPath}`;
    }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: this.videos.title_video,
          meta: [   
       { hid: 'description', name: 'description', content: this.videos.description_meta},
       { hid: 'og:title', property: 'og:title', content: this.videos.title_video},
       { hid: 'og:description', name: 'og:description', content: this.videos.description_meta},

    ],
       }
  },
methods:{
   dateNews(date){
       return this.$moment(date).format("DD.MM.YYYY")
    },
    srtToLatPath(title){
     return srToLat(title).split(' ').join('-').toLowerCase().replace(/[?]/g,'');
    },
}
}
</script>

<style>

</style>