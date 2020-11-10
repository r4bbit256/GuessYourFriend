import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiRoutes } from './shared/utilities/api-routes';
import { AuthService } from './services/auth/auth.service';
import { AccountService } from './services/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isAuthenticated = false;

  constructor(private authService: AuthService,
              private accountService: AccountService,
              private router: Router) { }


  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate([ApiRoutes.Default]);
  }
}
