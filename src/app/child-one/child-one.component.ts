import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Input() title: string;
  @Output() foo = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  invokeToParent(){
    this.foo.emit('a');
  }

  // Directives (Strcutural, Attribute, Component)
  // *ngFor & *ngIf - Structural

  // Attribute directives
  // Custom Attribute Directives

}
