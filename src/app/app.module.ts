import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@eartho/one-client-angular';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    NgbModule,
    AuthModule.forRoot({
      clientId: 'QuIge7dg8dvzmBtAGlzB',
      domain: '',
      enabledProviders: ['facebook', 'google',]
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
