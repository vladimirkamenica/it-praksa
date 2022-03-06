const axios = require('axios');


module.exports = {
    create : () =>{
        return new Promise(async (res,rej)=>{
            try {
            let srtToLat = (path) =>{
                var word = [
                    {
                        sign : 'š',
                        change : 's'
                    },{
                        sign : 'đ',
                        change : 'dj'
                    },{
                        sign : 'ž',
                        change : 'z'
                    },{
                        sign : 'č',
                        change : 'c'
                    },{
                        sign : 'ć',
                        change : 'c'
                    }
        
                ]
                let arr = ['š','đ','ž','č','ć']
                var re = new RegExp(arr.join("|"), "gi");
                return path.replace(re,(w)=>{
                   var find =  word.find(x=> x.sign == w);
                   return find.change;
                });
            }
             let routes = [];
             let route_newspapers = [];
             let route_videos = [];
             let newspapers = await axios.get('https://itpraksa.com/api/api/newspapers-sitemap');
             route_newspapers = newspapers.data.newspapers.map(news => `/it-vesti/${srtToLat(news.title_news.toLowerCase()).split(' ').join('-').replace(/[?,]/g,'')}`)
             let categories = await axios.get('https://itpraksa.com/api/api/video-category-sitemap');
             const category_videos = await Promise.all(categories.data.categories.map(async (category) => {
                let videos = await axios.get(`https://itpraksa.com/api/api/video-sitemap?category=${srtToLat(category.video_category.toLowerCase()).split(' ').join('-')}`);
                return videos.data.videos.map(video => `/${srtToLat(category.video_category.toLowerCase()).split(' ').join('-')}/${srtToLat(video.title_video.toLowerCase()).split(' ').join('-').replace(/[?,]/g,'')}`)
            }));
            category_videos.forEach(el => {
               el.forEach(e => {
                   route_videos.push(e);
               });
           });
             routes = route_newspapers.concat(route_videos);          
             res(routes) ;
                
            } catch (error) {
                rej(error)
            }
        })
    }
}
