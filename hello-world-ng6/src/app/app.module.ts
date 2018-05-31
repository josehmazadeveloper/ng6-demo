import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { KHttpInterceptor, KCommonModule, KLayoutModule, KPanelMenuModule, KFooterModule, KFieldsetModule } from '@kruger-angular/kng-components';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import localeEs from "@angular/common/locales/es-EC";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@app/components/home/home.component';
import { LoginComponent } from '@app/components/login/login.component';
import { HeaderComponent } from '@app/components/home/components/header/header.component';
import { SearchComponent } from '@app/components/home/components/header/components/search/search.component';
import { FilterSearchComponent } from '@app/components/home/components/header/components/search/components/filter-search/filter-search.component';
import { KComposedSidebarModule } from '@app/components/k-composed-sidebar/k-composed-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    FilterSearchComponent
  ],
  imports: [
    KComposedSidebarModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    KCommonModule.forRoot({ appVersion: '1.1.3', companyId: 1, systemId: 'PUBLIX', profileId: '52', userId: 'FRM0' }),
    KLayoutModule,
    KPanelMenuModule,
    KFooterModule,
    KFieldsetModule,
    BsDropdownModule.forRoot(),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
