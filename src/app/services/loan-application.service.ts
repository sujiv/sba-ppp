import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppDetails} from '../models/AppDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  hostUrl = `http://localhost:8080/sba/loan/upload`;

  constructor( private httpClient: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  saveLoanApplicationForm(irS941Image: File, healthcareCostsImage: File, grossPayrollImage: File, filledLoanBasicData: AppDetails) {
    // tslint:disable-next-line:max-line-length

    const fd1 = new FormData();
    fd1.append('irs941', irS941Image, irS941Image.name);

    const fd2 = new FormData();
    fd2.append('healthcare', healthcareCostsImage, healthcareCostsImage.name);

    const fd3 = new FormData();
    fd3.append('gross_payroll', grossPayrollImage, grossPayrollImage.name);

    // @ts-ignore
    return this.httpClient.post(this.hostUrl , fd1, fd2);
  }
}
