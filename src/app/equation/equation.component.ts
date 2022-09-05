import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
form = new FormGroup({
  a: new FormControl(this.randomnumber()),
  b: new FormControl(this.randomnumber()),
  answer : new FormControl('')
})
  constructor() { }

  ngOnInit(): void {
  }
  randomnumber(){
    return Math.floor(Math.random() * 20)
  }
}
