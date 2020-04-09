import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppDetails} from '../models/AppDetails';
import {filterFiles} from 'tslint/lib/files/resolution';
import {UserInputsDataModel} from '../models/user-inputs-data-model';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  hostUrl = `http://localhost:8080/sba/loan/upload`;

  constructor( private httpClient: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  saveLoanApplicationForm(irS941Image: File, healthcareCostsImage: File, grossPayrollImage: File) {
    const  formData: FormData = new FormData();
    formData.append('document', irS941Image, irS941Image.name);
    formData.append('document', healthcareCostsImage, healthcareCostsImage.name);
    formData.append('document', grossPayrollImage, grossPayrollImage.name);

    return this.httpClient.post(this.hostUrl, formData);

  }

}
