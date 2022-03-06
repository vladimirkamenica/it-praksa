<template>
  <b-container fluid>
      <b-row>
          <b-col>
             <b-card no-body>
                 <b-tabs card>
                      <b-tab title="Dodavanje reklama" active>
                         <b-container>
                             <b-row>
                                 <b-col>
                                      <b-form-group
                                          id="title"
                                          label="Naslov"
                                          label-for="title_input"
                                          
                                        >
                                     <b-form-input
                                         id="title_input"
                                         v-model="ads.title_ads"
                                         type="text"
                                         placeholder="Unesi naslov"
                                       
                                     ></b-form-input>
                                      </b-form-group>
                                       <b-form-group
                                          id="link"
                                          label="link"
                                          label-for="link_input">
                                     <b-form-textarea
                                         id="link_input"
                                         v-model="ads.link_ads"
                                         type="text"
                                         placeholder="Unesi link"                                     
                                     ></b-form-textarea>
                                      </b-form-group>
                                      <b-form-group  label="Naslovna slika:"   class="text-dark" >    
                                      <b-form-file  
                                       placeholder="Choose a file..." 
                                       id="file-default" 
                                       ref="cover_img"
                                      :state="Boolean(cover_img.image)"
                                      v-model="cover_img.image"
                                      @input="coverImage(true)"></b-form-file>
                                     </b-form-group>
                                      <b-form-group  label="Pregled slike:"   class="text-dark" >
                                      <img :src="ads.img_ads">
                                  </b-form-group>
                                      <b-form-group
                                          id="description"
                                          label="Opis"
                                          label-for="description"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="ads.description"
                                               useCustomImageHandler
                                               @image-added="handleImageAdded"
                                              >
                                        </vue-editor>
                                     </client-only>
                                    </b-form-group>
                                    <button class="btn btn-primary" @click="addAds">Dodaj</button>
                                 </b-col>
                             </b-row>
                         </b-container>
                      </b-tab>
                      <b-tab title="Pregled reklama">
                           <b-container>
                               <b-row>
                                   <b-col>
                                       <b-table responsive stacked="xl" striped hover   :fields="fields" :items="listOfAds">
                                            <template #cell(img_ads)="row">
                                               <img  :src="row.item.img_ads" width="125" alt="">
                                           </template>
                                            <template #cell(actions)="row">
                                          <div>
                                               <button class="btn btn-success btn-md" @click="showModalEdit(row.item)"> <font-awesome-icon :icon="['fa', 'pen']" style="width:15px"   /></button>
                                               <button class="btn btn-danger btn-md" @click="deleteAds(row.item.id)"> <font-awesome-icon :icon="['fa', 'times']" style="width:11px"   /></button>
                                          </div>    
                                       </template>
                                       </b-table>
                                   </b-col>
                               </b-row>
                               <b-row>
                                   <b-col>
                                        <b-modal data-backdrop="false" ref="edit-modal" size="xl" hide-footer>
                                            <b-container>
                             <b-row>
                                 <b-col>
                                      <b-form-group
                                          id="title_edit"
                                          label="Naslov"
                                          label-for="title_input_edit"
                                          
                                        >
                                     <b-form-input
                                         id="title_input_edit"
                                         v-model="ads_edit.title_ads"
                                         type="text"
                                         placeholder="Unesi naslov"
                                       
                                     ></b-form-input>
                                      </b-form-group>
                                       <b-form-group
                                          id="link"
                                          label="link"
                                          label-for="link_input">
                                     <b-form-textarea
                                         id="link_input"
                                         v-model="ads_edit.link_ads"
                                         type="text"
                                         placeholder="Unesi link"                                     
                                     ></b-form-textarea>
                                      </b-form-group>
                                      <b-form-group  label="Naslovna slika:"   class="text-dark" >    
                                      <b-form-file  
                                       placeholder="Choose a file..." 
                                       id="file-default_edit" 
                                       ref="cover_img_edit"
                                      :state="Boolean(cover_img_edit.image)"
                                      v-model="cover_img_edit.image"
                                      @input="coverImage(false)"></b-form-file>
                                     </b-form-group>
                                      <b-form-group  label="Pregled slike:"   class="text-dark" >
                                      <img :src="ads_edit.img_ads">
                                  </b-form-group>
                                      <b-form-group
                                          id="description_edit"
                                          label="Opis"
                                          label-for="description_edit"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="ads_edit.description"
                                               useCustomImageHandler
                                               @image-added="handleImageAdded"
                                              >
                                        </vue-editor>
                                     </client-only>
                                    </b-form-group>
                                    <button class="btn btn-primary" @click="editAds">Snimi</button>
                                 </b-col>
                             </b-row>
                         </b-container>
                                            
                                        </b-modal>
                                   </b-col>
                               </b-row>
                           </b-container>
                      </b-tab>
                      <b-tab title="Dodavanje kategorija">
                           <b-container>
                               <b-row>
                                   <b-col>
                                        <b-form-group
                                          id="description_category"
                                          label="Opis"
                                          label-for="description_category_input">
                                     <b-form-input
                                         id="description_category_input"
                                         v-model="ads_cat.description"
                                         type="text"
                                         placeholder="Unesi opis"                                     
                                     ></b-form-input>
                                      </b-form-group>
                                     
                                      <b-form-group
                                          id="route_category"
                                          label="Ruta"
                                          label-for="route_category_input">
                                     <b-form-input
                                         id="route_category_input"
                                         v-model="ads_cat.route_path"
                                         type="text"
                                         placeholder="Unesi rutu"                                    
                                     ></b-form-input>
                                      </b-form-group>
                                    <button class="btn btn-primary" @click="addCatgory">Dodaj</button>

                                   </b-col>
                               </b-row>
                               <b-row class="mt-4">
                                   <b-col>
                                       <h3>Prikaz kategorija</h3>
                                   </b-col>
                               </b-row>
                               <b-row>
                                   <b-col>
                                       <b-table responsive stacked="xl" striped hover :fields="fieldsCat" :items="listOfAdsCategory">
                                            <template #cell(description)="row">
                                               <textarea name="description" class="form-control widthTextarea" id="description"  v-model="row.item.description"></textarea>
                                           </template>
                                            <template #cell(route_path)="row">
                                               <textarea name="route_path" class="form-control widthTextarea" id="route_path"  v-model="row.item.route_path"></textarea>
                                           </template>
                                            <template #cell(display_all)="row">
                                             <div>
                                               <input :id="'videos'+row.item.id" type="checkbox" class="switch" :checked="row.item.display_all" v-model="row.item.display_all" @change="editCategory(row.item)">
                                               <label :for="'videos'+row.item.id"></label>
                                            </div>  
                                         </template>
                                           <template #cell(actions)="row">
                                             <div>
                                               <button class="btn btn-success btn-md" @click="editCategory(row.item)"> <font-awesome-icon :icon="['fa', 'pen']" style="width:15px"  /></button>
                                               <button class="btn btn-danger btn-md" @click="deleteCategory(row.item.id)"> <font-awesome-icon :icon="['fa', 'times']" style="width:11px"   /></button>
                                            </div>    
                                         </template>
                                       </b-table>
                                   </b-col>
                               </b-row>
                           </b-container>
                      </b-tab>
                  </b-tabs>
           </b-card>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import imageToFolderApi from '~/util/imageToFolderApi';
export default {
name: 'myAds',
layout: 'CmsLayout',
middleware : ['auth','ads'],
async asyncData({app}){
    let listOfAds = await app.$axios.$get('/api/ads-get-all');
    let listOfAdsCategory = await app.$axios.$get('/api/ads-category-get-all');
    
    return{
        listOfAds: listOfAds.advertisements,
        listOfAdsCategory: listOfAdsCategory.ads_categories
    }
},
data(){
    return{
        ads:{
            id: 0,
            title_ads : '',
            description: '',
            link_ads: '',
            img_ads: '',
        },
         ads_edit:{
             id: null,
            title_ads : '',
            description: '',
            link_ads: '',
            img_ads: '',
        },
        ads_cat:{
            id: 0,
            description: '',
            route_path : ''
        },
         cover_img: {
         image : null
       },
       cover_img_edit: {
         image : null
       },
       fields:[
           {
               key: 'title_ads',
               label: 'Naslov'
           },
             {
               key: 'link_ads',
               label: 'Link'
           },
           {
               key: 'img_ads',
               label: 'Slika'
           },
           'actions'
       ],
        fieldsCat:[
           {
               key: 'description',
               label: 'Opis'
           },
         
           {
               key: 'route_path',
               label: 'Ruta'
           },
           {
               key: 'display_all',
               label: 'Sve strane'
           },
           'actions'
       ]
    }
},
mounted(){
   this.$axios.setToken(this.$cookies.get('auth_token'), 'Bearer');
},
methods:{
     async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        await imageToFolderApi.handleImageAdded(file, Editor, cursorLocation, resetUploader,this.$axios)
    },
     async coverImage(editOrAdd){
    if(this.cover_img.image || this.cover_img_edit.image){
      let img = editOrAdd == true ? this.cover_img.image : this.cover_img_edit.image
      let apiImg = await imageToFolderApi.imageToFolderApi(this.$axios,img);
      editOrAdd == true ? this.ads.img_ads = `${this.$axios.defaults.baseURL}/img/${apiImg}` : this.ads_edit.img_ads = `${this.$axios.defaults.baseURL}/img/${apiImg}`;
         
   }  
  },
  async addAds(){
      try {
          let empty = () =>{
              this.ads.title_ads = '';
              this.ads.description = '';
              this.ads.img_ads = '';
              this.ads.link_ads = '';
              
          }
          let ads = await this.$axios.$post('/api/ads-create',this.ads);
          this.listOfAds = ads.advertisements;
          empty();
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
    async editAds(){
      try {
          let ads = await this.$axios.$post('/api/ads-update',this.ads_edit);
          this.listOfAds = ads.advertisements;
         console.log(ads)

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
  showModalEdit(items){
    this.ads_edit = items;
    this.$refs['edit-modal'].show()
  },
  async deleteAds(id){
    try {
          let ads = await this.$axios.$post('/api/ads-delete',{id:id});
          this.listOfAds = ads.advertisements;
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
  async addCatgory(){
       try {
          let empty = () =>{
              this.ads_cat.route_path = '';
              this.ads_cat.description = '';          
          }
          let category = await this.$axios.$post('/api/ads-category-create',this.ads_cat);
          this.listOfAdsCategory = category.ads_categories;
          empty();
       await this.$notify({
          type: "success",
          message: `Kategorija je uspoešno dodata!`,
        });
      } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
      }
  },
  async editCategory(items){
    console.log(items)
 try {
        let category = await this.$axios.$post('/api/ads-category-update',items);
          this.listOfAdsCategory = category.ads_categories;
       await this.$notify({
          type: "success",
          message: `Kategorija je uspoešno editovana!`,
        });
      } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
      }
  },
 async deleteCategory(id){
  try {
        let category = await this.$axios.$post('/api/ads-category-delete',{id:id});
          this.listOfAdsCategory = category.ads_categories;
        
       await this.$notify({
          type: "success",
          message: `Kategorija je uspoešno obrisana!`,
        });
      } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
      }
  },
  
},

}
</script>

<style>

</style>