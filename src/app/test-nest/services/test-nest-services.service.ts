import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestNestServicesService {

  constructor(private http: HttpClient) { }
  test() {
    this.http.get('http://localhost:3000/categ/test').subscribe();
  }
}
