<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar ref="sideBar" :class="display" logo="/img/brand/logoitpraksa.png">
      <template slot-scope="props" slot="links">
        <b-container >
          <b-row>
            <b-col @click="siderbarDisable">
               <i class="far fa-home mr-2 widthSidebar"></i>
               <nuxt-link class="text-dark" :to="{name:'index'}">Početna</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col @click="siderbarDisable">
               <i class="far fa-newspaper  mr-2 widthSidebar"></i>
               <nuxt-link  class="text-dark"  :to="{name:'it-vesti'}">IT vesti</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2" v-for="video in categories" :key="video.id">
            <b-col @click="siderbarDisable"> 
               <i :class="`${video.icon}  mr-2 widthSidebar`"></i>
               <nuxt-link class="text-dark"  :to="{name:'categoryvideo',params:{categoryvideo:srtToLatPath(video.video_category)}}">{{video.video_category}}</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col @click="siderbarDisable">
               <i class="far fa-address-card mr-2 widthSidebar"></i>
               <nuxt-link class="text-dark"  :to="{name:'o-nama'}">O nama</nuxt-link>
            </b-col>
          </b-row>
           <b-row class="mt-2">
            <b-col @click="siderbarDisable">
               <i class="far fa-desktop mr-2 widthSidebar"></i>
               <nuxt-link class="text-dark"  :to="{name:'usluge'}">Usluge</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col @click="siderbarDisable">
               <i class="fa fa-bullhorn mr-2 widthSidebar"></i>
               <nuxt-link class="text-dark"  :to="{name:'marketing'}">Marketing</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col @click="siderbarDisable">
               <i class="fa fa-headset mr-2 widthSidebar"></i>
               <nuxt-link class="text-dark"  :to="{name:'kontakt'}">Kontakt</nuxt-link>
            </b-col>
          </b-row>
        </b-container>

        <hr
          class="my-3"
          style="
            border: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            min-width: 80%;
            overflow: visible;
            box-sizing: content-box;
            height: 0;
          "
        />
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar
        :type="$route.name === 'alternative' ? 'light' : 'default'"
      ></dashboard-navbar>

      <div @click="siderbarDisable">
        
        <nuxt></nuxt>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import srToLat from '~/util/srToLat';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "~/components/layouts/argon/DashboardNavbar.vue";
import ContentFooter from "~/components/layouts/argon/ContentFooter.vue";
import DashboardContent from "~/components/layouts/argon/Content.vue";
import Vuex from "vuex";

export default {
  computed:{
    categories(){
      return this.$store.state.category.categories
    },
    show(){
      return this.$store.state.showlink.show;
    },
    display(){
      return this.$store.state.showlink.display;
    }
  },
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
  },
 
  methods: {
    srtToLatPath(title){
     return srToLat(title.toLowerCase()).split(' ').join('-').toLowerCase().replace(/[?]/g,'');
    },
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("scrollbar-inner");
      }
    },
    siderbarDisable(){      
       if(this.$sidebar.showSidebar){
           this.$sidebar.displaySidebar(false);
           this.$sidebar.toggleMinimize(false);
           this.$store.commit("showlink/set_show", false);
           this.$store.commit("showlink/set_display",  'd-none' );



        }     
    },
  
    displayBar(){
     
      if( parseInt(window.innerWidth) < 1200){
        this.$sidebar.displaySidebar(false);
        this.$sidebar.toggleMinimize(false)
        this.$store.commit("showlink/set_show", false);
        this.$store.commit("showlink/set_display",  'd-none' );


      }else if(parseInt(window.innerWidth) > 1200){
        this.$sidebar.displaySidebar(true);
        this.$sidebar.toggleMinimize(true)
        this.$store.commit("showlink/set_show", true);
        this.$store.commit("showlink/set_display",  'd-block' );




      }
    }
  },
  created(){
    
  },
  mounted() {
      window.addEventListener('resize', this.displayBar);
      
     
      this.initScrollbar();
  },
};
</script>
<style lang="scss">
</style>
