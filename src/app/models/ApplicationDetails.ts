import {RowItem} from './RowItem';

export class ApplicationDetails {
  userInputId: number;
  legalName: string;
  primaryContact: string;
  businessPhone: string;
  TIN_EIN_SIN: string;
  accounts: string;
  email: string;
  tradeName: string;
  // tslint:disable-next-line:variable-name
  FTE_Emp12MnthsPrior: RowItem;
  empWages: RowItem;
  lessOwnerWagesExcess100K: RowItem;
  lessQualifiedSickLeaveWagesUnderFFCRA: RowItem;
  lessQualifiedFamilyLeaveWagesUnderFFCRA: RowItem;
  groupHealthCareBenefitsInsPremium: RowItem;
  paymentRetirementBen: RowItem;
  paymentEmployerPayrollTaxesStateLocal: RowItem;
  contractLabor: RowItem;
  lessIndividualContractLaborExcess100K: RowItem;
  prior12MnthsCumQualifyingPayrollCost: RowItem;
  avgMonthlyPayrollcosts: RowItem;
  multiplier2dot5: RowItem;
  // tslint:disable-next-line:variable-name
  EDIL_ObtainedFrmJan31ToBeRefinanced: RowItem;
  // tslint:disable-next-line:variable-name
  PPP_LoadAmntLesserOfCalcOr10Mil: RowItem;
  applicationComments: string;
  processedFlag: boolean;
  processStatus: string;
}
