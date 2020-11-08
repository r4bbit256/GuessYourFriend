import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiRoutes } from './shared/utilities/api-routes';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isAuthenticated = false;

  constructor(private authService: AuthService,
              private router: Router) { }


  ngOnInit(): void {
    this.isAuthenticated = this.isUserAuthenticated();
  }

  isUserAuthenticated(): boolean {
     if (this.authService.isLoggedIn() === null) {
       return false;
     } else {
      return true;
    }
  }

  logout(): void {
    this.authService.clearCredentials();
    this.router.navigate([ApiRoutes.Default]);
  }
}
