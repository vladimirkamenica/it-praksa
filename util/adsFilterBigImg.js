
export default class FilterBigImg{

    static bigImgFalse(ads){
      let filt = ads.filter(x=>{
        if(x.big_img != true) return true
      })
      return filt.slice(0,2);
    }
    static bigImgTrue(ads){
      return ads.find(x=> x.big_img == true)
    }
}