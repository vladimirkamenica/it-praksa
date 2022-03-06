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
                    <h1>Usluge</h1>
                    <br>
                    <p>
                  1. usluge za IT kompanije <br>
                    -organizovanje prakse po standardima kompanije<br>
                    -testiranje i selekcija kandidata po zahtevima kompanije<br>
                    -obuke za zaposlene u kompaniji<br>
                     <br>
                     <br>

                  2. usluge za kandidate koji traže posao<br>
                     -organizovanje timske prakse<br>
                     -testiranje znanja<br>
                     -razni kursevi i dodatna obuka<br>
                     -pisanje CV i Motivaciono pismo<br>
                      <br>
                     <br>
 

                  3. usluge za kandidate koji žele da nauče programiranje i nađu posao<br>
                    -testiranje na potencijal za učenje programiranja<br>
                    -razni kursevi programiranja<br>
                    -pisanje CV i Motivaciono pismo<br>
                    -organizovanje prakse posle završene obuke<br>
                      <br>
                     <br>

                   Za sve dodatne informacije možete nas kontaktirati na 063 85 42 651 ili info@itpraksa.com<br>
                   <br><br>
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
name: 'services',
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
     title: 'Usluge'
   }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: "Usluge",
         
       }
  },
}

</script>

<style>

</style>