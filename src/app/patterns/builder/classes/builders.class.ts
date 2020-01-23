import { Builder } from '../interfaces/builder.interface';

export class UsersBuilder implements Builder {
  private users: any;

  constructor() {
    this.reset();
  }

  private reset() {
    this.users = [];
  }

  public getData(payload) {
    const users = [...payload.data];
    this.users = users.slice();
  }

  public addFullName() {
    this.users.forEach(user => {
        user.fullName = user.name + ' ' + user.surname;
    });
  }

  public addIsUserAdult() {
    this.users.forEach(user => {
        user.isAdult = user.age > 18;
    });
  }

  public getUsers(): any {
    const users = this.users.slice();
    this.reset();
    return users;
  }
}
