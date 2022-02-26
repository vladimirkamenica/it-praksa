export const actions = {
 async nuxtServerInit ({commit},{app}){
     try {
         let user = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/me`,{
             headers:{
                 'Authorization' : `Bearer ${app.$cookies.get('auth_token')}`
             }
         })
         commit("auth/set_loggedIn",true);
         commit("auth/set_user",user.user);
         commit("auth/set_role",user.role);
     } catch (error) {
        commit("auth/set_loggedIn",false);
        commit("auth/set_user",null);
        commit("auth/set_role",null);
        

     }
     let video = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/video-categories-get`);
     commit("category/set_categories",video.video_categories);
     
 }
}