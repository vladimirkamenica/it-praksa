const state = () =>({
    categories : [],
  
})
const mutations = {
    set_categories : (state,categories) => {
        state.categories = categories;
    },
   
}
const getters = {
    get_categories : state => state.categories,
  
}

export default {
    state,
    mutations,
    getters
}