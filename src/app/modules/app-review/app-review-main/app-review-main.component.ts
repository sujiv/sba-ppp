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
  // actionList: string[] = ['Approve', 'AddInfo', 'Deny', 'Comment'];
  actionList: Map<string, string>;
  submitted = false;
  comments = '';
  response: any;

  constructor(private appReviewService: AppReviewService, private route: ActivatedRoute) {
    this.actionList = new Map<string, string>();
    this.actionList.set('approve', 'Approve');
    this.actionList.set('addInfo', 'Additional Information');
    this.actionList.set('deny', 'Deny');
    this.actionList.set('comment', 'Comment');
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.appReviewService.getAppDetailsOb(p.appId).subscribe(ad => {
        this.appDetails = ad;
        this.comments = this.appDetails.applicationComments;
        // this.commented = this.appDetails.applicationComments !== undefined && this.appDetails.applicationComments !== null && this.appDetails.applicationComments.length > 0;
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
        this.actionList.set('approve', 'Approve');
        this.actionList.set('addInfo', 'Additional Information');
        this.actionList.set('deny', 'Deny');
        this.actionList.set('comment', 'Comment');
      });
    });
  }

  action(cmd: string, comment: string) {
    console.log(cmd + ': ' + comment);
    this.appReviewService.reviewApplication(this.appDetails.userInputId, cmd, comment).subscribe(res => {
      console.log(res);
      this.response = res;
    });
    this.submitted = true;
  }
}
