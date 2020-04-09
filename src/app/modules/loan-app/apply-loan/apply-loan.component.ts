import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {AppDetails} from '../../../models/AppDetails';
import {LoanApplicationService} from '../../../services/loan-application.service';
import { Router} from '@angular/router';
import { UserInputsDataModel } from 'src/app/models/UserInputsDataModel';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  // customer:Customer = new Customer();
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

  nonProfit: boolean = false;
  vetOrg: boolean = false;
  tribal: boolean = false;
  indCont: boolean = false;
  selfEmp: boolean = false;
  legalName: string;
  tradeName: string;
  TIN_EIN_SIN: string;
  businessPhone: string;
  primaryContact: string;
  email: string;
  accounts: string;
  businessEntityType: string;
  avgMonthlyPayrollcosts: number;
  numJobs: number;
  addInfo: string;

  constructor(private loanApplicationService: LoanApplicationService, private router:Router) {

  }

  ngOnInit(): void {
    console.log(this.loanApplicationService.userInputsDataModel);

  }
  applyLoan() {
    this.loanApplicationService.userInputsDataModel.nonProfit = this.nonProfit;
    this.loanApplicationService.userInputsDataModel.vetOrg = this.vetOrg;
    this.loanApplicationService.userInputsDataModel.tribal = this.tribal;
    this.loanApplicationService.userInputsDataModel.indCont = this.indCont;
    this.loanApplicationService.userInputsDataModel.selfEmp = this.selfEmp;
    this.loanApplicationService.userInputsDataModel.legalName = this.legalName;
    this.loanApplicationService.userInputsDataModel.tradeName = this.tradeName;
    this.loanApplicationService.userInputsDataModel.TIN_EIN_SIN = this.TIN_EIN_SIN;
    this.loanApplicationService.userInputsDataModel.businessPhone = this.businessPhone;
    this.loanApplicationService.userInputsDataModel.primaryContact = this.primaryContact;
    this.loanApplicationService.userInputsDataModel.email = this.email;
    this.loanApplicationService.userInputsDataModel.accounts = this.accounts;
    this.loanApplicationService.userInputsDataModel.businessEntityType = this.businessEntityType;
    this.loanApplicationService.userInputsDataModel.avgMonthlyPayrollcosts =  this.avgMonthlyPayrollcosts;
    this.loanApplicationService.userInputsDataModel.numJobs = this.numJobs;
    this.loanApplicationService.userInputsDataModel.addInfo = this.addInfo;



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
    this.loanApplicationService.saveLoanApplicationForm(this.selectedFile, this.selectedFile, this.selectedFile)
      .subscribe(resp => {
        console.log('========data after rest ============' + resp);
      });
      // this.loanApplicationService.saveLoanApplicationForm(this.selectedFile, this.selectedFile, this.selectedFile, this.loanApplocationFormData)
      // .subscribe(resp => {
      // console.log(resp); }
      // );


    this.router.navigate(['/certification']);
    // this.submitted = true;
    // this.loanApplicationService.saveLoanApplicationForm(this.irs941Files2, this.healthcareCostsFile2, this.irs941Files2)
    //   .subscribe(resp => {
    //     console.log('========data after rest ============' + resp);
    //   });
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
  onFileSelectedIII(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.grossPayrollUpload=this.selectedFile.name;
    console.log(this.selectedFile.name)

    console.log(this.selectedFile.name);
    }





  saveImages() {

    this.loanApplicationService.saveLoanApplicationForm(this.irs941Files2, this.healthcareCostsFile2, this.irs941Files2)
      .subscribe(resp => {
        console.log('========data after rest ============' + resp);
      });
  }
}
