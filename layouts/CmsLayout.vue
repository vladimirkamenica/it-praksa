<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar :class="display" logo="/img/brand/slogan 1.webp">
      <template slot-scope="props" slot="links">
        <b-container>
          <b-row class="mt-2"   v-if="role.all_permits">
            <b-col>
               <font-awesome-icon :icon="['fas', 'circle-check']" style="width: 20px;"/>
               <nuxt-link class="text-dark" :to="{name:'cms-role'}">Uloge</nuxt-link>
            </b-col>
          </b-row>
           <b-row class="mt-2"   v-if="role.all_permits">
            <b-col>
               <font-awesome-icon :icon="['fa', 'user']" style="width: 17px;"/>
               <nuxt-link class="text-dark" :to="{name:'cms-myregister'}">Korisnici</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2"   v-if="role.all_permits || role.videos">
            <b-col>
               <font-awesome-icon :icon="['fa', 'video']" style="width: 20px;" />
               <nuxt-link class="text-dark" :to="{name:'cms-video'}">Video</nuxt-link>
            </b-col>
          </b-row>
           <b-row class="mt-2"   v-if="role.all_permits || role.newspaper">
            <b-col>
               <font-awesome-icon :icon="['fa', 'address-card']" style="width: 20px;" />
               <nuxt-link class="text-dark" :to="{name:'cms-newspaper'}">Vesti</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2"   v-if="role.all_permits ">
            <b-col>
               <font-awesome-icon :icon="['fa', 'rectangle-ad']" style="width: 20px;" />
               <nuxt-link class="text-dark" :to="{name:'cms-myads'}">Reklame</nuxt-link>
            </b-col>
          </b-row>
           <b-row class="mt-2"   v-if="role.all_permits ">
            <b-col>
               <font-awesome-icon :icon="['fa', 'rectangle-ad']" style="width: 20px;" />
               <nuxt-link class="text-dark" :to="{name:'cms-myadstopage'}">Reklame na stranicama</nuxt-link>
            </b-col>
          </b-row>
          <b-row class="mt-2" >
            <b-col>
               
               <button class=" btn btn-danger " @click="logout"> Logout</button>
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

      <div @click="$sidebar.displaySidebar(false)">
        
        <nuxt></nuxt>
      </div>
     
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

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
  middleware : 'auth',
  computed:{
    role(){
      return this.$store.state.auth.role;
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
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("scrollbar-inner");
      }
    },
    clcikTest(){
    },
    async logout(){
        let token = this.$cookies.get('auth_token');
        await this.$axios.setToken(token,'Bearer')
        await this.$axios.$post('/api/logout')
        this.$store.commit("auth/set_loggedIn", false);
        this.$store.commit("auth/set_user", null);
        this.$store.commit("auth/set_role", null);
        this.$cookies.remove('auth_token');
        this.$router.push({ name: 'login'})  

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
  mounted() {
      window.addEventListener('resize', this.displayBar);
    
    this.initScrollbar(); 
    
  },
};
</script>
<style lang="scss">
</style>