import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { delay } from 'rxjs';
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
    this.form.statusChanges
    .pipe(delay(1000))
    .subscribe((Response) => {
      if (Response === 'INVALID') {
        return;
      }
      this.form.patchValue({
        a: this.randomnumber(),
          b: this.randomnumber(),
            answer: ''
      })
    })
  }
  randomnumber() {
    return Math.floor(Math.random() * 40)
  }
}