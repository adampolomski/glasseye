import request from 'request';
import {List} from 'immutable';

export default class ProductRepository {
  list() {
    return new Promise((resolve, reject) => {
      request.get('http://www.google.com', (err, resp) => {
        if(resp.statusCode == 200) {
          resolve(ProductRepository.products()); 
        } else {
          reject();
        }
      });
    });
  }
  
  static products() {
    return new List([Product.of(100)]);
  }
}

export class Product {
  constructor(id) {
    this.id = id;
  }
  
  static of(id) {
    return new Product(id);
  }
  
  render(method) {
    return method(this.id);
  }
}