import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ApiRoutes } from './utilities/api-routes';
import { AuthService } from './services/auth/auth.service';
import { AccountService } from './services/account/account.service';
import { UserInterfaceResources } from './utilities/user-interface.resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  isAuthenticated = false;
  username = '';
  welcomeMessage = UserInterfaceResources.WelcomeMessageLabel;
  appNameLabel = UserInterfaceResources.AppNameLabel;
  homeMenuLabel = UserInterfaceResources.HomeMenuLabel;
  cardsMenuLabel = UserInterfaceResources.CardsMenuLabel;
  addNewCardMenuLabel = UserInterfaceResources.AddNewCardMenuLabel;
  showAllCardsMenuLabel = UserInterfaceResources.ShowAllCardsMenuLabel;
  gameMenuLabel = UserInterfaceResources.GameMenuLabel;
  playMenuLabel = UserInterfaceResources.PlayMenuLabel;
  scoresMenuLabel = UserInterfaceResources.ScoresMenuLabel;
  aboutMenuLabel = UserInterfaceResources.AboutMenuLabel;
  loginLabel = UserInterfaceResources.LoginLabel;
  registerLabel = UserInterfaceResources.RegisterLabel;
  logoutLabel = UserInterfaceResources.LogoutLabel;

  constructor(private authService: AuthService,
              private accountService: AccountService,
              private router: Router) { }


  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
    });

    this.accountService.userName.subscribe(user => {
      this.username = user;
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate([ApiRoutes.Default]);
  }

  ngOnDestroy(): void {
    this.authService.isLoggedIn.unsubscribe();
  }
}
