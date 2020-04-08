import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {AppDetails} from '../../../models/AppDetails';
import {LoanApplicationService} from '../../../services/loan-application.service';
import { UserInputsDataModel } from 'src/app/models/UserInputsDataModel ';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  // customer:Customer = new Customer();
  submitted = false;
  selectedFile: File = null;
  irs941Upload = null;
  healthCareUpload = null;
  grossPayrollUpload = null;

  userInputsDataModel:UserInputsDataModel;

  constructor() { }

  ngOnInit(): void {
  }
  applyLoan() {
    // Upload the File here using Http Client
    const fd = new FormData();
    fd.append('irs941', this.selectedFile, this.selectedFile.name);
    // Also can send binary data this.selectedFile If the API End point accept binary data
  //  this.http.post('url', fd).subscribe(event=>{
  //    if(event.type===HttpEventType.UploadProgress) {
  //      console.log('Upload Progress: '+ Math.round(event.loaded/event.total*100)+'%')
  //    }
  //    else if (event.type===HttpEventType.Response) {
  //      console.log(event);
  //    }
  //  });
    // this.customerService.addCustomer(this.customer).subscribe();
    this.submitted = true;
    // const  healthCost= new FormData();
    // healthCost.append()
    // const  gParoll= new FormData();
      // this.loanApplicationService.saveLoanApplicationForm(this.selectedFile, this.selectedFile, this.selectedFile, this.loanApplocationFormData)
      // .subscribe(resp => {
      // console.log(resp); }
      // );
  }
  onFileSelectedI(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.irs941Upload=this.selectedFile.name;
    console.log(this.selectedFile.name)

  }
  onFileSelectedII(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.healthCareUpload=this.selectedFile.name;
    console.log(this.selectedFile.name)

  }
  onFileSelectedIII(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.grossPayrollUpload=this.selectedFile.name;
    console.log(this.selectedFile.name)

  }

}
