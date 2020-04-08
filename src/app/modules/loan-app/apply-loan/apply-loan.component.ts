import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {AppDetails} from '../../../models/AppDetails';
import {LoanApplicationService} from '../../../services/loan-application.service';
import {UserInputsDataModel} from '../../../models/user-inputs-data-model';

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
  irs941Files: File = null;
  healthcareCostsFile: File = null;
  grossPayrollFile: File = null;
  loanApplocationFormData: UserInputsDataModel;
  constructor( private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
  }
  applyLoan() {
    // Upload the File here using Http Client
    // const fd = new FormData();
    // fd.append('irs941', this.selectedFile, this.selectedFile.name);
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

    // ================================

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
    // files.append('irs941', this.selectedFile);
    // files.append('healthcare', this.selectedFile);
    // files.append('gross_payroll', this.selectedFile);

    // tslint:disable-next-line:max-line-length
    // this.loanApplocationFormData.addInfo = 'is is working file';
    this.loanApplicationService.saveLoanApplicationForm(this.selectedFile, this.selectedFile, this.selectedFile, this.loanApplocationFormData)
      .subscribe(resp => {
        console.log('========data after rest ============' + resp);
      });
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

    console.log(this.selectedFile.name);

  }


}
