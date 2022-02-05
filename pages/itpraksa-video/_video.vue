<template>
<div class="container-fluid">
     <div class="row">
         <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
            <div class="row mt-4">
                <div class="col">
                    <h1>{{filterData().title}}</h1>
                </div>
            </div>
  <div class="row mt-4">
      <div class="col">
              <video-player :src="filterData().video"/>
      </div>
  </div>
  <div class="row mt-4">
      <div class="col">
           <p>Datum : {{filterData().date}}</p>
      </div>
  </div>
   <div class="row mt-4">
      <div class="col">
           <p>Opis : {{filterData().description}}</p>
      </div>
  </div>
         
         </div>
         <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 bg-danger">
          Reklame
         </div>
     </div>



    <div class="row d-none">
        <div class="col-xl-8">

        </div>
        <div class="col-xl-4">
            
        </div>
    </div>

</div>

</template>

<script>
import VideoPlayer from 'nuxt-video-player'
export default {
layout: 'DashboardLayout',
name: 'itpraksa',
components:{
    VideoPlayer
},
data(){
    return{
        videos: [
            {
                title: "Esenca Software 1",
                video: "https://www.youtube.com/embed/JKWdarVK2Rc",
                date: '11.12.2021',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
                
            },{
                title: "Esenca Software 2",
                video: "https://www.youtube.com/embed/G3gC-oOoju0",
                date: '11.12.2021',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
            },{
                title: "Nuxt.Js  css",
                video: "video-3",
                date: '11.12.2021',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: "Nuxt.Js  css",
                video: "video-3",
                date: '11.12.2021',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: "Nuxt.Js  css",
                video: "video-3",
                date: '11.12.2021',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
        ]
    }
},
methods:{
   filterData(){
       return this.videos.find(x=> x.title == this.$route.params.video)
   }
}
}
</script>

<style>

</style>



<style>

</style>