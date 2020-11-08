import { User } from './user';

export class AuthorizationToken {
  public token: string;
  public expirationDate: string;
  public user: User;
}
