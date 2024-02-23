import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartModule } from "../../../@vex/components/chart/chart.module";
import { MatIconModule } from "@angular/material/icon";
import { WidgetQuickLineChartModule } from "../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module";
import { WidgetQuickValueCenterModule } from "../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module";
import { WidgetQuickValueStartModule } from "../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module";
import { WidgetLargeGoalChartModule } from "../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module";
import { IconModule } from "@visurel/iconify-angular";
import { WidgetAssistantModule } from "../../../@vex/components/widgets/widget-assistant/widget-assistant.module";
import { WidgetLargeChartModule } from "../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module";
import { WidgetTableModule } from "../../../@vex/components/widgets/widget-table/widget-table.module";
import { SecondaryToolbarModule } from "../../../@vex/components/secondary-toolbar/secondary-toolbar.module";
import { BreadcrumbsModule } from "../../../@vex/components/breadcrumbs/breadcrumbs.module";
import { MatButtonModule } from "@angular/material/button";
import { PageLayoutModule } from "../../../@vex/components/page-layout/page-layout.module";
import { ContainerModule } from "../../../@vex/directives/container/container.module";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";

const routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FlexLayoutModule,
    ChartModule,
    MatIconModule,
    WidgetQuickLineChartModule,
    WidgetQuickValueCenterModule,
    WidgetQuickValueStartModule,
    WidgetLargeGoalChartModule,
    IconModule,
    WidgetAssistantModule,
    WidgetLargeChartModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    MatButtonModule,
    PageLayoutModule,
    ContainerModule,
  ],
  providers: [AuthGuard],
  exports: [DashboardComponent],
})
export class DashboardModule {}
