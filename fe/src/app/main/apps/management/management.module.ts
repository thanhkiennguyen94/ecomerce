import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatOptionModule } from "@angular/material/core";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { IconModule } from "@visurel/iconify-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { PaginatorDirective } from "../../../commons/pagination.directive";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { BreadcrumbsModule } from "../../../../@vex/components/breadcrumbs/breadcrumbs.module";
// material
import { MatMomentDateModule } from "@angular/material-moment-adapter";
// multi sort
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatMultiSortModule } from "ngx-mat-multi-sort";
import { PageLayoutModule } from "../../../../@vex/components/page-layout/page-layout.module";
import { FlexLayoutModule } from "@angular/flex-layout";
// Component
import { ManagementEmployeesComponent } from "../../apps/management/employees/employees.component";

// Service
import { ManagementEmployeesService } from "../../apps/management/employees/employees.service";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

const routes: Routes = [
  {
    path: "",
  },
  {
    path: "",
    children: [
        {
          path: "employees",
          pathMatch: "full",
          component: ManagementEmployeesComponent,
        },
      ],
  },
];

@NgModule({
  declarations: [ManagementEmployeesComponent, PaginatorDirective],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FlexLayoutModule,
    // mutil sort
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    DragDropModule,
    MatMultiSortModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMomentDateModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatGridListModule,
    MatButtonToggleModule,
    PageLayoutModule,
    IconModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
  ],
  providers: [ManagementEmployeesService],
  exports: [PaginatorDirective],
})
export class ManagementModule {}
