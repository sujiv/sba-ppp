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
  irs941Upload = null;
  healthCareUpload = null;
  grossPayrollUpload = null;

  irs941Files: File = null;
  healthcareCostsFile: File = null;
  grossPayrollFile: File = null;



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
    this.loanApplicationService.userInputsDataModel.TIN_EIN_SIN= this.TIN_EIN_SIN;
    this.loanApplicationService.userInputsDataModel.businessPhone = this.businessPhone;
    this.loanApplicationService.userInputsDataModel.primaryContact = this.primaryContact;
    this.loanApplicationService.userInputsDataModel.email = this.email;
    this.loanApplicationService.userInputsDataModel.accounts = this.accounts;
    this.loanApplicationService.userInputsDataModel.businessEntityType = this.businessEntityType;
    this.loanApplicationService.userInputsDataModel.avgMonthlyPayrollcosts =  this.avgMonthlyPayrollcosts;
    this.loanApplicationService.userInputsDataModel.numJobs = this.numJobs;
    this.loanApplicationService.userInputsDataModel.addInfo = this.addInfo;

    this.loanApplicationService.uploadFiles.irs941Files = this.irs941Files;
    this.loanApplicationService.uploadFiles.healthcareCostsFile = this.healthcareCostsFile;
    this.loanApplicationService.uploadFiles.grossPayrollFile = this.grossPayrollFile;


    // this.loanApplicationService.saveLoanApplicationForm(this.irs941Files, this.healthcareCostsFile, this.grossPayrollFile)
    //   .subscribe(resp => {
    //     console.log('========data after rest ============' + resp);
    //   });


    //this.router.navigate(['/certification']);
  }

  onFileSelectedI(event) {
    console.log(event);
    this.irs941Files= <File>event.target.files[0];
    this.irs941Upload=this.irs941Files.name;

    if(this.irs941Upload!==null) {
      this.loanApplicationService.userInputsDataModel.irs941Uploaded = true;
    }

  }
  onFileSelectedII(event) {

    console.log(event);
    this.healthcareCostsFile= <File>event.target.files[0];
    this.healthCareUpload=this.healthcareCostsFile.name;

    if(this.healthCareUpload!==null) {
      this.loanApplicationService.userInputsDataModel.healthcareCostsUploaded = true;
    }
  }
  onFileSelectedIII(event) {
    console.log(event);
    this.grossPayrollFile = <File>event.target.files[0];
    this.grossPayrollUpload = this.grossPayrollFile.name;
    if(this.grossPayrollUpload!==null) {
      this.loanApplicationService.userInputsDataModel.grossPayrollUploaded = true;
    }
    }


}
