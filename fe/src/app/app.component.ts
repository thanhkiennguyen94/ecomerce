import { Component, Inject, LOCALE_ID, Renderer2 } from "@angular/core";
import { ConfigService } from "../@vex/services/config.service";
import { Settings } from "luxon";
import { DOCUMENT } from "@angular/common";
import { Platform } from "@angular/cdk/platform";
import { NavigationService } from "../@vex/services/navigation.service";
import icLayers from "@iconify/icons-ic/twotone-layers";
import { LayoutService } from "../@vex/services/layout.service";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { SplashScreenService } from "../@vex/services/splash-screen.service";
import { Style, StyleService } from "../@vex/services/style.service";
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import { Subscription } from "rxjs";
import { EventBusService } from "./_shared/event-bus.service";
import { TokenStorageService } from "./main/auth/token-storage.service";
import { AuthJwtService } from "./main/auth/auth-jwt.service";

@Component({
  selector: "vex-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "vex";
  eventBusSub?: Subscription;
  isLoggedIn = false;
  constructor(
    private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService,
    private eventBusService: EventBusService,
    private storageService: TokenStorageService,
    private authService: AuthJwtService,
    private router: Router,
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, "is-blink");
    }

    this.navigationService.items = [
      {
        type: "link",
        label: "Dashboard",
        route: "/",
        icon: icLayers,
        routerLinkActiveOptions: { exact: true }
      },
      {
        type: "subheading",
        label: "Management",
        children: [
          {
            type: "link",
            label: "Employees",
            route: "/apps/management/employees",
            icon: icAssigment
          },
        ],
      },
    ];
  }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      // const user = this.storageService.getUser();
      // this.roles = user.roles;

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      // this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.router.navigate(["/login"]);
      this.authService.logout();
    });
  }
}
