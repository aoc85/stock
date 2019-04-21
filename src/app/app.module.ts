import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './content/index/index.component';
import { InfoComponent } from './content/info/info.component';
import { LoginComponent } from './content/login/login.component';
import { StockWatchComponent } from './content/stock-watch/stock-watch.component';
import { routingModule } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    InfoComponent,
    LoginComponent,
    StockWatchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
