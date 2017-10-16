import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-level-6',
  templateUrl: './level-6.component.html',
  styleUrls: ['./level-6.component.css']
})
export class Level6Component implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }

}
