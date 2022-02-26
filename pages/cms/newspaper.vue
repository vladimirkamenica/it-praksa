<template>
  <b-container fluid>
      <b-row>
          <b-col>
              <b-card no-body>
                <b-tabs card>
                  <b-tab title="Dodavanje vesti" active>
                      <b-container>
                          <b-row>
                              <b-col>
                                   <b-form-group
                                          id="title"
                                          label="Naslov"
                                          label-for="title_input"
                                          description="Naslov vesti mora biti jedninstven">
                                     <b-form-textarea
                                         id="title_input"
                                         v-model="newspaper.title_news"
                                         type="text"
                                         placeholder="Unesi naslov">
                                         </b-form-textarea>
                                      </b-form-group>
                                      <b-form-group
                                          id="description_meta"
                                          label="Opis (description_meta)"
                                          label-for="description_meta_input">
                                     <b-form-textarea
                                         id="description_meta_input"
                                         v-model="newspaper.description_meta"
                                         type="text"
                                         placeholder="Unesi opis meta">
                                         </b-form-textarea>
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
                                      <img :src="newspaper.img_news">
                                  </b-form-group>
                                     <b-form-group
                                          id="date_news"
                                          label="Datum"
                                          label-for="date_news_picker"
                                        >
                                     <client-only>
                                         <div class="d-flex align-middle">
                                             <font-awesome-icon :icon="['fa', 'clock']" style="width:20px"  />
                                             <date-picker id="date_news_picker" format="DD-MM-YYYY H:i" class="ml-1" style="margin-top: 2px"  v-model="newspaper.date_news">                                          
                                          </date-picker>
                                         </div>
                                          
                                         </client-only>   
                               
                                    </b-form-group>
                                          <b-form-group
                                          id="description"
                                          label="Opis"
                                          label-for="description"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="newspaper.description"
                                               useCustomImageHandler
                                               @image-added="handleImageAdded"
                                              >
                                        </vue-editor>
                                     </client-only>
                                    </b-form-group>
                                    <button class="btn btn-primary" @click="addNews">Dodaj</button>
                                    
                              </b-col>
                          </b-row>
                      </b-container>
                </b-tab>
                <b-tab title="Pregled vesti">
                    <b-container fluid>
                    <b-row class="mb-3">
                        <b-col cols="auto">
                            <b-select :options="optionsType"
                                             value-field="value"
                                              v-model="filter.type"
                                             text-field="text"
                                             @change="filtersOfNews(false,false)">
                                             </b-select>
                        </b-col>
    
                    </b-row>
                        <b-row style="height: 700px">
                            <b-col>
                                <b-table responsive stacked="xl" striped hover :fields="fields" :items="listOfNewspapers">
                                     <template #cell(title_news)="row">
                                              <textarea name="title" id="title" class="form-control widthTextarea" style="min-height:100px" v-model="row.item.title_news"></textarea>
                                     </template>
                                      <template #cell(img_news)="row">
                                            <img :src="row.item.img_news" width="150" alt="">
                                     </template>
                                      <template #cell(date_news)="row">
                                            <client-only>
                                              <date-picker :id="'picker'+row.item.id" format="YYYY-MM-DD H:i:s" class="ml-1" style="margin-top: 2px"   v-model="row.item.date_news"></date-picker>                                         
                                           </client-only>
                                       </template>
                                        <template #cell(display)="row">
                                          <div>
                                            <input :id="'videos'+row.item.id" type="checkbox" class="switch" :checked="row.item.display" v-model="row.item.display" @change="editNews(row.item)">
                                            <label :for="'videos'+row.item.id"></label>
                                          </div>  
                                       </template>
                                       <template #cell(top_news)="row">
                                          <div>
                                            <input :id="'top'+row.item.id" type="checkbox" class="switch" :checked="row.item.top_news" v-model="row.item.top_news" @change="editNews(row.item)" >
                                            <label :for="'top'+row.item.id"></label>
                                          </div>  
                                       </template>
                                        <template #cell(actions)="row">
                                          <div>
                                               <button class="btn btn-success btn-md" @click="showModalEdit(row.item)"> <font-awesome-icon :icon="['fa', 'pen']" style="width:15px" /></button>
                                               <button v-if="roles.all_permits" class="btn btn-danger btn-md" @click="deleteNews(row.item.id)"> <font-awesome-icon :icon="['fa', 'times']" style="width:11px"  /></button>
                                          </div>    
                                       </template>
                                </b-table>
                            </b-col>
                        </b-row>
                         <b-row>
                               <b-col class="mt-3">                                  
                                       <b-pagination :per-page="perPage" v-model="page" pills :total-rows="rows" @input="filtersOfNews(true,false)" align="right"></b-pagination>                                     
                               </b-col>
                           </b-row>
                    </b-container>
                </b-tab>
    </b-tabs>
  </b-card>
              
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <b-modal v-model="modalShow" size="xl" hide-footer>
                  <b-container fluid>
                          <b-row>
                              <b-col>
                                   <b-form-group
                                          id="title_edit"
                                          label="Naslov"
                                          label-for="title_input_edit"
                                          description="Naslov vesti mora biti jedninstven">
                                     <b-form-textarea
                                         id="title_input_edit"
                                         v-model="edit_newspaper.title_news"
                                         type="text"
                                         placeholder="Unesi naslov">
                                         </b-form-textarea>
                                      </b-form-group>
                                      <b-form-group
                                          id="description_meta_edit"
                                          label="Opis (description_meta)"
                                          label-for="description_meta_input_edit">
                                     <b-form-textarea
                                         id="description_meta_input_edit"
                                         v-model="edit_newspaper.description_meta"
                                         type="text"
                                         placeholder="Unesi opis meta">
                                         </b-form-textarea>
                                    </b-form-group>
                                        <b-form-group  label="Naslovna slika:"   class="text-dark" >    
                                      <b-form-file  
                                       placeholder="Choose a file..." 
                                       id="file-default-edit" 
                                       ref="cover_img_edit"
                                      :state="Boolean(cover_img_edit.image)"
                                      v-model="cover_img_edit.image"
                                      @input="coverImage(false)"></b-form-file>
                                     </b-form-group>
                                  <b-form-group  label="Pregled slike:"   class="text-dark" >
                                      <img :src="edit_newspaper.img_news">
                                  </b-form-group>
                                     <b-form-group
                                          id="date_news_edit"
                                          label="Datum"
                                          label-for="date_news_picker_edit"
                                        >
                                     <client-only>
                                         <div class="d-flex align-middle">
                                             <font-awesome-icon :icon="['fa', 'clock']" style="width:20px"  />
                                             <date-picker  format="YYYY-MM-DD H:i" class="ml-1" style="margin-top: 2px" :pickerValue="edit_newspaper.date_news"   v-model="edit_newspaper.date_news">                                          
                                          </date-picker>
                                         </div>
                                          
                                         </client-only>   
                               
                                    </b-form-group>
                                          <b-form-group
                                          id="description_edit"
                                          label="Opis"
                                          label-for="description_edit"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="edit_newspaper.description"
                                               useCustomImageHandler
                                               @image-added="handleImageAdded"
                                              >
                                        </vue-editor>
                                     </client-only>
                                    </b-form-group>
                                    <button class="btn btn-primary" @click="editNewsModal">Snimi</button>
                              </b-col>
                          </b-row>
                      </b-container>
              
              </b-modal>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import imageToFolderApi from '~/util/imageToFolderApi';

export default {
name: 'newspaper',
layout: 'CmsLayout',
middleware: ['auth','news'],
async asyncData({app}){
 let listOfNewspapers = await app.$axios.$get(`/api/newspaper-filters?type=''&page=1`);
 return{
   listOfNewspapers : listOfNewspapers.newspapers.data,
   rows : listOfNewspapers.newspapers.last_page
 }
},
computed:{
  roles(){
    return this.$store.state.auth.role;
  }
},
data(){
    return { 
      perPage : 1,
      page: 1,
        newspaper:{
            id : 0,
            title_news : '',
            description_meta : '',
            date_news : '',
            description: '',
            img_news: '',
            display : false,
            top_news : false,
            user_id : this.$store.state.auth.user.id
        },
         edit_newspaper:{
            id : '',
            title_news : '',
            description_meta : '',
            date_news : '',
            description: '',
            img_news: '',
            display : false,
            top_news : false,
            user_id : null

        },
          cover_img: {
         image : null
       },
       cover_img_edit: {
         image : null
       },
       fields:[
           {
               key:'title_news',
               label: 'Naslov'
           },
           {
               key:'img_news',
               label: 'slika'
           },
           {
               key:'date_news',
               label: 'Datum'
           },
           {
               key:'display',
               label: 'Prikaz'
           },
           {
               key:'top_news',
               label: 'Top vest'
           },
           'actions'
       ],
       modalShow : false,
         filter:{
            type: 0
        },
         optionsType: [
          { value: 0, text: 'Svi tipovi' },
          { value: 'top_news', text: 'Top vest' },
          { value: 'display', text: 'Odebrono' },
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
    async addNews(){
        try {
          let empty = () =>{
            this.newspaper.title_news = '';       
            this.newspaper.description_meta  = '';
            this.newspaper.date_news  = '';
            this.newspaper.description = '';
            this.newspaper. img_news = '';
          }
           await this.$axios.$post('/api/newspaper-create',this.newspaper); 
           this.filtersOfNews(false,true);   
           
           empty();   
         await this.$notify({
          type: "success",
          message: `Vest je uspoešno dodata!`,
        });
  } catch ({ response }) {
     await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
  }  
     
    },
     async editNews(edit_newspaper){
           try {
            let news = await this.$axios.$post('/api/newspaper-update',edit_newspaper);
            this.filtersOfNews(true,false);      
          await this.$notify({
          type: "success",
          message: `Vest je uspoešno editovana!`,
        });
  } catch ({ response }) {
     await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
  }  
     
    },
    async editNewsModal(){
       this.editNews(this.edit_newspaper); 
    },
    async deleteNews(id){
        try { 
            await this.$axios.$post('/api/newspaper-delete',{id:id});
            this.filtersOfNews(true,false);      
         await this.$notify({
          type: "danger",
          message: `Vest je uspoešno obrisana!`,
        });
  } catch ({ response }) {
     await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
  }  
    },
    async showModalEdit(items){
       this.edit_newspaper = items;
       this.modalShow = true;
    },
     async coverImage(editOrAdd){
    if(this.cover_img.image || this.cover_img_edit.image){
      let img = editOrAdd == true ? this.cover_img.image : this.cover_img_edit.image
      let apiImg = await imageToFolderApi.imageToFolderApi(this.$axios,img);
      editOrAdd == true ? this.newspaper.img_news = `${this.$axios.defaults.baseURL}/img/${apiImg}` : this.edit_newspaper.img_news = `${this.$axios.defaults.baseURL}/img/${apiImg}`;
     
   }  
  },
  async filtersOfNews(paginateOrfilter,addnews){
      let news = await this.$axios.$get(`/api/newspaper-filters?type=${this.filter.type}&page=${paginateOrfilter ? this.page : 1}`);
      this.listOfNewspapers = news.newspapers.data;
      if(addnews) this.rows = news.newspapers.last_page;
  }
}
}
</script>

<style>

</style>