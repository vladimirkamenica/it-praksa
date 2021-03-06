import Sidebar from './SideBar.vue';
import SidebarItem from './SidebarItem.vue';

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [],
  isMinimized: false,
  breakpoint: 1200,
  hovered: false,
  displaySidebar(value) {
    if (window.innerWidth > this.breakpoint) {
      return;
    }
    this.isMinimized = !value
    this.showSidebar = value;
    let docClasses = document.body.classList

    
  },
  toggleMinimize(value) {
    this.isMinimized = !this.isMinimized;
    let docClasses = document.body.classList
    
  },
  onMouseEnter() {
  
    if (this.isMinimized) {
      document.body.classList.add('g-sidenav-show')
      document.body.classList.remove('g-sidenav-hidden')
    }
  },
  onMouseLeave() {
    
    if (this.isMinimized) {
      let docClasses = document.body.classList
      docClasses.remove('g-sidenav-show')
      docClasses.add('g-sidenav-hide')
      setTimeout(() => {
        docClasses.remove('g-sidenav-hide')
        docClasses.add('g-sidenav-hidden')
      }, 300)
    }
  }
};

const SidebarPlugin = {
  install(Vue, options) {
    if (options && options.sidebarLinks) {
      SidebarStore.sidebarLinks = options.sidebarLinks;
    }
    let app = new Vue({
      data: {
        sidebarStore: SidebarStore
      }
    });
    Vue.prototype.$sidebar = app.sidebarStore;
    Vue.component('side-bar', Sidebar);
    Vue.component('sidebar-item', SidebarItem);
  }
};

export default SidebarPlugin;
