import {RowItem} from './RowItem';

export class AppDetails {
  public legalName: any;
  public primaryContact: any;
  public businessPhone: any;
  public TIN_EIN_SIN: any;
  public accounts: any;
  public email: any;
  // tslint:disable-next-line:variable-name
  public FTE_Emp12MnthsPrior: RowItem;
  public empWages: RowItem;
  public lessOwnerWagesExcess100K: RowItem;
  public lessQualifiedSickLeaveWagesUnderFFCRA: RowItem;
  public lessQualifiedFamilyLeaveWagesUnderFFCRA: RowItem;
  public groupHealthCareBenefitsInsPremium: RowItem;
  public paymentRetirementBen: RowItem;
  public paymentEmployerPayrollTaxesStateLocal: RowItem;
  public contractLabor: RowItem;
  public lessIndividualContractLaborExcess100K: RowItem;
  public prior12MnthsCumQualifyingPayrollCost: RowItem;
  public avgMonthlyPayrollcosts: RowItem;
  public multiplier2dot5: RowItem;
  // tslint:disable-next-line:variable-name
  public EDIL_ObtainedFrmJan31ToBeRefinanced: RowItem;
  // tslint:disable-next-line:variable-name
  public PPP_LoadAmntLesserOfCalcOr10Mil: RowItem;
}
