<template>
  <div class="container-fluid">
     <div class="row">
         <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
             <h1 class="mt-3">IT vesti</h1>
            <div class="row mt-4 ">
                
                <div class="col-xl-3 col-md-6">
          <stats-card class="">
            
            <template slot="footer">
               <h3 class="card-title">IT vest 1</h3>
                <div class="mb-1 text-muted">27.12.2021.</div>
            <nuxt-link style="color: #8898aa !important;" :to="{name:'it-vesti-title',params:{title:'prva-vest'}}">    
          <p class="card-text"><strong>Predrag Mašić</strong>-lider, programer, predavač, vlasnik Esenca Software i IT kursevi.
            4.7 je prosečna ocena
          </p>
          
        
            </nuxt-link>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            
            <template slot="footer">
              <h3 class="card-title">IT vest</h3>
              <div class="mb-1 text-muted">27.12.2021.</div>
           <nuxt-link style="color: #8898aa !important;" :to="{name:'it-vesti-title',params:{title:'druga-vest'}}">     
          <p class="card-text">
            Zadovoljni polaznici su naša najveća referenca.
            76% polaznika nakon završenih naših kurseva..
          </p>
        
           
           </nuxt-link>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
           
            <template slot="footer">
               <h3 class="card-title">IT vest</h3>
          <div class="mb-1 text-muted">27.12.2021.</div>
         <nuxt-link style="color: #8898aa" :to="{name:'it-vesti-title',params:{title:'treca-vest'}}">
          <p class="card-text">
            Zadovoljni polaznici su naša najveća referenca.
            76% polaznika nakon završenih naših programa.
          </p>
          
            
         </nuxt-link>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            
            <template slot="footer">
              <h3 class="card-title">IT vest</h3>
          <div class="mb-1 text-muted">28.12.2021.</div>
          <nuxt-link style="color: #8898aa !important;" :to="{name:'it-vesti-title',params:{title:'cetvrta-vest'}}">
          <p class="card-text">
            Zadovoljni polaznici su naša najveća referenca.
            76% polaznika nakon završenih naših programa..
          </p>
         
            
          </nuxt-link>
            </template>
          </stats-card>
        </div>
            </div>
 
  
   
         
         </div>
         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 bg-danger">
          Reklame
         </div>
     </div>
</div>
</template>

<script>
export default {
layout: 'DashboardLayout',
name: 'itvesti',
}
</script>

<style>

</style>