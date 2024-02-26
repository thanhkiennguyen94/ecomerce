import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
const routes = [
  {
    path: "",
  },
  {
    path: "management",
    loadChildren: () =>
      import("./management/management.module").then((m) => m.ManagementModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AppsModule {}
