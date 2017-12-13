import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  url = 'http://digitalent.cc:8080/v1/';
  public activeUser = {first_name: ""};
  public activeDomo = {
    "name": "",
    "voice": "",
    "emotion": ""
  };

  constructor(private http:Http) {

  }

  getDomo(domo_id) {
      var endpoint = this.url + encodeURI("domo/" + domo_id);
      var response = this.http.get(endpoint).map(res => res.json());

      response.subscribe(
        data => {
          this.activeDomo = data;
        }
      );

      return response;
  }

  postUser(userdata) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var endpoint = this.url + encodeURI("domo/1/users");
    var response = this.http.post(endpoint, JSON.stringify(userdata), options).map(res => res.json());

    response.subscribe(
      data => {
          this.activeUser = data;
      }
    );

    return response;
  }

  putDomo(domodata) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var endpoint = this.url + encodeURI("domo/1");
    var response = this.http.put(endpoint, JSON.stringify(domodata), options).map(res => res.json());

    response.subscribe(
      data => {
        console.log(response, data, this.activeDomo)
          this.activeDomo = data;
      }
    );

    return response;
  }

  putApps(appsdata) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var endpoint = this.url + encodeURI("apps/1");
    var response = this.http.put(endpoint, JSON.stringify(appsdata), options).map(res => res.json());

    return response;
  }

  putApps2(appsdata2) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var endpoint = this.url + encodeURI("apps/2");
    var response = this.http.put(endpoint, JSON.stringify(appsdata2), options).map(res => res.json());

    return response;
  }

  getUser(user_id) {
      var endpoint = this.url + encodeURI("users/" + user_id);
      var response = this.http.get(endpoint).map(res => res.json());

      return response;
  }
}
