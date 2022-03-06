<template>
<div>
  <b-container fluid class="mt-0">
     <social-sharing :url='getFullpath' :title='newspaper.title_news'></social-sharing>
     <hr>
 </b-container>
  <b-container fluid class="minPageHeight">
     <b-row>
       <b-col xl="9" lg="9" md="12" sm="12" cols="12">
           <b-row>
             <b-col cols="12">
               <h1>{{newspaper.title_news}}</h1>
             </b-col>
             <b-col>
                 <h3>{{dateNews(newspaper.date_news)}} | <nuxt-link :to="{name:'it-vesti'}">VESTI</nuxt-link> </h3>
             </b-col>
           </b-row>
             <b-row class="mt-4">
               <b-col class="bg-white shadow ql-editor text-dark" v-html="newspaper.description">

               </b-col>
             </b-row>
             <b-row class="mt-4">
               <b-col>
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

import srToLat from '~/util/srToLat';
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';
import SocialSharing from '~/components/SocialSharing/SocialSharing';

export default {
layout: 'DashboardLayout',
name: 'news',
components:{
  Advertisements,
  SocialSharing
},
computed:{
getFullpath(){
        return  `https://itpraksa.com${this.$nuxt.$route.fullPath}`;
    }
},
async asyncData({app,params,route}){
  let newspaper = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/newspaper-news-single?title=${encodeURIComponent(params.title.split('-').join(' '))}`);
  let advertisement = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/ads-to-page?route=${route.path}&category=/it-vesti}`);
  
  return {
    newspaper : newspaper.newspaper,
    advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),

  }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: this.newspaper.title_news,
          meta: [   
       { hid: 'description', name: 'description', content: this.newspaper.description_meta},
       { hid: 'og:image', property: 'og:image', content: this.newspaper.img_news},
       { hid: 'og:title', property: 'og:title', content: this.newspaper.title_news},
       { hid: 'og:description', name: 'og:description', content: this.newspaper.description_meta},

    ],
       }
  },
methods:{
   dateNews(date){
       return this.$moment(date).format("DD.MM.YYYY")
    },
}
}
</script>

<style>

</style>