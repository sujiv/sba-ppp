import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBussinesEntityTypeChange(e) {
    // this.searchParams.plans = e;
    console.log('selected plan is ' + e);
    // this.Choose_Dental_Plan = e;
  }
}
