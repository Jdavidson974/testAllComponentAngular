import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-kqh08sd57e0x6q7d.us.auth0.com',
      clientId: '8wTd1LrhVay3MCcirVotXLV18bAUYPYk'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
