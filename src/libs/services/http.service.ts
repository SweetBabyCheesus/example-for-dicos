import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { customTableData } from '../models/example.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  #defaultHeaders = new HttpHeaders();
  #httpClient = inject(HttpClient);



  public getTableData(): Observable<customTableData[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    let headers = this.#defaultHeaders;
    return this.#httpClient.get<customTableData[]>(url, { headers });
  }

  public sendFormData() {
    const url = 'https://dummyUrl';
    let headers = this.#defaultHeaders;
    return this.#httpClient.post('post', url, { headers });
  }
}
