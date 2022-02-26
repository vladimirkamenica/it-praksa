<template>
     <b-row>
       <b-col :xl="single ? 4 : 3 " lg="4" md="6" sm="6" cols="12" v-for="newspaper in newspapers" :key="newspaper.id">
        <b-card  :img-src="newspaper.img_news" :img-alt="newspaper.title_news" img-top>
            <b-card-sub-title class="mb-2" style="font-size:14px">{{dateNews(newspaper.date_news)}}</b-card-sub-title>
         <b-card-text style="min-height:100px">
               {{newspaper.title_news}}
         </b-card-text>
         <template #footer>
           <nuxt-link :to="{name:'it-vesti-title',params:{title:srtToLatPath(newspaper.title_news.toLowerCase())}}">
                <button class="btn btn-primary">Više</button>
           </nuxt-link>
         
         </template>
      </b-card>
       </b-col>
     </b-row>
</template>

<script>
import srToLat from '~/util/srToLat';
export default {
name: 'newspapers',
props:{
    title:{
        type:String
    },
     newspapers:{
        type: Array,
    },
    single:{
        type: Boolean
    }
},
computed:{
    
},
methods:{
  dateNews(date){
       return this.$moment(date).format("DD.MM.YYYY")
    },
  srtToLatPath(title){
     return srToLat(title).split(' ').join('-').toLowerCase().replace(/[?]/g,'');
    },
}
}
</script>

<style>

</style>