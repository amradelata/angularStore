import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string
  password: number
  onSubmit() {
    console.log(this.email)
    console.log(this.password)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
