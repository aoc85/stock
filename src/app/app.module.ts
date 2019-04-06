import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './content/index/index.component';
import { InfoComponent } from './content/info/info.component';
import { LoginComponent } from './content/login/login.component';
import { StockWatchComponent } from './content/stock-watch/stock-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    InfoComponent,
    LoginComponent,
    StockWatchComponent,
    NgbModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
