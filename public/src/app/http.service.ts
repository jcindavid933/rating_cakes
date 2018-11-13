import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllCakes(){
    return this._http.get('/cakes');
  }

  getOneCake(cake){
    return this._http.get('/cake/' + cake._id);
  }

  updateCake(cake){
    console.log(cake);
    return this._http.put('/update/' + cake._id, cake);
  }

  createCake(cake){
    return this._http.post('/create_cake', cake);
  }

}
