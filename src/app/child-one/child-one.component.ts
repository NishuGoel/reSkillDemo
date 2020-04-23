import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent {

  @Input() title: string;
  @Output() foo = new EventEmitter<any>();

  counterval: number = 0;

  counterClicked() {
    this.foo.emit(this.counterval++);
  }

}
