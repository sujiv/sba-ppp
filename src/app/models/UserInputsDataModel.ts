export class UserInputsDataModel {

  legalName: string;
  primaryContact: string;
  businessPhone: string;
  TIN_EIN_SIN: string;
  accounts: string;
  email: string;
  nonProfit: boolean = false;
  vetOrg: boolean = false;
  tribal: boolean = false;
  indCont: boolean = false;
  selfEmp: boolean= false;
  tradeName: string;
  businessEntityType: string;
  avgMonthlyPayrollcosts: number;
  numJobs: number;
  addInfo: string;
  eligibilityLine1: boolean = false;
  eligibilityLine2: boolean = false;
  eligibilityLine3: boolean = false;
  eligibilityLine4: boolean = false;
  eligibilityLine5: boolean = false;
  eligibilityLine6: boolean = false;
  certifyLine1: boolean = false;
  certifyLine2: boolean = false;
  certifyLine3: boolean = false;
  certifyLine4: boolean = false;
  certifyLine5: boolean = false;
  certifyLine6: boolean = false;
  certifyLine7: boolean = false;

  signatureAuthRep: boolean = false;
  signatureOwner: boolean = false;

  blobID: number;
  irs941Uploaded: boolean = false;
  healthcareCostsUploaded: boolean = false;
  grossPayrollUploaded: boolean = false;
  // tslint:disable-next-line:label-position
// @ts-ignore
  createdTs: Date = new Date().getDate();
}
