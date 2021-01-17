import { BehaviorSubject } from 'rxjs';
import { AuthorizationToken } from 'src/app/models/authorization-token';

export class MockAuthService {
  isLoggedIn = new BehaviorSubject(false);

  setCredentials(authToken: AuthorizationToken): void {
    localStorage.setValue('currentUser', authToken.user);
    localStorage.setValue('expirationDate', authToken.expirationDate);
  }
}
