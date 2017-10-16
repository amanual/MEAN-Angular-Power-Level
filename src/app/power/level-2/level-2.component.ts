import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level-2',
  templateUrl: './level-2.component.html',
  styleUrls: ['./level-2.component.css']
})
export class Level2Component implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }

}
