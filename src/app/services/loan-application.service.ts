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
  uploadDocuments(): Observable<string> {
    const  formData: FormData = new FormData();
    formData.append('document', this.uploadFiles.irs941Files, this.uploadFiles.irs941Files.name);
    formData.append('document', this.uploadFiles.healthcareCostsFile, this.uploadFiles.healthcareCostsFile.name);
    formData.append('document', this.uploadFiles.grossPayrollFile, this.uploadFiles.grossPayrollFile.name);

    return this.httpClient.post<string>(this.hostUrl, formData);

  }

}
