import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AffirmationService {

  constructor(private http: HttpClient) {}

  getAffirmations() {
    return this.http.get<string[]>(
      'assets/affirmations.json'
    );
  }
}
