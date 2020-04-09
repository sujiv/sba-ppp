import { Injectable } from '@angular/core';
import {AppDetails} from '../models/AppDetails';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {ApplicationDetails} from '../models/ApplicationDetails';
import {Observable} from 'rxjs';
import {PPPApplicationList} from '../modules/app-list/app-list-view/app-list-view.component';

@Injectable({
  providedIn: 'root'
})
export class AppReviewService {
  // host = 'http://localhost:8080/review';
  hostUrl = `https://loan-application-service.cfapps.io/review`;
  appDetails: ApplicationDetails;
  constructor(private httpClient: HttpClient) {}

  public async getAppDetails(id: number): Promise<ApplicationDetails> {
    console.log('searcing for application:' + id);
    await this.httpClient.get<ApplicationDetails>(`${this.hostUrl}/${id}`).subscribe(j => {
      console.log('found first row:');
      console.log(j.FTE_Emp12MnthsPrior);
      // appDetails = new AppDetails();
      // appDetails.legalName = j.legalName;
      // appDetails.FTE_Emp12MnthsPrior = j.FTE_Emp12MnthsPrior;
      // appDetails.empWages = j.empWages;
      // appDetails.accounts = j.accounts;
      console.log(this.appDetails);
      return this.appDetails;
    });
    // console.log('before return:');
    // console.log(this.appDetails);
    return this.appDetails;
  }

  public getAppDetailsOb(id: number): Observable<ApplicationDetails> {
    console.log('searcing for application:' + id);
    return this.httpClient.get<ApplicationDetails>(`${this.hostUrl}/${id}`);
  }

  reviewApplication(id: number, cmd: string, cmt: string): Observable<any>{
    const param = {
      command: cmd,
      comment: cmt
    }
    return this.httpClient.post<any>(`${this.hostUrl}/${id}/?command=${cmd}&comment=${cmt}`, param);
  }

  getAllAppDetailsOb(): Observable<PPPApplicationList[]> {
    return this.httpClient.get<PPPApplicationList[]>(`${this.hostUrl}/`);
  }
}
