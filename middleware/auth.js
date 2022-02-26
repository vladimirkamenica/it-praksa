export default async function({store,redirect,app}){
    if(!store.state.auth.loggedIn){
        redirect({ name: "login" })
      }
      app.$axios.setToken(app.$cookies.get('auth_token'), 'Bearer')
}