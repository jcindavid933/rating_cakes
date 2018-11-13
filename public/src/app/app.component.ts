import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allCakes: any;
  newCake: any;
  editCake: any;
  oneCake: Object;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.allCakes = [];
    this.newCake = {baker_name: '', image_url: ''};
    this.editCake = {_id:'', baker_name: '', image_url: '', rating: '', comment: ''};
    this.getCakesFromService();
  }

  clearCakeForm(){
    this.newCake = {baker_name: '', image_url: ''};
  }

  getCakesFromService(){
    const obs = this._httpService.getAllCakes();
    obs.subscribe((data) => {
      console.log(data);
      this.allCakes = data;
    })
  }

  createCake(){
    const obs = this._httpService.createCake(this.newCake);
    obs.subscribe((data) => {
      console.log(data);
      this.clearCakeForm();
    })
  }

  showOneCake(cake){
    const obs = this._httpService.getOneCake(cake);
    obs.subscribe((data) => {
      console.log(data);
      this.oneCake = data;
    })
  }

  updateCakeFromService(cake){
    this.editCake['_id'] = cake._id;
    this.editCake['baker_name'] = cake.baker_name;
    this.editCake['image_url'] = cake.image_url;
    console.log(this.editCake);
    const obs = this._httpService.updateCake(this.editCake);
    obs.subscribe((data) => {
      console.log(data);
    })
  }

}
