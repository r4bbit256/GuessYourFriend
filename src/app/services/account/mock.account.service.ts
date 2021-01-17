import { BehaviorSubject } from "rxjs";

export class MockAccountService {
  userName = new BehaviorSubject('Guest');

  logout(): void {
    this.clearCredentials();
  }

  private clearCredentials(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expirationDate');
  }
}
