<template>
<div>
<b-container fluid class="mt-0">
     <social-sharing :url='getFullpath' :title='title'></social-sharing>
     <hr>
 </b-container>
  <div class="container-fluid minPageHeight">
     <div class="row">
         <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
           <b-row>
             <b-col>
                <h1 class="mt-3">IT vesti</h1>
                <newspapers-display :newspapers="newspapers" :single="true"></newspapers-display>
             </b-col>
           </b-row>
           <b-row>
             <b-col class="text-center">
                 <button class="btn btn-success load-more-w m-4" v-if="newsLength" @click="loadMore">Učitaj više</button>
             </b-col>
           </b-row>
            <b-row>
             <b-col>
               <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>
             </b-col>
           </b-row>
         </div>
         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 text-center">
           <a href="https://esenca.rs" target="_blank">
             <img class="img-fluid" :src="require('~/static/img/brand/esenca-web-ecommerce.webp')" alt="esenca">
           </a>
         </div>
     </div>
</div>
</div>
</template>

<script>
import NewspapersDisplay from "~/components/newspapers/newspapers"
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';
import SocialSharing from '~/components/SocialSharing/SocialSharing';

export default {
layout: 'DashboardLayout',
name: 'itvesti',
components:{
  NewspapersDisplay,
  Advertisements,
  SocialSharing
},
async asyncData({app,route}){
   let newspaper = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/newspaper-news-page?page=1`);
   let advertisement = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/ads-to-page?route=${route.path}&category=`);
   return{
       newspapers: newspaper.newspapers.data,
       advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
       title : 'It vesti'
    }
},
 head(){
       return{
            htmlAttrs:{lang: 'sr'},
       }
  },
data(){
  return{
    page: 1,
    
  }
},

computed:{
   newsLength(){    
      return this.newspapers.length == 6 ? true : false;
   },
    getFullpath(){
        return  `https://itpraksa.com${this.$nuxt.$route.fullPath}`;
    }
},
methods:{
  async loadMore(){
    this.page++;
    let newspaper = await this.$axios.$get(`${this.$axios.defaults.baseURL}/api/newspaper-news-page?page=${this.page}`);
    newspaper.newspapers.data.forEach(news => this.newspapers.push(news));

  }
}
}
</script>

<style>

</style>