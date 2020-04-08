import { Component, OnInit } from '@angular/core';
import {AppDetails} from '../../../models/AppDetails';
import {AppReviewService} from '../../../services/app-review.service';
import {RowItem} from '../../../models/RowItem';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-app-review-main',
  templateUrl: './app-review-main.component.html',
  styleUrls: ['./app-review-main.component.css']
})
export class AppReviewMainComponent implements OnInit {
  appDetails: AppDetails;
  displayedColumns = ['fields', 'amount', 'source', 'autoVerified', 'comments'];
  dataSource: MatTableDataSource<RowItem>;
  actionList: string[] = ['Approve', 'AddInfo', 'Deny', 'Comment'];

  constructor(private appReviewService: AppReviewService, private route: ActivatedRoute) {
    appReviewService.getAppDetails(0).then( details => {
      this.appDetails = details;
      this.dataSource = new MatTableDataSource<RowItem>();
      this.dataSource.data.push(this.appDetails.FTE_Emp12MnthsPrior);
      this.dataSource.data.push({
        fieldName: `Total expenditures for prior 12 months:`, amount: null, source: '', autoVerified: '', comments: ''
      });
      this.dataSource.data.push(this.appDetails.empWages);
      this.dataSource.data.push(this.appDetails.lessOwnerWagesExcess100K);
      this.dataSource.data.push(this.appDetails.lessQualifiedSickLeaveWagesUnderFFCRA);
      this.dataSource.data.push(this.appDetails.lessQualifiedFamilyLeaveWagesUnderFFCRA);
      this.dataSource.data.push(this.appDetails.groupHealthCareBenefitsInsPremium);
      this.dataSource.data.push(this.appDetails.paymentRetirementBen);
      this.dataSource.data.push(this.appDetails.paymentEmployerPayrollTaxesStateLocal);
      this.dataSource.data.push(this.appDetails.contractLabor);
      this.dataSource.data.push(this.appDetails.lessIndividualContractLaborExcess100K);
      this.dataSource.data.push(this.appDetails.prior12MnthsCumQualifyingPayrollCost);
      this.dataSource.data.push(this.appDetails.avgMonthlyPayrollcosts);
      this.dataSource.data.push(this.appDetails.multiplier2dot5);
      this.dataSource.data.push(this.appDetails.EDIL_ObtainedFrmJan31ToBeRefinanced);
      this.dataSource.data.push(this.appDetails.PPP_LoadAmntLesserOfCalcOr10Mil);

    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.appReviewService.getAppDetails(p.appId).then(detail => this.appDetails = detail);
    });
  }

  action(cmd: string) {
    console.log(cmd);
  }
}
