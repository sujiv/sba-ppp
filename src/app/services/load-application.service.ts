import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoanFormDataModel} from '../models/loan-form-data-model';

@Injectable({
  providedIn: 'root'
})
export class LoadApplicationService {

  hostUrl: any = `http://localhost:8080/sba/loanApplication`;
  // loanFormDataModel: LoanFormDataModel;

  constructor( private  httpClient: HttpClient) { }

  public string; saveLoanApplicationForm(loanApplication: LoanFormDataModel) {
    return this.httpClient.post(this.hostUrl, loanApplication);
  }
}
