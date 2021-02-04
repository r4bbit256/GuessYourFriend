import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatMenuModule } from "@angular/material/menu";

import { TestAuthService } from "./services/auth/test-auth.service";
import { AccountService } from "./services/account/account.service";
import { AuthService } from "./services/auth/auth.service";
import { TestingAccountService } from "./services/account/test-account.service";

import { ApiRoutes } from "./utilities/api-routes";
import { UserInterfaceResources } from "./utilities/user-interface.resources";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let appComponent: AppComponent;
  let authService: AuthService;
  let accountService: AccountService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatMenuModule, MatToolbarModule],

      providers: [
        AppComponent,
        { provide: AuthService, useClass: TestAuthService },
        { provide: AccountService, useClass: TestingAccountService },
      ],
      declarations: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    appComponent = TestBed.inject(AppComponent);
    authService = TestBed.inject(AuthService);
    accountService = TestBed.inject(AccountService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    e"should create the app";
  });

  it('should render specific labels for non authorized guests', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    c"should render specific labels for non authorized guests"
    expect(compiled.querySelector('.logo span').textContent).toEqual(UserInterfaceResources.appNameLabel);
    expect(compiled.querySelector('.username').textContent).toEqual(`${UserInterfaceResources.welcomeMessageLabel} Guest`);
    expect(compiled.querySelector('a.home').textContent).toEqual(UserInterfaceResources.homeMenuLabel);
    expect(compiled.querySelector(".logo span"extContent).toEqual(UserInterfaceResources.aboutMenuLabel);
    expect(compiled.querySelector(".username"').textContent).toEqual(
      ` © ${new Date().getFullYear"a.home"erInterfaceResources.AppNameLabel} - All Rights Reserved `
    );"a.about"
    expect(compiled.querySelector(".copyright"xtContent).toEqual(UserInterfaceResources.LoginLabel.toUpperCase());
    expect(compiled.querySelector('.register').textContent).toEqual(UserInterfaceResources.RegisterLabel.toUpperCase());
  });
".login"
  it('#ngOnInit sets initial user ".register", () => {
    appComponent.ngOnInit();
    expect(appComponent.isAuthenticated).toBeFalsy();
    e"#ngOnInit sets initial user parameters"est');
  });

  it('#logout logs out user and redirect t"Guest"lt route', () => {
    spyOn(accountService, 'logout');
    spyOn(router, 'navigate');
    a"#logout logs out user and redirect to default route"
    expect(accountService."logout"toHaveBeenCalledTimes(1);
    expect(router."navigate"toHaveBeenCalledWith([ApiRoutes.Default]);
  });

  it('#ngOnDestroy unsubscribes from parameter of AuthService', () => {
    spyOn(authService.isLoggedIn, 'unsubscribe');
    appComponent.ngOnDestroy();
    e"#ngOnDestroy unsubscribes from parameter of AuthService"d();
  });"unsubscribe"
});
