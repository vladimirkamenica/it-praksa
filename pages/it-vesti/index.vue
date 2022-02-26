<template>
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
                 <button class="btn btn-success" v-if="newsLength" @click="loadMore">Učitaj više</button>
             </b-col>
           </b-row>
            <b-row>
             <b-col>
               <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>
             </b-col>
           </b-row>
         </div>
         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
       
         </div>
     </div>
</div>
</template>

<script>
import NewspapersDisplay from "~/components/newspapers/newspapers"
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';
export default {
layout: 'DashboardLayout',
name: 'itvesti',
components:{
  NewspapersDisplay,
  Advertisements
},
async asyncData({app,route}){
   let newspaper = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/newspaper-news-page?page=1`);
   let advertisement = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/ads-to-page?route=${route.path}&category=`);
    return{
       newspapers: newspaper.newspapers.data,
       advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
    }
},
 head(){
       return{
            htmlAttrs:{lang: 'sr'},
       }
  },
data(){
  return{
    page: 1
  }
},

computed:{
   newsLength(){
      this.newspapers.length == 6 ? true : false;
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