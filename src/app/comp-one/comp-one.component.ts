import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent {

  counter:number = 0;

  counterIncrease(){
    this.counter++;
  }

  counterDecrease(){
    if(this.counter > 0){
      this.counter--;
    }
  }

}
