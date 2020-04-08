import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  //customer:Customer = new Customer();
  submitted = false;
  selectedFile: File = null;

  constructor() { }

  ngOnInit(): void {
  }
  applyLoan() {
    //Upload the File here using Http Client
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    //Also can send binary data this.selectedFile If the API End point accept binary data
  //  this.http.post('url', fd).subscribe(event=>{
  //    if(event.type===HttpEventType.UploadProgress) {
  //      console.log('Upload Progress: '+ Math.round(event.loaded/event.total*100)+'%')
  //    }
  //    else if (event.type===HttpEventType.Response) {
  //      console.log(event);
  //    }
  //  });
    //this.customerService.addCustomer(this.customer).subscribe();
    this.submitted = true;
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile.name)

  }

}
