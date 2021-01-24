import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      //Form is not valid. This shouldn't really ever occur with our current setup.
    } else {
      this.userService.addUser({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
      });
      this.clearUser();
    }
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

  clearUser() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
}
