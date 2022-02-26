<template>
<div>
  <b-row v-if="big">
    <b-col  xl="6" lg="6" md="6" sm="12" cols="12" v-for="video in videos" :key="video.id">       
                 <div class="card ">
                  <video-player class="embed-responsive-item"  :src="video.link" ></video-player>
                    <div class="card-body p-2 heightBodyVideo" >
                        <nuxt-link :to="{name:'categoryvideo-title',params:{categoryvideo:srtToLatPath(video.category.video_category),title:srtToLatPath(video.title_video)}}">
                         <h3 class="card-title m-0">{{video.title_video}}</h3>
                      </nuxt-link>
                  <p class="card-text text-muted dateVideoSize">{{dateNews(video.video_date)}}</p> 
               </div>
       </div>
    </b-col>
    </b-row>
    <b-row v-else>
 <b-col :xl="xl_col" lg="4" md="4" sm="6" cols="12" v-for="video in videos" :key="video.id">
           <div class="card ">
          <video-player class="embed-responsive-item"  :src="video.link" ></video-player>
          <div class="card-body p-2 heightBodyVideo" >
            <nuxt-link :to="{name:'categoryvideo-title',params:{categoryvideo:srtToLatPath(video.category.video_category),title:srtToLatPath(video.title_video)}}">
               <h4 class="card-title m-0">{{video.title_video}}</h4>
            </nuxt-link>
            <p class="card-text text-muted dateVideoSize">{{dateNews(video.video_date)}}</p> 
          </div>
       </div>            
      </b-col>
    </b-row>
  </div>
</template>

<script>
import srToLat from '~/util/srToLat';
import VideoPlayer from 'nuxt-video-player'

export default {
name : 'videoDisplay',
components:{
    VideoPlayer
},
props:{
    videos:{
        type:Array
    },
     big:{
        type:Boolean
    },
    xl_col:{
      type:Number
    }

},
methods:{
  dateNews(date){
       return this.$moment(date).format("DD.MM.YYYY")
    },
  srtToLatPath(title){
     return srToLat(title).split(' ').join('-').toLowerCase().replace(/[?]/g,'');
    },
     lengthTitle(title){
        let res = '';
        if(this.$mq === 'sm'){
            res = title.length > 50 ? title.substring(0,45) + '...' : title;
        }
        if(this.$mq === 'md'){
            res = title
        }
         if(this.$mq === 'lg'){
            res = title
        }
        if(this.$mq === 'xl'){
           res = title.length > 45 ? title.substring(0,45) + '...' : title;
        }
         if(this.$mq === 'xxl'){
            res = title
        }
        if(this.$mq === 'iphone_5'){
            res = title.length > 40 ? title.substring(0,35) + '...' : title;
        }
       return res;
   },
}
}
</script>

<style>

</style>