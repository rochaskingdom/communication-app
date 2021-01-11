import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  plusOneClick(): void {
    this.plusOne.emit();
  }

  plusTwoClick(): void {
    this.plusTwo.emit();
  }

  minusOneClick(): void {
    this.minusOne.emit();
  }

  minusTwoClick(): void {
    this.minusTwo.emit();
  }

}
