import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  url = 'http://digitalent.cc:8080/v1/domo/';

  constructor(private http:Http) {

  }

  getDomo(domo_id) {
      var endpoint = this.url + encodeURI(domo_id);
      var response = this.http.get(endpoint).map(res => res.json());

      return response;
  }
}
