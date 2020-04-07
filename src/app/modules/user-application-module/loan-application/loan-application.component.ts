import { Component, OnInit } from '@angular/core';
import {LoadApplicationService} from '../../../services/load-application.service';
import {LoanFormDataModel} from '../../../models/loan-form-data-model';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
  additionalInforamtion = ' ';
  loanApplication: LoanFormDataModel;

  constructor(private loadApplicationService: LoadApplicationService) { }

  title = 'ImageUploaderFrontEnd';

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }


  ngOnInit(): void {
  }

  onBussinesEntityTypeChange(e) {
    // this.searchParams.plans = e;
    this.loanApplication.selecteedBussinesEntityType = e;
    console.log('selected plan is ' + e);
    // this.Choose_Dental_Plan = e;
  }

  uploadQuerterlyIRS941() {

  }

  uplaodHealthcareCosts() {

  }

  uploadGrossPayroll() {

  }

  submitLoaapplicationForm() {


  }

// This part is for uploading
  onUpload() {

    const uploadIRS941Image = new FormData();
    uploadIRS941Image.append('myFile', this.selectedFile, this.selectedFile.name);
    this.loanApplication.IRS941Image = uploadIRS941Image;


    this.loadApplicationService.saveLoanApplicationForm(this.loanApplication)
      .subscribe(
        res => {console.log(res);
                this.receivedImageData = res;
                this.base64Data = this.receivedImageData.pic;
                this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
        err => console.log('Error Occured duringng saving: ' + err)
      );

  }

  onAttestChanged(ch: boolean) {
    if (ch) {
      this.loanApplication.attest = ch;
    } else
      {  alert('please  con firme your input by ticking the attestion checkbox !!! '); }
  }
}
