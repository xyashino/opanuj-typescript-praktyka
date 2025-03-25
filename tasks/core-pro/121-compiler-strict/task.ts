type User = {
  id: number;
  isValid?: boolean;
  name: string;
};

export class UserModule {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(userId: User['id']) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  getUser(userId: User['id']): User | null {
    for (let user of this.users) {
      if (user.id == userId) {
        return user;
      }
    }
    return null;
  }

  filterUsers(filterFn: (user: User) => { isValid?: boolean }) {
    return this.users.filter((user) => {
      let result = filterFn(user);
      return result.isValid;
    });
  }
}

const userModule = new UserModule();
export const { addUser, removeUser, getUser, filterUsers } = userModule;
