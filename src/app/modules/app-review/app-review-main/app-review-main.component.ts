import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material/table';
import {AppDetails} from '../../../models/AppDetails';
import {AppReviewService} from '../../../services/app-review.service';
import {RowItem} from '../../../models/RowItem';

@Component({
  selector: 'app-app-review-main',
  templateUrl: './app-review-main.component.html',
  styleUrls: ['./app-review-main.component.css']
})
export class AppReviewMainComponent implements OnInit {
  appDetails: AppDetails;
  displayedColumns = ['', '', 'Source', 'Auto Verified', 'Comments'];
  // dataSource: MatTableDataSource<RowItem>;

  constructor(appReviewService: AppReviewService) {
    appReviewService.getAppDetails(0).then( details => this.appDetails = details);
  }

  ngOnInit(): void {
  }

  action(cmd: string) {
    console.log(cmd);
  }
}
