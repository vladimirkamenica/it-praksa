export default async function({store,redirect,app}){
    if(store.state.auth.role.all_permits ||  store.state.auth.role.newspaper ){
      app.$axios.setToken(app.$cookies.get('auth_token'), 'Bearer')
        
      }else{
          redirect({ name: "login" })
      }
}