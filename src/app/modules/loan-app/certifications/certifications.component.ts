import { Component, OnInit } from '@angular/core';

import { LoanApplicationService } from 'src/app/services/loan-application.service';
import { Router } from '@angular/router';
import { UserInputsDataModel } from 'src/app/models/UserInputsDataModel';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifyLine1: boolean = false;
  certifyLine2: boolean = false;
  certifyLine3: boolean = false;
  certifyLine4: boolean = false;
  certifyLine5: boolean = false;
  certifyLine6: boolean = false;
  certifyLine7: boolean = false;
  signatureAuthRep: string= null;
  signatureOwner: string = null;

  submit: string = null;
  imageId: number;




  constructor(private loanApplicationService: LoanApplicationService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.loanApplicationService.userInputsDataModel);
    console.log(this.loanApplicationService.uploadFiles);
  }
  applyCertification() {

    this.loanApplicationService.userInputsDataModel.certifyLine1 = this.certifyLine1;
    this.loanApplicationService.userInputsDataModel.certifyLine2 = this.certifyLine2;
    this.loanApplicationService.userInputsDataModel.certifyLine3 = this.certifyLine3;
    this.loanApplicationService.userInputsDataModel.certifyLine4 = this.certifyLine4;
    this.loanApplicationService.userInputsDataModel.certifyLine5 = this.certifyLine5;
    this.loanApplicationService.userInputsDataModel.certifyLine6 = this.certifyLine6;
    this.loanApplicationService.userInputsDataModel.certifyLine7 = this.certifyLine7;

    if(this.signatureAuthRep !== null) {
      this.loanApplicationService.userInputsDataModel.signatureAuthRep = true;
    }
    if(this.signatureOwner !== null) {
      this.loanApplicationService.userInputsDataModel.signatureOwner = true;
    }

    if(this.certifyLine1 && this.certifyLine2 && this.certifyLine3 &&
      this.certifyLine4 && this.certifyLine5 && this.certifyLine6 && this.certifyLine7 && this.signatureAuthRep !== null &&
      this.signatureOwner !== null) {
        this.loanApplicationService.saveFormData().subscribe(res=>{
          console.log("TTTTT"+res)
          this.loanApplicationService.uploadDocuments(res).subscribe(r=>{
            console.log(r);
          });
        });


        this.submit = "Submitted Successfully";
    }
    else {
      this.submit = "Please fill all the forms";
    }


    //this.router.navigate(['/eligibility']);
  }

}
