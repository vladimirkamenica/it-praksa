const state = () =>({
    user : null,
    role : null,
    loggedIn : false
})
const mutations = {
    set_user : (state,user) => {
        state.user = user;
    },
    set_loggedIn : (state,loggedIn) =>{
        state.loggedIn = loggedIn;
    },
    set_role : (state,role) =>{
        state.role = role;
    }
}
const getters = {
    get_user : state => state.user,
    get_loggedIn : state => state.loggedIn,
    get_role : state => state.role,
}

export default {
    state,
    mutations,
    getters
}