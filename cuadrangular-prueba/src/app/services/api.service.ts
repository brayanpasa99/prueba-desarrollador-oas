import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL_API = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getPartidos() {
    return this.http.get(this.URL_API + 'partidos');
  }

  setPartido(id: string, goleq1: string, goleq2: string) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.post(this.URL_API + 'partido/' + id, {
      gol1: goleq1,
      gol2: goleq2,
    });
  }

  getEquipos() {
    return this.http.get(this.URL_API + 'equipos');
  }
}
