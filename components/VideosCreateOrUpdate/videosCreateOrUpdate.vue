<template>
  <div>
 <b-container fluid>
                              <b-row>
                                  <b-col>
                                       <b-form-group
                                          id="title"
                                          label="Naslov"
                                          label-for="title_input"
                                          description="Naslov videa mora biti jedninstven"
                                        >
                                     <b-form-input
                                         id="title_input"
                                         v-model="title_video"
                                         type="text"
                                         placeholder="Unesi naslov"
                                       
                                     ></b-form-input>
                                     
                                    </b-form-group>
                                     <b-form-group
                                          id="link"
                                          label="Link"
                                          label-for="link_input"
                                        >
                                     <b-form-input
                                         id="link_input"
                                         v-model="link"
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
                                             <font-awesome-icon :icon="['fa', 'clock']" size="2x" />
                                             <date-picker format="DD-MM-YYYY H:i" class="ml-1" style="margin-top: 2px"  v-model="get_date_video">                                          
                                          </date-picker>
                                         </div>
                                          
                                         </client-only>   
                               
                                    </b-form-group>
                                      <b-form-group
                                          id="catrgoty"
                                          label="Kategorija"
                                          label-for="catrgoty_select"
                                        >
                                    <b-select :options="get_categories"
                                              value-field="id"
                                              text-field="video_category"
                                              v-model="get_video__category_id"></b-select>
                                    </b-form-group>
                                     <b-form-group
                                          id="description"
                                          label="Opis"
                                          label-for="description"
                                        >
                                    <client-only>
                                        <vue-editor  
                                               v-model="get_description"
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
  </div>
</template>

<script>
import imageToFolderApi from '~/util/imageToFolderApi'
import {mapGetters} from 'vuex';
export default {
name : 'videoUpdateCreate',
computed: {
  title_video: {
    get () {
      return this.$store.state.videos.title_video
    },
    set (value) {
      this.$store.commit('videos/set_title_video', value)
    }
  },
   link: {
    get () {
      return this.$store.state.videos.link
    },
    set (value) {
      this.$store.commit('videos/set_link', value)
    }
  }
},
methods:{
   async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        await imageToFolderApi.handleImageAdded(file, Editor, cursorLocation, resetUploader,this.$axios)
    },
     async addVideo(){
        try {
            let videos = await this.$axios.$post('/api/video-update-or-create',{video:this.video})
            this.listOfVideos = videos.videos;
            console.log(videos.req);
            await this.$notify({
               type: "success",
               message: `Video je uspoešno dodata!`,
            });
  } catch ({ response }) {
    console.log("fail", response.data.errors)
  }  
        
    },
}
}
</script>

<style>

</style>