import { Image } from '../models/@types/Image';
import Service from './Service';

export default class FileService extends Service {
  static async upload(file: File): Promise<Image.ImageCreated> {
    const formData = new FormData();
    formData.append('image', file);
    return this.Http.post('/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(this.getData);
  }
}
