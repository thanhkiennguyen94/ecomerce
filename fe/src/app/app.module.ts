import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VexModule } from "../@vex/vex.module";
import { HttpClientModule } from "@angular/common/http";
import { CustomLayoutModule } from "./custom-layout/custom-layout.module";
import { RouterModule, Routes } from "@angular/router";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";
import { BreadcrumbsModule } from "../@vex/components/breadcrumbs/breadcrumbs.module";
// material
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageLayoutModule } from "../@vex/components/page-layout/page-layout.module";
import { IconModule } from "@visurel/iconify-angular";
import { MatInputModule } from "@angular/material/input";
import { AuthGuard } from "./main/auth/auth.guard";
import { httpInterceptorProviders } from "./commons/http.interceptor";
const appRoutes: Routes = [
  {
    path: "",
    component: CustomLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        redirectTo: "/",
      },
      {
        path: "",
        loadChildren: () =>
          import("./main/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "apps",
        loadChildren: () =>
          import("./main/apps/apps.module").then((m) => m.AppsModule),
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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // Vex
    VexModule,
    CustomLayoutModule,
    // Material moment date module
    MatMomentDateModule,
    // Material
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule,
    IconModule,
    MatInputModule,
    BreadcrumbsModule,
  ],
  providers: [AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
