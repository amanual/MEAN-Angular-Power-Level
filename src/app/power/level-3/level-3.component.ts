import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-level-3',
  templateUrl: './level-3.component.html',
  styleUrls: ['./level-3.component.css']
})
export class Level3Component implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }

}
