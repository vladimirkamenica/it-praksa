<template>
  <b-container fluid class="minPageHeight"> 
       <b-row>
         <b-col xl="9" lg="9" md="12" sm="12" cols="12">
           <b-row>
             <b-col cols="12" v-if="videos.length > 0">
               <h1>{{videos[0].category.video_category}}</h1>
             </b-col>
           </b-row>
            <video-display :xl_col="4" :big="false" :videos="videos"></video-display>
            <b-row>
              <b-col class="text-center">
                 <button class="btn btn-success" v-if="videoLength"  @click="loadMore">Učitaj više</button>
              </b-col>
            </b-row>
           <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>

         </b-col>
        <b-col xl="3" lg="3" md="12" sm="12" cols="12">
           
         </b-col>
       </b-row>
  </b-container>
</template>

<script>
import VideoDisplay from '~/components/videos-display/videos-display';
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';

export default {
name: 'category',
layout: 'DashboardLayout',
components:{
  VideoDisplay,
  Advertisements
},
async asyncData({app,params,route}){
    let video = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/video-by-category?category=${params.categoryvideo}&page=1`);
    let advertisement = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/ads-to-page?route=${route.path}&category=''`);
    return {
      videos: video.videos.data,
      advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
      vidoeHead : video.videos.data.length > 0 ? video.videos.data[0] : []
      
    }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: this.videos.length > 0 ? this.videos[0].category.video_category : '',
          meta: [   
       { hid: 'description', name: 'description', content: this.videos.length > 0 ? this.videos[0].category.description_meta_category: ''},
       { hid: 'og:title', property: 'og:title', content: this.videos.length > 0 ? this.videos[0].category.video_category: ''},
       { hid: 'og:description', name: 'og:description', content: this.videos.length > 0 ? this.videos[0].category.description_meta_category: ''},

    ],
       }
  },
data(){
   return {
     page : 1
   }
},
computed:{
  videoLength(){
    return this.videos.length >= 6 ? true : false;
  }
},
methods:{
  async loadMore(){
    this.page++;
    let video = await this.$axios.$get(`${this.$axios.defaults.baseURL}/api/video-by-category?category=${this.$route.params.categoryvideo}&page=${this.page}`);
    video.videos.data.forEach(video => this.videos.push(video));
    
  }
}
}
</script>

<style>

</style>