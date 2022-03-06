<template>
<b-container fluid>
    <b-row>
        <b-col>
            <b-card no-body>
              <b-tabs card>
                 <b-tab title="Dodavanje videa" active>
                      <b-container fluid>
                              <b-row class="justify-content-center">
                                  <b-col xl="8">
                                       <b-form-group
                                          id="title"
                                          label="Naslov"
                                          label-for="title_input"
                                          description="Naslov videa mora biti jedninstven"
                                        >
                                     <b-form-textarea
                                         id="title_input"
                                         v-model="video.title_video"
                                         type="text"
                                         placeholder="Unesi naslov"
                                       
                                     ></b-form-textarea>
                                      </b-form-group>
                                      <b-form-group
                                          id="description_meta"
                                          label="Opis (description_meta)"
                                          label-for="description_meta_input"
                                        
                                        >
                                     <b-form-textarea
                                         id="description_meta_input"
                                         v-model="video.description_meta"
                                         type="text"
                                         placeholder="Unesi opis meta"
                                       
                                     ></b-form-textarea>
                                     
                                    </b-form-group>
                                   
                                     <b-form-group
                                          id="link"
                                          label="Link"
                                          label-for="link_input"
                                        >
                                     <b-form-input
                                         id="link_input"
                                         v-model="video.link"
                                         type="text"
                                         placeholder="Unesi link"
                                       
                                     ></b-form-input>
                                    </b-form-group>
                                     <b-form-group
                                          id="link"
                                          label="Datum"
                                          label-for="link_input"
                                        >
                                     <client-only>
                                         <div class="d-flex align-middle">
                                             <font-awesome-icon :icon="['fas', 'clock']" style="width: 20px;" />
                                             <date-picker format="DD-MM-YYYY H:i" class="ml-1" style="margin-top: 2px"  v-model="video.date_video">                                          
                                          </date-picker>
                                         </div>
                                          
                                         </client-only>   
                               
                                    </b-form-group>
                                      <b-form-group
                                          id="catrgoty"
                                          label="Kategorija"
                                          label-for="catrgoty_select"
                                        >
                                    <b-select :options="listOfCategories"
                                              value-field="id"
                                              text-field="video_category"
                                              v-model="video.category_id"></b-select>
                                    </b-form-group>
                                     <b-form-group
                                          id="description"
                                          label="Opis"
                                          label-for="description"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="video.description"
                                               useCustomImageHandler
                                               @image-added="handleImageAdded"
                                              >
                                        </vue-editor>
                                     </client-only>
                                    </b-form-group>
                                    <button class="btn btn-primary" @click="addVideo">Dodaj</button>
                                  </b-col>
                              </b-row>
                      </b-container> 
                 </b-tab>
                   <b-tab title="Pregled videa">
                      <b-container fluid>
                          <b-row>
                              <b-col cols="auto p-0">
                                  <b-select :options="listOfCategories"
                                             value-field="id"
                                             v-model="filter.category"
                                             @change="filtersOfVideos(false,false)"
                                             text-field="video_category">
                                              <template #first>
                                                  <b-form-select-option :value="0">Sve kategorije</b-form-select-option>
                                              </template>
                                    </b-select>
                                 
                              </b-col>
                               <b-col cols="auto">
                                  <b-select :options="optionsType"
                                             value-field="value"
                                              v-model="filter.type"
                                             text-field="text"
                                             @change="filtersOfVideos(false,false)">
                                             </b-select>
                            
                              </b-col>
                          </b-row>
                           <b-row>
                               <b-col class="mt-4 p-0">
                                   <b-table responsive stacked="xl" striped hover :items="listOfVideos" :fields="fieldsVideo" style="height:650px">
                                       <template #cell(display)="row">
                                        <div>             
                                                <label class="el-switch">
                                                   <input type="checkbox" name="switch"  :checked="row.item.display" v-model="row.item.display"   @change="editVideo(row.item)" >
                                                   <span class="el-switch-style"></span>
                                                </label>                                               
                                        </div>  
                                       </template>
                                       <template #cell(link)="row">
                                              <textarea name="link" id="link" class="form-control widthTextarea" v-model="row.item.link"></textarea>
                                       </template>
                                       <template #cell(title_video)="row">
                                              <textarea name="title_video" id="title_video" class="form-control widthTextarea" v-model="row.item.title_video"></textarea>
                                       </template>
                                        <template #cell(date_video)="row">
                                            <client-only>
                                              <date-picker :id="'picker'+row.item.id" format="YYYY-MM-DD H:i:s" class="ml-1" style="margin-top: 2px"   v-model="row.item.date_video"></date-picker>                                         
                                           </client-only>
                                       </template>
                                         <template #cell(category_id)="row">
                                        <b-select :options="listOfCategories"
                                              value-field="id"
                                              text-field="video_category"
                                              @change="editVideo(row.item)"
                                              v-model="row.item.category_id"></b-select>
                                       </template>
                                       <template #cell(top_video)="row">
                                           <label class="el-switch">
                                                   <input type="checkbox" name="switch"  :checked="row.item.top_video" v-model="row.item.top_video"   @change="editVideo(row.item)" >
                                                   <span class="el-switch-style"></span>
                                                </label> 
                                       </template>
                                       <template #cell(actions)="row">
                                          <div>
                                               <button class="btn btn-success btn-md" @click="showModalEdit(row.item)"> <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'pen' }" style="width:15px" /></button>
                                               <button v-if="roles.all_permits"  class="btn btn-danger btn-md" @click="deleteVideo(row.item.id)"> <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'times' }" style="width:11px" /></button>
                                          </div>    
                                       </template>
                                   </b-table>
                               </b-col> 
                           </b-row>
                           <b-row>
                               <b-col class="mt-3">                                  
                                       <b-pagination :per-page="perPage" v-model="page" pills :total-rows="rows" @input="filtersOfVideos(true,false)" align="right"></b-pagination>                                     
                               </b-col>
                           </b-row>
                           <b-row>
                               <b-col>
                                    <b-modal ref="edit-modal" size="xl" hide-footer>
                                          <b-container fluid>
                              <b-row>
                                  <b-col>
                                       <b-form-group
                                          id="title"
                                          label="Naslov"
                                          label-for="title_input"
                                          description="Naslov videa mora biti jedninstven"
                                        >
                                     <b-form-textarea
                                         id="title_input"
                                         v-model="video_edit.title_video"
                                         type="text"
                                         placeholder="Unesi naslov"
                                       
                                     ></b-form-textarea>
                                     
                                    </b-form-group>
                                     <b-form-group
                                          id="description_meta"
                                          label="Opis (description_meta)"
                                          label-for="description_meta_input"
                                        
                                        >
                                     <b-form-textarea
                                         id="description_meta_input"
                                         v-model="video_edit.description_meta"
                                         type="text"
                                         placeholder="Unesi opis meta"
                                       
                                     ></b-form-textarea>
                                     
                                    </b-form-group>
                                     <b-form-group
                                          id="link"
                                          label="Link"
                                          label-for="link_input"
                                        >
                                     <b-form-input
                                         id="link_input"
                                         v-model="video_edit.link"
                                         type="text"
                                         placeholder="Unesi link"
                                       
                                     ></b-form-input>
                                    </b-form-group>
                                     <b-form-group
                                          id="link"
                                          label="Datum"
                                          label-for="link_input"
                                        >
                                     <client-only>
                                         <div class="d-flex align-middle">
                                             <font-awesome-icon :icon="['fa', 'clock']" style="width:20px"  />
                                             <date-picker format="YYYY-MM-DD H:i" class="ml-1" style="margin-top: 2px" :pickerValue="video_edit.date_video" v-model="video_edit.date_video">                                          
                                          </date-picker>
                                         </div>
                                          
                                         </client-only>   
                               
                                    </b-form-group>
                                      <b-form-group
                                          id="catrgoty"
                                          label="Kategorija"
                                          label-for="catrgoty_select"
                                        >
                                    <b-select :options="listOfCategories"
                                              value-field="id"
                                              text-field="video_category"
                                              v-model="video_edit.category_id"></b-select>
                                    </b-form-group>
                                     <b-form-group
                                          id="description"
                                          label="Opis"
                                          label-for="description"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="video_edit.description"
                                               useCustomImageHandler
                                               @image-added="handleImageAdded"
                                              >
                                        </vue-editor>
                                     </client-only>
                                    </b-form-group>
                                    
                                  </b-col>
                              </b-row>
                      </b-container> 

                                            <b-button class="btn btn-success mt-2" @click="editVideoModal">Snimi</b-button>
                                    </b-modal>
                               </b-col>
                           </b-row>
                      </b-container> 
                 </b-tab>
                  <b-tab title="Dodavanje kategorija">
                      <b-container fluid>
                           <b-row class="justify-content-center">
                               <b-col xl="8">
                                    <b-form-group
                                          id="category"
                                          label="Kategorija"
                                          label-for="category_input"
                                          description="Naziv kategorije mora biti jedninstven"
                                        >
                                     <b-form-input
                                         id="category_input"
                                         v-model="category.video_category"
                                         type="text"
                                         placeholder="Unesi kategoriju"
                                       
                                     ></b-form-input>
                                     
                                    </b-form-group>
                                     <b-form-group
                                          id="icon"
                                          label="Ikonica"
                                          label-for="icon_input"
                                          
                                        >
                                     <b-form-input
                                         id="icon_input"
                                         v-model="category.icon"
                                         type="text"
                                         placeholder="Unesi awesome kod"
                                       
                                     ></b-form-input>
                                     
                                    </b-form-group>
                                    <b-form-group
                                          id="icon"
                                          label="Opis(meta)"
                                          label-for="icon_input"
                                          
                                        >
                                     <b-form-textarea
                                         id="icon_input"
                                         v-model="category.description_meta_category"
                                         type="text"
                                         placeholder="Unesi opis"
                                       
                                     ></b-form-textarea>
                                     
                                    </b-form-group>
                                    <button class="btn btn-primary" @click="addCategory">Dodaj</button>
                               </b-col>
                           </b-row>
                      </b-container> 
                 </b-tab>
                  <b-tab title="Pregled kategorija">
                      <b-container fluid>
                                <b-row class="justify-content-center">
                                <b-col xl="8">
                                   <b-table striped hover stacked="xl" :fields="fieldsCategories" :items="listOfCategories">
                                        <template #cell(video_category)="row">
                                          <textarea name="video_category" id="video_category"  class="form-control" v-model="row.item.video_category"></textarea>
                                        </template>
                                        <template #cell(icon)="row">
                                          <textarea name="icon_category" id="icon_category"  class="form-control" v-model="row.item.icon"></textarea>
                                       </template>
                                        <template #cell(description_meta_category)="row">
                                          <textarea name="description_meta_category" id="description_meta_category"  class="form-control" v-model="row.item.description_meta_category"></textarea>
                                       </template>
                                       <template #cell(actions)="row">
                                          <div>
                                               <button class="btn btn-success" @click="editCategory(row.item)"> <font-awesome-icon :icon="['fas', 'pen']" style="width:15px"   /></button>
                                               <button v-if="roles.all_permits" class="btn btn-danger" @click="deleteCategory(row.item.id)"> <font-awesome-icon :icon="['fas', 'times']" style="width:11px"  /></button>
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
import VideoCreateOrUpdate from '~/components/VideosCreateOrUpdate/videosCreateOrUpdate';


export default {
name: 'VideoAdd',
layout: 'CmsLayout',
middleware: ['auth','videos'],
components:{
    VideoCreateOrUpdate
},
computed:{
  roles(){
    return this.$store.state.auth.role;
  }
},
async asyncData({app}){
    let listOfCategories = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/video-category-get-all`);
    let listOfVideos = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/video-get-all?page=1`);
  
    return {
       listOfCategories : listOfCategories.video_categories,
       listOfVideos : listOfVideos.videos.data,
       rows: listOfVideos.videos.last_page,
    }
},

data(){
    return {
        editClick : true,
        perPage: 1,
        page : 1,
        video: {
            id: 0,
            title_video : '',
            description_meta : '',
            link : '',
            description: '',
            date_video: '',
            category_id : null,
            display : false,
            top_video : false,
            user_id : null,
          
        },
         video_edit : {
            id: null,
            title_video : '',
            link : '',
            description_meta : '',
            description: '',
            date_video: '',
            category_id : null,
            display : false,
            top_video : false,
            user_id : this.$store.state.auth.user.id,
          
        },
        category:{
            id: 0,
            video_category : '',
            description_meta_category : '',
            icon: ''
        },
        fieldsCategories:[
            {
                key: 'video_category',
                label:'Kategorija'
            },{
                key: 'icon',
                label:'Ikonica'
            },
            ,{
                key: 'description_meta_category',
                label:'Opis(meta)'
            },
            'actions'
        ],
        fieldsVideo:[
            {
                key: 'title_video',
                label:'Naslov'
            },{
                key: 'link',
                label:'Link'
            },{
                key: 'date_video',
                label:'Datum'
            },{
                key: 'category_id',
                label:'Kategorija'
            },
            {
                key: 'display',
                label:'Odobreno'
            },{
                key: 'top_video',
                label:'Top video'
            },
            'actions'
        ],
        filter:{
            category : 0,
            type: 0
        },
         optionsType: [
          { value: 0, text: 'Svi tipovi' },
          { value: 'top_video', text: 'Top video' },
          { value: 'display', text: 'Odebrono' },
        ]
    }
},
mounted(){
   this.$axios.setToken(this.$cookies.get('auth_token'), 'Bearer');
  
},
methods:{
    checkBool(item){
     
       return parseInt(item) == 1 ? true : false;
    },
     async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        await imageToFolderApi.handleImageAdded(file, Editor, cursorLocation, resetUploader,this.$axios)
    },
    async addCategory(){
        try {
            let categories = await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/video-category-create`,this.category)
            this.listOfCategories = categories.video_categories;
            this.category.video_category = '';
            this.category.icon = '';
            this.category.description_meta_category = '';
        await this.$notify({
          type: "success",
          message: `Kategorija je uspoešno dodata!`,
        });
  } catch ({ response }) {
    await this.$notify({
               type: "danger",
               message: `Greška u podacima`,
            });
  }  
        
    },
   async editCategory(category_edit){
        try {
            let categories = await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/video-category-update`,category_edit)
            this.listOfCategories = categories.video_categories;
            console.log(categories)
            console.log(category_edit)
        await this.$notify({
          type: "success",
          message: `Kategorija je uspoešno editovana!`,
        });
  } catch ({ response }) {
   await this.$notify({
               type: "danger",
               message: `Greška u podacima`,
            });
  }  
        
    },
      async deleteCategory(category_id){
        try {
            let categories = await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/video-category-delete`,{id:category_id})
            this.listOfCategories = categories.video_categories;
        await this.$notify({
          type: "success",
          message: `Kategorija je uspoešno obrisana!`,
        });
  } catch ({ response }) {
   await this.$notify({
               type: "danger",
               message: `Greška u podacima`,
            });
  }  
        
    },
    async addVideo(){
      
        try {
            let empty = () => {
               this.video.title_video = '';
               this.video.description_meta = '';
               this.video.link  = '';
               this.video.description = '';
               this.video.date_video = '';
            }
            this.video.user_id = this.$store.state.auth.user.id;
            await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/video-create`,this.video)
            this.filtersOfVideos(true,true);
            empty();
            await this.$notify({
               type: "success",
               message: `Video je uspoešno dodata!`,
            });
  } catch ({ response }) {
    await this.$notify({
               type: "danger",
               message: `Greška u podacima`,
            });
  }  
        
    },
    async editVideo(video_edit){
        
             try {
                  await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/video-update`,video_edit)
                  this.filtersOfVideos(true,false);
              await this.$notify({
               type: "success",
               message: `Video je uspoešno editivan!`,
            });
           } catch ({ response }) {
              await this.$notify({
               type: "danger",
               message: `Greška u podacima`,
            });
  }  
    },
    async deleteVideo(id){
     
        try {         
            this.editClick = false;
            await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/video-delete`,{id:id})
            this.filtersOfVideos(true,false);
            await this.$notify({
               type: "danger",
               message: `Video je uspoešno obrisan!`,
            });
            this.editClick = true;
  } catch ({ response }) {
    await this.$notify({
               type: "danger",
               message: `Greška u podacima`,
            });
  }  
        

        
    },
    showModalEdit(videos){
        this.video_edit = videos;
        this.$refs['edit-modal'].show()
    },
    async paginateVideos(){
        let paginate = await this.$axios.$get(`${this.$axios.defaults.baseURL}/api/video-get-all?page=${this.page}`);
        this.listOfVideos = paginate.videos.data;
    },
    async editVideoModal(){
        this.editVideo(this.video_edit);
    },
    async filtersOfVideos(paginateOrFilter,addvideo){
          let filterVideo = await this.$axios.$get(`${this.$axios.defaults.baseURL}/api/video-roles?category=${this.filter.category}&type=${this.filter.type}&page=${paginateOrFilter == true ? this.page : 1}`);
          this.listOfVideos = filterVideo.videos.data;
          if(addvideo) this.rows = filterVideo.videos.last_page;
    },
 
}

}
</script>

<style>

</style>