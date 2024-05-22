import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private baseUrl: string = 'http://localhost:3000/api'

  private httpClient = inject(HttpClient)

  getTrabajos() {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/trabajo`)
    )
  }

  getStudies() {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/studies`)
    )
  }

  getProjects() {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/projects`)
    )
  }





}
