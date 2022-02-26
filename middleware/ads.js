export default async function({store,redirect,app}){
    if(!store.state.auth.role.all_permits){
        redirect({ name: "login" })
      }
      app.$axios.setToken(app.$cookies.get('auth_token'), 'Bearer')
}