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
                    <h1>O nama</h1>
                    <br>
                    <p>
                   ITpraksa.com je projekat koji je nastao nakon 21 godine rada u IT sektoru Predraga Mašića i kompanije Esenca Software.    <br> <br>

Osim programerskih projekata, Esenca kako trenutno, a tako i do sada, obučila je, istestirala i odradila praksu za nekoliko stotina programera za druge IT kompanije.<br> <br>

Takođe i kroz samu kompaniju, prošlo je određeni broj programera.<br> <br>

Saveti, preporuke, analize, primeri testiranja i intervjua namenjeni su IT početnicama koji traže prvi posao u IT sektoru i koji se bave programiranjem.<br> <br>

Projekat je namenjen i IT poslodavcima koji žele da objave oglas za praksu ili posao.<br> <br>

Razni video tutorijali odnose se i na različite primere u programskim jezicima.<br> <br>


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
name: 'about',
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
     title: 'O nama'
   }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: "O nama",
         
       }
  },
}

</script>

<style>

</style>