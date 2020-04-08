import { Component, OnInit } from '@angular/core';
import { UserInputsDataModel } from 'src/app/models/UserInputsDataModel ';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  userInputsDataModel:UserInputsDataModel;

  constructor() { }

  ngOnInit(): void {
  }
  applyEligibility() {

  }

}
