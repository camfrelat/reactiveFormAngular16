import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm = this.formBuilder.group({
    name: [''],
    add: [''],
    credentials: this.formBuilder.group({
      pass: [''],
      mail: [''],
    }),
  });

  users: User[];

  constructor(private formBuilder: FormBuilder) {
    this.users = new Array();
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }

  ngOnInit(): void {}
}
