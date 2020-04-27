import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopaggefoundComponent } from './nopaggefound/nopaggefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopaggefoundComponent,
    SidebarComponent
   ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopaggefoundComponent,
    SidebarComponent
    ]
})
export class SharedModule { }
