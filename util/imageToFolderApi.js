
export default class ImageToFolder{

  static async imageToFolderApi(axios,img){
    var formData = new FormData();
    formData.append("image", img);
    let apiImg = await axios.$post(`/api/upload-img-api`,formData);
    console.log(apiImg.img)
    return apiImg.img.img;
  }
  static async handleImageAdded(file, Editor, cursorLocation, resetUploader,axios){
    var formData = new FormData();
    formData.append("image", file);
    let img = await axios.$post(`/api/upload-img-api`,formData);
    const url = `${axios.defaults.baseURL}/img/${img.img.img}`; // Get url from response
    Editor.insertEmbed(cursorLocation, "image", url);
    resetUploader();
    
  }

}