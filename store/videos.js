const state = () =>({
    id: 0,
    title_video : null,
    link : '',
    description : '',
    date_video : '',
    video__category_id : '',
    display : false,
    top_video : false,
    user_id : '',
    categories : null
})
const mutations = {
    set_user_id : (state,user_id) => {
        state.user_id = user_id;
    },
    set_title_video : (state,title_video) => {
        state.title_video = title_video;
    },
    set_link: (state,link) => {
        state.link = link;
    },
    set_description : (state,description) => {
        state.description = description;
    },
    set_date_video : (state,date_video) => {
        state.date_video = date_video;
    },
    set_video__category_id : (state,video__category_id) => {
        state.video__category_id = video__category_id;
    },
    set_display : (state,display) => {
        state.display = display;
    },
    set_top_video : (state,top_video) => {
        state.top_video = top_video;
    },
    set_categories : (state,categories ) => {
        state.categories  = categories ;
    },
}
const getters = {
    get_user_id : state => state.user_id,
    get_title_video : state => state.title_video,
    get_link: state => state.link,
    get_description : state => state.description,
    get_date_video : state => state.date_video,
    get_video__category_id  : state => state.video__category_id ,
    get_display: state => state.display,
    get_top_video : state => state.top_video,
    get_categories: state => state.categories,
 
}

export default {
    state,
    mutations,
    getters
}