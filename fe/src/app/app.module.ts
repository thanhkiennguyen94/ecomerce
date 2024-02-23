import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VexModule } from "../@vex/vex.module";
import { HttpClientModule } from "@angular/common/http";
import { CustomLayoutModule } from "./custom-layout/custom-layout.module";
import { RouterModule, Routes } from "@angular/router";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";

const appRoutes: Routes = [
  {
    path: "",
    component: CustomLayoutComponent,
    children: [
      {
        path: "dashboard",
        redirectTo: "/",
      },
      {
        path: "",
        loadChildren: () =>
          import(
            "./main/dashboard/dashboard.module"
          ).then((m) => m.DashboardModule),
      },
    ],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./main/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./main/errors/error-404/error-404.module").then(
        (m) => m.Error404Module
      ),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // Vex
    VexModule,
    CustomLayoutModule,
  ],
  // providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
