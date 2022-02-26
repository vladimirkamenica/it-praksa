export default async function({store,redirect,app}){
    if(store.state.auth.loggedIn){
        if(store.state.auth.role.all_permits){         
            redirect({ name: "cms-role" })
         }
          if(store.state.auth.role.all_permits || store.state.auth.role.videos){         
            redirect({ name: "cms-video" }) 
         }
          if(store.state.auth.role.all_permits || store.state.auth.role.newspaper){
            redirect({ name: "cms-newspaper" }) 
         }
       app.$axios.setToken(app.$cookies.get('auth_token'), 'Bearer')     
      }
}