<template>
  <div>
     <b-container fluid>
         <b-row>
           <b-col>
              <b-card no-body>
                <b-tabs card>
                   <b-tab title="Postavljanje reklama" active>
                       <b-container fluid>
                         <b-row>
                           <b-col cols="auto">
                             <b-form-group
                               class="text-dark"
                               id="title-1"       
                               label="Kategorija:"
                               label-for="category"   
                              >
                            <b-form-select
                              :options="listOfCategory"
                              value-field="id"
                              v-model="category_advertisement.advertisement_category_id"
                              text-field="description"
                              class="text-dark"
                              name="category"
                              id="category"   
                              @input="filtersByCategory"
                             >
                              <template #first>
                                  <b-form-select-option :value="null">Sve kategorije</b-form-select-option>
                               </template>
                           </b-form-select>
       
                    </b-form-group>
                              
                           </b-col>
                         </b-row>
                         <b-row>
                           <b-col cols="12" xl="5" lg="5" md='12' sm='12' class="m-0 p-0">
                             <b-row>
                                 <b-col class="text-center">
                                   <h5>Trenutno na stranici</h5>
                                </b-col>
                             </b-row>
                             <b-row>
                               <b-col cols="12" xl="4" lg="4" md="4" sm="12" class="p-1 text-center" v-for="advertisement in listOfAdsByCategory" :key="advertisement.id">
                                   <b-card
                                    :title="advertisement.advertisement.title"
                                  
                                     class="mb-2 p-0 shadow-none">
                                    <b-card-img :src="advertisement.advertisement.img_ads" class="img-fluid w-100" alt="Image" top></b-card-img>
                                     <b-card-text v-if="checkCatgeory(advertisement.advertisement_category_id)">
                                          {{advertisement.category.description}}
                                     </b-card-text>
                                     <b-card-text v-else>
                                          Sve stranice
                                     </b-card-text>
                                   <b-button size="sm" class="m-1 " @click="deleteAdsByCategory(advertisement.id)">
                                         <font-awesome-icon :icon="['fa', 'times']" style="width:11px"  />
                                  </b-button>
                                   <b-button size="sm" class="m-1" @click="editSorting(advertisement)">
                                        <font-awesome-icon :icon="['fa', 'pen']" style="width:15px"  />
                                  </b-button>
                                 <b-input type="text" class="text-dark d-inline-block mr-1 p-1 text-center" style="width:50px;height:30px" v-model="advertisement.sorting"></b-input>

                            </b-card>            
                                   </b-col>
                             </b-row>
                           </b-col>
                           <b-col cols="12" xl="1" lg="1" md="12" sm="12" class="m-0 p-0 " >
                               <hr class="d-xl-block d-lg-block d-md-none d-sm-none d-none hr-v">
                               <hr class="d-xl-none d-lg-none d-md-block d-sm-block d-block">
                           </b-col>
                           <b-col cols="12" xl="5" lg="5" md='12' sm='12' class="m-0 p-0">
                               <b-row >
                                 <b-col class="text-center">
                                   <h5>Sve reklame</h5>
                                </b-col>
                               </b-row>
                               <b-row>
                              <b-col cols="12" xl="4" lg="4" md="4" sm="12" class="p-1 text-center" v-for="adverisiment in listOfAds" :key="adverisiment.id">
                                   <b-card
                                    :title="adverisiment.title"
                                    tag="article"
                                    class="mb-2 p-0 shadow-none">
                                    <b-card-img :ref="adverisiment.id" :src="adverisiment.img_ads" class="img-fluid w-100" alt="Image" top></b-card-img>
                                   <b-button size="sm" class="m-1 " @click="addAdverisement(adverisiment.id)">
                                         <font-awesome-icon :icon="['fa', 'plus']" style="width:15px"  />
                                  </b-button>
                                  
                            </b-card>            
                                   </b-col>
                               </b-row>
                           </b-col>
                         </b-row>
                       </b-container>
                   </b-tab>  
              </b-tabs>
            </b-card>
           </b-col>
         </b-row>
     </b-container>
  </div>
</template>

<script>
export default {
name: 'adstopage',
layout: 'CmsLayout',
middleware : ['auth','ads'],
async asyncData({app}){
   let listOfCategory = await app.$axios.$get('/api/ads-category-get-all');
   let listOfAds = await app.$axios.$get('/api/ads-get-all');
   let listOfAdsByCategory = await app.$axios.$get(`/api/category-ads-filters?category=${null}`);
   
   return{
     listOfCategory : listOfCategory.ads_categories,
     listOfAds : listOfAds.advertisements,
     listOfAdsByCategory : listOfAdsByCategory.category_ads
   }
},
mounted(){
   this.$axios.setToken(this.$cookies.get('auth_token'), 'Bearer');
},
data(){
  return {
    category_advertisement:{
      advertisement_category_id : null
    },
    ads_edit:{
             id: null,
            title_ads : '',
            description: '',
            img_ads: '',
        },
  }
},
methods:{
  imgSize(id){
    return new Promise((rej)=>{
     let img = this.$refs[id];
     let res = img[0].naturalWidth > 900 ? true : false;
     rej(res)
    })
   
  },
  async filtersByCategory(){
    let category_ads  = await this.$axios.$get(`/api/category-ads-filters?category=${this.category_advertisement.advertisement_category_id}`);
    console.log(category_ads)
    this.listOfAdsByCategory = category_ads.category_ads;
  },
  async addAdverisement(id){
  
        try {
        let big_img = await this.imgSize(id);
        let category_ads = await this.$axios.$post('/api/category-ads-create',{
        advertisement_category_id : this.category_advertisement.advertisement_category_id,
        advertisement_id : id,
        sorting : 0,
        big_img : big_img
      })
        this.listOfAdsByCategory = category_ads.category_ads;
        await this.$notify({
          type: "success",
          message: `Reklama je uspoešno dodata!`,
        });
        } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
       }
      
  },
    checkCatgeory(category){   
       return category == null ? false : true;
    },
  async editSorting(ads){
         try {
        let category_ads = await this.$axios.$post('/api/category-ads-sorting',ads)
         this.listOfAdsByCategory = category_ads.category_ads;
     
      await this.$notify({
          type: "success",
          message: `Reklama je uspoešno editovana!`,
        });
        } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
       }
  
  },
  async deleteAdsByCategory(id){
     try {
        let category_ads = await this.$axios.$post('/api/category-ads-delete',{
           id:id,
           advertisement_category_id: this.category_advertisement.advertisement_category_id 
         })
         console.log(category_ads)
         this.listOfAdsByCategory = category_ads.category_ads;
      await this.$notify({
          type: "success",
          message: `Reklama je uspoešno obrisana!`,
        });
        } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
       }
  },
  async editAds(ads){

  }
}
}
</script>

<style>

</style>