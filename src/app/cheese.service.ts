import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  constructor(private http: HttpClient) {}

  getCheeses() {
    return this.http.get<string[]>(
      'assets/cheese.json'
    );
  }
}
