import { User } from './user';

export class AuthorizationToken {
  public token: string;
  public expirationDate: number;
  public user: User;
}
