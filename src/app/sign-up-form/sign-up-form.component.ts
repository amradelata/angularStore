import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { from } from 'rxjs';
import { User } from '../users'
import { UsersService } from '../users.service'


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  users: User[] = [];
  error = [];
  email: string
  password: number


  constructor(private _usersService: UsersService) { }



  ngOnInit() {

    this._usersService.getusers().subscribe(
      (data) => {
        this.users = data;

      },
      (err) => {

        this.error = err;
      }
    );
  }
  onSubmit() {
    const user = {
      // firstName: 'amr',
      // lastName: 'ata',
      // email: this.email,
      // password: this.password,
      // id: Math.floor((Math.random() * 400) + 200),

      id: Math.floor((Math.random() * 400) + 200),
      firstName: 'string',
      email: this.email,
      password: this.password,
      userphone: 4545,
      userstat: 'hkjhkj',
      Latitude: 54564,
      Longitude: 5465456
    }
    this.addUser.emit(user)
    this._usersService.addUser(user).subscribe((user) => this.users.push(user));
    console.log(this.email, this.password)
    // this.email = "",
    //   this.password = 0


  }

  // addUser(user: User) {
  //   this._usersService.addUser(user).subscribe((user) => this.users.push(user));
  // }

}
