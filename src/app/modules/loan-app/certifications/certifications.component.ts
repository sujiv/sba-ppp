import { Component, OnInit } from '@angular/core';

import { LoanApplicationService } from 'src/app/services/loan-application.service';
import { Router } from '@angular/router';
import { UserInputsDataModel } from 'src/app/models/UserInputsDataModel';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifyLine1: boolean;
  certifyLine2: boolean;
  certifyLine3: boolean;
  certifyLine4: boolean;
  certifyLine5: boolean;
  certifyLine6: boolean;
  certifyLine7: boolean;



  constructor(private loanApplicationService: LoanApplicationService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.loanApplicationService.userInputsDataModel);
  }
  applyCertification() {

    this.loanApplicationService.userInputsDataModel.certifyLine1 = this.certifyLine1;
    this.loanApplicationService.userInputsDataModel.certifyLine2 = this.certifyLine2;
    this.loanApplicationService.userInputsDataModel.certifyLine3 = this.certifyLine3;
    this.loanApplicationService.userInputsDataModel.certifyLine4 = this.certifyLine4;
    this.loanApplicationService.userInputsDataModel.certifyLine5 = this.certifyLine5;
    this.loanApplicationService.userInputsDataModel.certifyLine6 = this.certifyLine6;
    this.loanApplicationService.userInputsDataModel.certifyLine7 = this.certifyLine7;

    this.router.navigate(['/eligibility']);
  }

}
