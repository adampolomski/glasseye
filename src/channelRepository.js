import request from 'request'
import {List} from 'immutable'
import _ from 'underscore'

export default class ChannelRepository {
  list() {
    return new Promise((resolve, reject) => {
      request.get('http://www.telewizjada.net/get_channels.php', (err, resp, body) => {
        if(resp.statusCode == 200) {
          resolve(ChannelRepository.channels(JSON.parse(body))); 
        } else {
          reject();
        }
      });
    })
  }
  
  static channels(json) {
    return new List(_.map(json.channels, jsonChan => Channel.of(jsonChan.id) ));
  }
}

export class Channel {
  constructor(id) {
    this.id = id;
  }
  
  static of(id) {
    return new Channel(id);
  }
  
  render(method) {
    return method(this.id);
  }
}