import { Component, OnInit } from '@angular/core';
import {AppDetails} from '../../../models/AppDetails';
import {AppReviewService} from '../../../services/app-review.service';
import {RowItem} from '../../../models/RowItem';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-app-review-main',
  templateUrl: './app-review-main.component.html',
  styleUrls: ['./app-review-main.component.css']
})
export class AppReviewMainComponent implements OnInit {
  appDetails: AppDetails;
  displayedColumns = ['fieldName', 'amount', 'source', 'autoVerified', 'comments'];
  dataSource: MatTableDataSource<RowItem>;

  constructor(appReviewService: AppReviewService) {
    appReviewService.getAppDetails(0).then( details => {
      this.appDetails = details;
      this.dataSource = new MatTableDataSource<RowItem>();
      this.dataSource.data.push(this.appDetails.FTE_Emp12MnthsPrior);
      this.dataSource.data.push(this.appDetails.avgMonthlyPayrollcosts);
    });
  }

  ngOnInit(): void {
  }

  action(cmd: string) {
    console.log(cmd);
  }
}
