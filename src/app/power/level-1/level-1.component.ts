import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level-1',
  templateUrl: './level-1.component.html',
  styleUrls: ['./level-1.component.css']
})
export class Level1Component implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }
  

}
