import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://ikarodev.brazilsouth.cloudapp.azure.com:3333/uploads/${image.path}`,
    };
  }, 

  renderMany(images: Image[]){
    return images.map(image => this.render(image));
  }
};