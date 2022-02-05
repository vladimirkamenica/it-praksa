<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Početna',
            icon: 'ni ni-shop text-primary',
            path: '/dashboard',
          }"
        >
        </sidebar-item>
          <!--
        <sidebar-item
          opened
          :link="{
            name: 'Examples (API)',
            icon: 'fab fa-vuejs',
          }"
        >
          <sidebar-item
            opened
            :link="{ name: 'User Profile', path: '/examples/user-profile' }"
          />
          <sidebar-item
            opened
            :link="{
              name: 'User Management',
              path: '/examples/user-management',
            }"
          /> 
        </sidebar-item> -->
        <sidebar-item
          :link="{
            name: 'IT saveti',
            path: '/it-saveti/_itsaveti.vue',
            icon: 'far fa-comment',
          }"
        />
        <sidebar-item
          :link="{
            name: 'IT vesti',
            path: '/it-vesti/itvesti',
            icon: 'far fa-newspaper',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Testiranje',
            icon: 'fas fa-check',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'PHP programiranje',
            icon: 'fab fa-php',
            path: '/maps/google',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Web design',
            icon: 'far fa-object-group',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'HTML',
            icon: 'fab fa-html5',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'CSS',
            icon: 'fab fa-css3',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Osnove programiranja',
            icon: 'fa fa-laptop-code',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: '.NET programiranje',
            icon: 'fa fa-server',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'JAVA programiranje',
            icon: 'fab fa-java',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Grafički dizajn',
            icon: 'fa fa-palette',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Laravel',
            icon: 'fab fa-laravel',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Node.js',
            icon: 'fab fa-node',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Vue.js',
            icon: 'fab fa-vuejs',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Bootstrap',
            icon: 'ni ni-align-left-2 text-default',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'SEO',
            icon: 'fab fa-searchengin',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Digitalni marketing',
            icon: 'fab fa-digital-ocean',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'O nama',
            icon: 'far fa-address-card',
            path: '/tables/regular',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Marketing',
            icon: 'fa fa-bullhorn',
            path: '/kontakt/marketing',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Kontakt',
            icon: 'fa fa-headset',
            path: '/kontakt/kontakt',
          }"
        >
        </sidebar-item>

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
        <!--
        <a
          href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel"
          target="_blank"
          class="btn btn-danger btn-icon ml-sm-3 d-md-block mb-2 mt-1 mr-3"
          ><span class="btn-inner--icon"
            ><i class="fas fa-download mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Upgrade to PRO</span></a
        >

        <a
          href="https://nuxt-argon-dashboard-laravel.creative-tim.com/documentation/"
          target="_blank"
          class="btn btn-neutral btn-icon ml-sm-3 d-md-block mb-2 mr-3"
          ><span class="btn-inner--icon"
            ><i class="fas fa-file-alt mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Documentation</span></a
        >

        <a
          href="https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
          target="_blank"
          class="btn btn-info btn-icon ml-sm-3 d-md-block mb-2 mr-3"
          ><span class="btn-inner--icon"><i class="fas fa-gift mr-2"></i></span>
          <span class="nav-link-inner--text">Download now</span></a
        >

        <a
          href="https://github.com/creativetimofficial/nuxt-argon-dashboard-laravel"
          target="_blank"
          class="btn btn-dark btn-icon ml-sm-3 d-md-block mr-3"
          ><span class="btn-inner--icon"
            ><i class="fab fa-github mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Star us on Github</span></a
        > -->
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar
        :type="$route.name === 'alternative' ? 'light' : 'default'"
      ></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
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
  },
  mounted() {
    this.initScrollbar(), this.$store.dispatch("profile/me");
  },
};
</script>
<style lang="scss">
</style>
