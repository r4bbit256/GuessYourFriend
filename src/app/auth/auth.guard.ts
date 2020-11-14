import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { ApiRoutes } from '../shared/utilities/api-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  isLoggedIn = false;

  constructor(private authService: AuthService,
              private router: Router) {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;

    return this.router.parseUrl(`/${ApiRoutes.Auth}/${ApiRoutes.Login}`);
  }
}
