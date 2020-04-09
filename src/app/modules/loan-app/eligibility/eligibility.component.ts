import { Component, OnInit } from '@angular/core';

import { LoanApplicationService } from 'src/app/services/loan-application.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  checkbox1:string; checkbox2:string; checkbox3:string;
  checkbox4:string; checkbox5:string; checkbox6:string;

  constructor(private loanApplicationService: LoanApplicationService, private router:Router) { }

  ngOnInit(): void {
  }
  applyEligibility() {

    if(this.checkbox1==='Yes') {
      this.loanApplicationService.userInputsDataModel.eligibilityLine1 = true;
    }
    if(this.checkbox2==='Yes') {
      this.loanApplicationService.userInputsDataModel.eligibilityLine2 = true;
    }
    if(this.checkbox3==='Yes') {
      this.loanApplicationService.userInputsDataModel.eligibilityLine3 = true;
    }
    if(this.checkbox4==='Yes') {
      this.loanApplicationService.userInputsDataModel.eligibilityLine4 = true;
    }
    if(this.checkbox5==='Yes') {
      this.loanApplicationService.userInputsDataModel.eligibilityLine5 = true;
    }
    if(this.checkbox6==='Yes') {
      this.loanApplicationService.userInputsDataModel.eligibilityLine6 = true;
    }

    this.router.navigate(['/apply']);

  }

}
