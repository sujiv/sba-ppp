import { Component, OnInit } from '@angular/core';
import { UserInputsDataModel } from 'src/app/models/UserInputsDataModel ';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  userInputsDataModel:UserInputsDataModel;

  constructor() { }

  ngOnInit(): void {
  }
  applyCertification() {

  }

}
