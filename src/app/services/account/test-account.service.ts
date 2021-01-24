import { BehaviorSubject } from 'rxjs';

import { User } from 'src/app/models/user';

export class TestingAccountService {
  userName = new BehaviorSubject('Guest');

  logout(): void {
    this.clearCredentials();
  }

  login(loginData: User): boolean {
    if (!(loginData.password || loginData.username)) {
      return false;
    }

    return true;
  }

  private clearCredentials(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expirationDate');
  }
}
