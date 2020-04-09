import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppDetails} from '../models/AppDetails';
import {filterFiles} from 'tslint/lib/files/resolution';
import { UserInputsDataModel } from '../models/UserInputsDataModel';
import { UploadFiles } from '../models/UploadFiles';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  public userInputsDataModel:UserInputsDataModel = new UserInputsDataModel();
  public uploadFiles: UploadFiles = new UploadFiles();


  hostUrl = `http://localhost:8080/sba/loan/upload`;
  //localhost:8080/sba/loan/upload/basicdata

  constructor( private httpClient: HttpClient, private router:Router) { }

  saveFormData(): Observable<string> {

    console.log("Inside Service");

    console.log(this.userInputsDataModel);

   return this.httpClient.post<string>(this.hostUrl+"/basicdata", this.userInputsDataModel);
  }


  // tslint:disable-next-line:max-line-length
  saveLoanApplicationForm(irS941Image: File, healthcareCostsImage: File, grossPayrollImage: File) {
    const  formData: FormData = new FormData();
    formData.append('document', irS941Image, irS941Image.name);
    formData.append('document', healthcareCostsImage, healthcareCostsImage.name);
    formData.append('document', grossPayrollImage, grossPayrollImage.name);

    return this.httpClient.post(this.hostUrl, formData);

  }

}
