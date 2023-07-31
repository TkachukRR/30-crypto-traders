import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubInfoComponent } from './components/sub-info/sub-info.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { GeneralPageComponent } from './components/general-page/general-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    LogoComponent,
    SubInfoComponent,
    LoginPageComponent,
    GeneralPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
