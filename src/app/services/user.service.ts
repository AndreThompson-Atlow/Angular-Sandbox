import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Jimmy',
        lastName: 'Kudo',
        email: 'detectiveoftheeast@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        extended: false,
      },
      {
        firstName: 'Miles',
        lastName: 'Edgeworth',
        email: 'aceprosecutor@outlook.com',
        registered: new Date('07/11/2019 06:20:00'),
        extended: false,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    user.isActive = true;
    user.registered = new Date();
    this.users.unshift(user);
  }
}
