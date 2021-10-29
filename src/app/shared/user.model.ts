import { FormControl, FormGroup } from '@angular/forms';

export class User {
  username: FormGroup;
  email: FormControl;
  password: FormControl;
  address: FormControl;

  constructor(
    username: FormGroup,
    email: FormControl,
    password: FormControl,
    address: FormControl
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.address = address;
  }
}
