<template>
<div>
  <b-container fluid class="mt-0">
     <social-sharing :url='getFullpath' :title='title'></social-sharing>
     <hr>
 </b-container>
  <div class="container-fluid minPageHeight">
     <div class="row">
         <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
            <div class="row mt-4">
                <div class="col text-dark">
                    <h1>Marketing</h1>
                    <p>
                   Portal itpraksa.com svakodnevno posećuju mladi programeri u potrazi za prvim poslom, zatim kompanije koje traže mlade praktikante i juniore, ali i svi oni koji traže informacije i savete da li učiti programiranje i koji programski jezik.<br><br>
                   Itpraksa.com svakodnevno ima sve više poseta, objavljenih statističkih podataka, videa, informacija, saveta, preporuka, it vesti, oglasa za praksu i posao.<br><br>
                   Postavite istaknuti oglas, banere u više dimenzija i na različitim mestima na portalu.<br><br>
                   Budite slobodni i kontaktirajte nas!!!<br><br>
                   063 85 42 651<br><br>
                   info@itpraksa.com<br><br>
          </p>
                </div>
            </div>
           <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>        
         </div>
         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 text-center" >
           <a href="https://esenca.rs" target="_blank">
             <img class="img-fluid" :src="require('~/static/img/brand/esenca-web-ecommerce.webp')" alt="esenca">
           </a>
         </div>
     </div>
</div>
</div>
</template>

<script>
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';
import SocialSharing from '~/components/SocialSharing/SocialSharing';
export default {
layout: 'DashboardLayout',
name: 'marketing',
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
 
    let advertisement = await app.$axios.$get(`/api/ads-to-page?route=${route.path}&category=''`);
    return {
    
      advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
      
    }
},
data(){
   return{
     title: 'Marketing'
   }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: "Marketing",
         
       }
  },
}

</script>

<style>

</style>