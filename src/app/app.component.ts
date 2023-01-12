import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '@eartho/one-client-angular';
import { catchError, tap } from 'rxjs';
import { TestNestServicesService } from './test-nest/services/test-nest-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, private testService: TestNestServicesService) { }
  title = 'testAuthGoogle';
  ngOnInit() {
  }
  loginWithRedirect() {
    // si on a le token on fait qlq chose sinon
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
    } else {
      // on fait la connection
      this.auth.connectWithPopup({ access_id: "p9GGKAylYlcgij2oAqwi" }).pipe(
        tap(
          result => {
            // dans le callback on recupere le token si il y en an un et on le met dans le local storage
            this.auth.getIdToken().pipe(
              tap(
                token => {
                  if (token) {
                    localStorage.setItem('token', token);
                  }
                }
              ),
            ).subscribe();
          }
        )
      ).subscribe();
    }
  }
  showToken() {
    this.testService.test();
  }
}
