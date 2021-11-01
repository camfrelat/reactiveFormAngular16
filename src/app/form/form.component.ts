import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../shared/email-validator';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  users: User[];

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    add: [''],
    credentials: this.formBuilder.group({
      pass: ['', Validators.required],
      mail: ['', [Validators.required, emailValidator]],
    }),
  });

  constructor(private formBuilder: FormBuilder) {
    this.users = new Array();
  }

  onSubmit(): void {
    console.log(this.userForm.value);
    alert('Le formulaire est valide');
  }

  ngOnInit(): void {}
}
