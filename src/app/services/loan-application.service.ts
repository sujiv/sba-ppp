import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppDetails} from '../models/AppDetails';
import {filterFiles} from 'tslint/lib/files/resolution';
import { UserInputsDataModel } from '../models/UserInputsDataModel';



@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  public userInputsDataModel:UserInputsDataModel = new UserInputsDataModel();


  hostUrl = `http://localhost:8080/sba/loan/upload`;

  constructor( private httpClient: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  saveLoanApplicationForm(irS941Image: File, healthcareCostsImage: File, grossPayrollImage: File, filledLoanBasicData: UserInputsDataModel) {

    const  formData: FormData = new FormData();
    formData.append('document', irS941Image);
    formData.append('document', healthcareCostsImage);
    formData.append('document', grossPayrollImage);


      let params = new HttpParams();
    // @ts-ignore
    params = params.append('formData', formData);
    // @ts-ignore
    // filledLoanBasicData.additionalInformation = '56788';
    // @ts-ignore
    params = params.append('basic', filledLoanBasicData);


    return this.httpClient.post(this.hostUrl, {params });

  }

}
