import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
 
  listVal;  
  constructor() { }

  ngOnInit() {
  }
  calPower(){    
    console.log(this.listVal)
  }

}
