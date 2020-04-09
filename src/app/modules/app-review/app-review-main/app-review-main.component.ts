import { Component, OnInit } from '@angular/core';
import {AppDetails} from '../../../models/AppDetails';
import {AppReviewService} from '../../../services/app-review.service';
import {RowItem} from '../../../models/RowItem';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {ApplicationDetails} from '../../../models/ApplicationDetails';

@Component({
  selector: 'app-app-review-main',
  templateUrl: './app-review-main.component.html',
  styleUrls: ['./app-review-main.component.css']
})
export class AppReviewMainComponent implements OnInit {
  appDetails: ApplicationDetails;
  displayedColumns = ['fields', 'amount', 'source', 'autoVerified', 'comments'];
  dataSource: MatTableDataSource<RowItem>;
  actionList: string[] = ['Approve', 'AddInfo', 'Deny', 'Comment'];
  submitted = false;

  constructor(private appReviewService: AppReviewService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      /*this.appReviewService.getAppDetails(p.appId).then(detail => {
        this.appDetails = detail;
        console.log('From caller component:');
        console.log(detail.FTE_Emp12MnthsPrior);
        this.appDetails = detail;
        this.dataSource = new MatTableDataSource<RowItem>();
        this.dataSource.data.push(detail.FTE_Emp12MnthsPrior);
        this.dataSource.data.push({
          fieldName: `Total expenditures for prior 12 months:`, amount: null, source: '', autoVerified: '', comments: ''
        });
        this.dataSource.data.push(detail.empWages);
        // this.dataSource.data.push(detail.lessOwnerWagesExcess100K);
        // this.dataSource.data.push(detail.lessQualifiedSickLeaveWagesUnderFFCRA);
        // this.dataSource.data.push(detail.lessQualifiedFamilyLeaveWagesUnderFFCRA);
        // this.dataSource.data.push(detail.groupHealthCareBenefitsInsPremium);
        // this.dataSource.data.push(detail.paymentRetirementBen);
        // this.dataSource.data.push(detail.paymentEmployerPayrollTaxesStateLocal);
        // this.dataSource.data.push(detail.contractLabor);
        // this.dataSource.data.push(detail.lessIndividualContractLaborExcess100K);
        // this.dataSource.data.push(detail.prior12MnthsCumQualifyingPayrollCost);
        // this.dataSource.data.push(detail.avgMonthlyPayrollcosts);
        // this.dataSource.data.push(detail.multiplier2dot5);
        // this.dataSource.data.push(detail.EDIL_ObtainedFrmJan31ToBeRefinanced);
        // this.dataSource.data.push(detail.PPP_LoadAmntLesserOfCalcOr10Mil);
      });
    */
      this.appReviewService.getAppDetailsOb(p.appId).subscribe(ad => {
        this.appDetails = ad;
        this.dataSource = new MatTableDataSource<RowItem>();
        this.appDetails.FTE_Emp12MnthsPrior.mark = 'N';
        this.dataSource.data.push(this.appDetails.FTE_Emp12MnthsPrior);
        this.dataSource.data.push({
          fieldName: `Total expenditures for prior 12 months:`, amount: null, source: '', autoVerified: '', comments: '', mark: 'H'
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
        console.log(ad);
      });
    });
  }

  action(cmd: string, comment: string) {
    console.log(cmd + ': ' + comment);
    this.appReviewService.reviewApplication(this.appDetails.userInputId, cmd, comment);
    this.submitted = true;
  }
}
