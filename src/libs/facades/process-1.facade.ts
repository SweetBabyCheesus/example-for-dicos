import { Injectable, inject } from '@angular/core';
import { HttpService } from './../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class Process1Facade {
  #httpService = inject(HttpService);

  getTableData() {
    return this.#httpService.getTableData();
  }

  sendFormData() {
    this.#httpService.sendFormData().subscribe();
  }
}
