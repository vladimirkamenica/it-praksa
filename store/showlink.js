const state = () =>({
    show : true,
    display : 'd-xl-block d-lg-none d-md-none d-sm-none d-none',
})
const mutations = {
    set_show : (state,show) => {
        state.show = show;
    },
    set_display : (state,display) => {
        state.display = display;
    },
   
}
const getters = {
    get_show : state => state.show,
    get_display : state => state.display,
   
}

export default {
    state,
    mutations,
    getters
}