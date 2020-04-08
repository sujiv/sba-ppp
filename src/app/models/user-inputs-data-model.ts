// @ts-ignore
export class UserInputsDataModel {

  legalName: string;
  primaryContact: string;
  businessPhone: string;
  String; TIN_EIN_SIN: string;
  accounts: string;
  email: string;
  nonProfit: boolean;
  vetOrg: boolean;
  tribal: boolean;
  indCont: boolean;
  selfEmp: boolean;
  tradeName: string;
  businessEntityType: string;
  avgMonthlyPayrollcosts: number;
  numJobs: number;
  addInfo: string;
  eligibilityLine1: boolean;
  eligibilityLine2: boolean;
  eligibilityLine3: boolean;
  eligibilityLine4: boolean;
  eligibilityLine5: boolean;
  eligibilityLine6: boolean;
  certifyLine1: boolean;
  certifyLine2: boolean;
  certifyLine3: boolean;
  certifyLine4: boolean;
  certifyLine5: boolean;
  certifyLine6: boolean;
  certifyLine7: boolean;

  signatureAuthRep: boolean;
  signatureOwner: boolean;

  blobID: number;
  irs941Uploaded: boolean;
  healthcareCostsUploaded: boolean;
  grossPayrollUploaded: boolean;
  // tslint:disable-next-line:label-position
// @ts-ignore
  createdTs: Date = new Date().getDate();
}
