<template>
  <nav :class="classes"  class="navbar shadow bg-white d-xl-none d-lg-block d-md-block d-sm-block d-block">
    <div :class="containerClasses">
      <slot name="brand" >
        <nuxt-link :to="{name:'index'}">
            <img class="d-xl-none d-lg-block d-md-block d-sm-block d-block" src="/img/brand/logoitpraksa.png" width="130" alt="itpraksa.com" >
        </nuxt-link>
      </slot>
        <div
          class="navbar-collapse navbar-custom-collapse collapse show"
          :class="menuClasses"
          v-show="show"
          @click="closeMenu">
          <slot :close-menu="closeMenu"></slot>
        </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'base-nav',
  props: {
    show: {
      type: Boolean,
      default: false,
      description:
        'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description:
        'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container',
      description:
        'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
    type: {
      type: String,
      default: '',
      validator(value) {
        return [
          '',
          'dark',
          'success',
          'danger',
          'warning',
          'white',
          'primary',
          'light',
          'info',
          'vue'
        ].includes(value);
      },
      description: 'Navbar color type'
    }
  },
  model: {
    prop: 'show',
    event: 'change'
  },
  computed: {
    classes() {
      let color = ``;
      let classes = [
        { 'navbar-transparent': this.transparent },
        { [`navbar-expand-${this.expand}`]: this.expand }
      ];
      if (this.position) {
        classes.push(`navbar-${this.position}`);
      }
      if (!this.transparent) {
        classes.push(color);
      }
      return classes;
    },
    hasMenu() {
      return this.$slots.default;
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('change', !this.show);
   
    },
    closeMenu() {
      if(this.$store.state.showlink.display == 'd-xl-block d-lg-none d-md-none d-sm-none d-none'){
         this.$store.commit("showlink/set_display",  'd-block' );
         this.$store.commit("showlink/set_show", true);

      }else{
         this.$store.commit("showlink/set_show", !this.$store.state.showlink.show);
         this.$store.commit("showlink/set_display", this.$store.state.showlink.show ? 'd-block' : 'd-none');
      }
      
      this.$emit('change', false);
     

    },
    changeBgTopBar(){
     if(window.innerWidth > 1200){
         this.$refs['navBar'].style.background="transparent";
      }else if(window.innerWidth < 1200){
         this.$refs['navBar'].style.background="white";

      }
  }
  },
   mounted() {
      
    
  
  },

};
</script>
<style></style>
