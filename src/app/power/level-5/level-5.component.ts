import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level-5',
  templateUrl: './level-5.component.html',
  styleUrls: ['./level-5.component.css']
})
export class Level5Component implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }

}
