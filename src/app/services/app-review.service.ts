import { Injectable } from '@angular/core';
import {AppDetails} from "../models/AppDetails";

@Injectable({
  providedIn: 'root'
})
export class AppReviewService {

  constructor() { }

  public async getAppDetails(id: number): Promise<AppDetails> {
    console.log('searcing for application:' + id);
    const appDetails = new AppDetails();
    appDetails.legalName = 'Jody Scott Harrison' ;
    appDetails.primaryContact = '4700 LAS VEGAS BLVD NELLIS AFB NV 89191' ;
    appDetails.businessPhone = '7026533148' ;
    appDetails.TIN_EIN_SIN = 'XXX-XX-1243' ;
    appDetails.accounts = '123456789' ;
    appDetails.email = 'jody.harrison@gmail.com' ;
    appDetails.FTE_Emp12MnthsPrior = { fieldName: 'FTE employees for  12 months prior to loan date', amount: 120, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.empWages = { fieldName: 'Employee Wages', amount: 100000, source: 'DocX', autoVerified: 'N', comments: 'Comment1' };
    appDetails.lessOwnerWagesExcess100K = { fieldName: 'Less employee/owner wages in excess of 100K', amount: 5000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.lessQualifiedSickLeaveWagesUnderFFCRA = { fieldName: 'Less qualified sick leave wages covered under FFCRA', amount: 2000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.lessQualifiedFamilyLeaveWagesUnderFFCRA = { fieldName: 'Less qualified family leave wages covered under FFCRA', amount: 4000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.groupHealthCareBenefitsInsPremium = { fieldName: 'Group health care benefits - insurance premiums', amount: 3000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.paymentRetirementBen = { fieldName: 'Payment of retirement benefit', amount: 5000, source: 'DocX', autoVerified: 'N', comments: 'Comment1' };
    appDetails.paymentEmployerPayrollTaxesStateLocal = { fieldName: 'Payment of employer payroll taxes - State & local', amount: 2300, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.contractLabor = { fieldName: 'Contract labor ', amount: 120000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.lessIndividualContractLaborExcess100K = { fieldName: 'Less individual contract labor in excess of 100K', amount: 21345, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.prior12MnthsCumQualifyingPayrollCost = { fieldName: 'Prior 12 months cumulative qualifying payroll cost', amount: 234555, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.avgMonthlyPayrollcosts = { fieldName: 'Average monthly payroll costs', amount: 1230000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.multiplier2dot5 = { fieldName: 'x 2.5', amount: 3075000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.EDIL_ObtainedFrmJan31ToBeRefinanced = { fieldName: 'EDIL obtained from January 31, 2020 to be refinanced under program', amount: 500000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };
    appDetails.PPP_LoadAmntLesserOfCalcOr10Mil = { fieldName: 'PPP Loan amount, lesser of calculation or $10 million', amount: 2575000, source: 'DocX', autoVerified: 'Y', comments: 'Comment1' };

    return appDetails;
  }
}
