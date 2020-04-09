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

  irs941Files: File = null;
  healthcareCostsFile: File = null;
  grossPayrollFile: File = null;

  // ==============
  irs941Files2: File = null;
  healthcareCostsFile2: File = null;
  grossPayrollFile2: File = null;
  // ===============

  loanApplocationFormData: UserInputsDataModel;
  constructor( private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
  }
  applyLoan() {
    this.submitted = true;
    this.loanApplicationService.saveLoanApplicationForm(this.irs941Files2, this.healthcareCostsFile2, this.irs941Files2)
      .subscribe(resp => {
        console.log('========data after rest ============' + resp);
      });
  }
  onFileSelectedI(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.irs941Files2= this.selectedFile;
    this.irs941Upload=this.selectedFile.name;
    console.log(this.selectedFile.name);

  }
  onFileSelectedII(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.healthcareCostsFile2= this.selectedFile;
    this.healthCareUpload=this.selectedFile.name;
    console.log(this.selectedFile.name)

    console.log(this.selectedFile.name);

  }



  onFileSelectedIII($event: Event) {
    // console.log(event);
    // this.selectedFile = <File>event.target.files[0];
    // // this.grossPayrollFile =this.selectedFile.name;
    // this.grossPayrollUpload= this.selectedFile.name;
    // this.grossPayrollFile2= this.selectedFile;
    // console.log(this.selectedFile.name);
  }

  saveImages() {

    this.loanApplicationService.saveLoanApplicationForm(this.irs941Files2, this.healthcareCostsFile2, this.irs941Files2)
      .subscribe(resp => {
        console.log('========data after rest ============' + resp);
      });
  }
}
