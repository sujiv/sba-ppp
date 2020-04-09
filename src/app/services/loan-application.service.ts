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


    // ====================

    //
    //   // Initialize Params Object
    //   let params = new HttpParams();
    // // @ts-ignore
    // params = params.append('formData', formData);
    // // @ts-ignore
    // // filledLoanBasicData.additionalInformation = '56788';
    // // @ts-ignore
    // params = params.append('basic', filledLoanBasicData);
    //
    // // ================








  //  // tslint:disable-next-line:max-line-length
   //
   //  // tslint:disable-next-line:no-unused-expression label-position
   //  // @ts-ignore
   //  // tslint:disable-next-line:label-position
   // const  files: FormData [] = new FormData();
   // const fd1 = new FormData();
   // fd1.append('irs941', irS941Image, irS941Image.name);
   //
   //  // fd1.append('healthcare', healthcareCostsImage, healthcareCostsImage.name);
   //  // fd1.append('gross_payroll', grossPayrollImage, grossPayrollImage.name);
   //
   //  //
   // const fd2 = new FormData();
   // fd2.append('healthcare', healthcareCostsImage, healthcareCostsImage.name);
   //  //
   // const fd3 = new FormData();
   // fd3.append('gross_payroll', grossPayrollImage, grossPayrollImage.name);
   //
   //
   //
   // files[0] = fd1;
   // files[1] = fd2;
   // files[2] = fd3;
    // @ts-ignore
    // return this.httpClient.post(this.hostUrl , fd3);
    // tslint:disable-next-line:max-line-length

    // const params = new HttpParams().set('irs941', irS941Image);
    // // @ts-ignore
    // params.set('healthcare', healthcareCostsImage);
    // // @ts-ignore
    // params.set('gross_payroll', grossPayrollImage)
    // // @ts-ignore
    // params.set('filledLoanBasicData', filledLoanBasicData)

    // ===================

    // for (var j = 0; j < this.uploader.queue.length; j++) {
    //   let data = new FormData();
    //   let fileItem = this.uploader.queue[j]._file;
    //   console.log(fileItem.name);
    //   data.append('file', fileItem);
    //   data.append('fileSeq', 'seq'+j);
    //   data.append( 'dataType', this.uploadForm.controls.type.value);
    //   this.uploadFile(data).subscribe(data => alert(data.message));
    // }

// const files = new  FormData();
// files.append('irs941', irS941Image);
// files.append('healthcare', healthcareCostsImage);
// files.append('gross_payroll', grossPayrollImage);

    // return this.httpClient.post(this.hostUrl, formData);


    return this.httpClient.post(this.hostUrl, formData);

  }

}
