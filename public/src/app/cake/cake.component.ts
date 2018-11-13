import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() selectedCake: any;
  average: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.averageRating();
  }
  averageRating(){
    if(this.selectedCake){
      let total = 0;
      let length = this.selectedCake[0].rating.length;
      if(this.selectedCake[0].rating){
        for(var i = 0; i < length; i++){
          total += this.selectedCake[0].rating[i];
        }
        this.average = total/length;
      }
      else{
        this.average = 0;
      }
    }
  }
}
