<template>
  <div class="container-fluid minPageHeight">
     <div class="row">
         <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
            <div class="row mt-4">
                <div class="col">
                    <h1>Kontakt</h1>
                    <p>
           ITpraksa.Com 
           <br><br>Esenca Software doo 
           <br><br>Ratnih vojnih invalida 48
           <br><br>11000 Beograd-Palilula, 
          <br><br> Republika Srbija
          <br><br> info@ITpraksa.com
          <br><br> 063 85 42 651

          </p>
                </div>
            </div>
           <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>        

         </div>
         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
     
         </div>
     </div>
</div>
      
</template>

<script>
import Advertisements from "~/components/advertisements/advertisements";
import adsFilterBigImg from '~/util/adsFilterBigImg';
export default {
layout: 'DashboardLayout',
name: 'kontakt',
components:{
  Advertisements
},
async asyncData({app,params,route}){
 
    let advertisement = await app.$axios.$get(`/api/ads-to-page?route=${route.path}&category=''`);
    return {
    
      advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
      
    }
},
head(){
     return{
            htmlAttrs:{
        lang: 'sr'
        },
         title: "Kontakt",
         
       }
  },
}
</script>

<style>

</style>