import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-app-list-view',
  templateUrl: './app-list-view.component.html',
  styleUrls: ['./app-list-view.component.css']
})
export class AppListViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'tin', 'account', 'irs941','payrollCostReport','payrollHeadcountReport','healthcareCostReport','status'];
  dataSource = new MatTableDataSource<PPPApplicationList>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}


export interface PPPApplicationList {
  name: string;
  tin: string;
  account: string;
  irs941: string;
  payrollCostReport:string;
  payrollHeadcountReport:string;
  healthcareCostReport:string;
  status:string;
}

const ELEMENT_DATA: PPPApplicationList[] = [
  {name: 'Sujiv Shresta', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Wuletaw Tefera', tin: '9354647747', account: '1288288', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Under Review'},
  {name: 'Amanuel Teklemariam', tin: '35366484', account: '27373738', irs941: 'No', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Ogabek Yoldashov', tin: '123442525', account: '36477883', irs941: 'Yes', payrollCostReport:'No', payrollHeadcountReport:'No', healthcareCostReport:'Yes', status:'Approved'},
  {name: 'Sri Harsha Kurati', tin: '6589473736', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'David Brown', tin: '142373883', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Approved'},
  {name: 'Zeleke Gessese', tin: '182882828', account: '72828288', irs941: 'Yes', payrollCostReport:'No', payrollHeadcountReport:'Yes', healthcareCostReport:'No', status:'Submitted'},
  {name: 'Emanuel Cadet', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'No', healthcareCostReport:'Yes', status:'Denied'},
  {name: 'Abebe Mekuria', tin: '1035636774', account: '293993939', irs941: 'No', payrollCostReport:'No', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Denied'},
  {name: 'Jean De Dieu', tin: '17277272288', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: "Nicole Stevenson", tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'No', status:'Request Additional Information'},
  {name: 'Andrey Pullok', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'No', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Bishwas Niraula', tin: '1035636774', account: '2388399', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Denied'},
  {name: 'Vandan Manni Kumar', tin: '1035636774', account: '36477883', irs941: 'No', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'No', status:'Request Additional Information'},
  {name: 'Ankh Bold', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Arnold Shwazinger', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Jean Claude VanDamme', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Luis Suarez', tin: '1035636774', account: '36477883', irs941: 'No', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'No', status:'Under Review'},
  {name: 'Steven Gerrard', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'No', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
  {name: 'Rafael Benitez', tin: '1035636774', account: '36477883', irs941: 'Yes', payrollCostReport:'Yes', payrollHeadcountReport:'Yes', healthcareCostReport:'Yes', status:'Submitted'},
];
