import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Mathvalidation } from '../_validation/mathvalidation';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  form = new FormGroup({
    a: new FormControl(this.randomnumber()),
    b: new FormControl(this.randomnumber()),
    answer: new FormControl('')
  },
    Mathvalidation.additional('answer', 'a', 'b')
  )
  constructor() { }
  public get a() {
    return this.form.get('a')?.value;
  }
  public get b() {
    return this.form.get('b')?.value;
  }

  ngOnInit(): void {

  }
  randomnumber() {
    return Math.floor(Math.random() * 20)
  }
}
