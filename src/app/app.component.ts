import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService) { }
  title = 'testAuthGoogle';
}
