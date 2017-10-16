import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-level-4',
  templateUrl: './level-4.component.html',
  styleUrls: ['./level-4.component.css']
})
export class Level4Component implements OnInit {
  @Input() level;
  constructor() { }

  ngOnInit() {
  }

}
