import { Action } from '@ngrx/store';
//import { ShoppingItem } from '../models/shopping-item.model';

export enum TireActionTypes {
  LOAD_YEAR = '[YEAR] Load Year',
  LOAD_YEAR_SUCCESS = '[YEAR] Load Year Success',
  LOAD_YEAR_FAILURE = '[YEAR] Load Year Failure',


  LOAD_MAKE = '[MAKE] Load Make',
  LOAD_MAKE_SUCCESS = '[MAKE] Load Make Success',
  LOAD_MAKE_FAILURE = '[MAKE] Load Make Failure',

  LOAD_MODEL = '[MODEL] Load Model',
  LOAD_MODEL_SUCCESS = '[MODEL] Load Model Success',
  LOAD_MODEL_FAILURE = '[MODEL] Load Model Failure',


  LOAD_TRIM = '[TRIM] Load Trim',
  LOAD_TRIM_SUCCESS = '[TRIM] Load Trim Success',
  LOAD_TRIM_FAILURE = '[TRIM] Load Trim Failure',
  
}

export class LoadYearAction implements Action {
  readonly type = TireActionTypes.LOAD_YEAR
}
export class LoadYearSuccessAction implements Action {
  readonly type = TireActionTypes.LOAD_YEAR_SUCCESS

  constructor(public payload: any) {}

}
export class LoadYearFailureAction implements Action {
  readonly type = TireActionTypes.LOAD_YEAR_FAILURE
  
  constructor(public payload: string) {}
}

export class LoadMakeAction implements Action {
  readonly type =TireActionTypes.LOAD_MAKE
  constructor(public payload: any) {}

}
export class LoadMakeSuccessAction implements Action {
  readonly type = TireActionTypes.LOAD_MAKE_SUCCESS

  constructor(public payload:any) {}
}
export class LoadMakeFailureAction implements Action {
  readonly type = TireActionTypes.LOAD_MAKE_FAILURE

  constructor(public payload: Error) { }
}

export class LoadModelAction implements Action {
  readonly type = TireActionTypes.LOAD_MODEL
  constructor(public payload: any) {}
}
export class LoadModelSuccessAction implements Action {
  readonly type = TireActionTypes.LOAD_MODEL_SUCCESS
  constructor(public payload: any) {}
}
export class LoadModelFailureAction implements Action {
  readonly type = TireActionTypes.LOAD_MODEL_FAILURE
  constructor(public payload: string) { }
}
export class LoadTrimAction implements Action {
    readonly type = TireActionTypes.LOAD_TRIM
    constructor(public payload: any) {}
  }
  export class LoadTrimSuccessAction implements Action {
    readonly type = TireActionTypes.LOAD_TRIM_SUCCESS
    constructor(public payload: any) {}
  }
  export class LoadTrimFailureAction implements Action {
    readonly type = TireActionTypes.LOAD_TRIM_FAILURE
    constructor(public payload: string) { }
  }

export type TireAction = LoadYearAction |
  LoadYearSuccessAction |LoadYearFailureAction | LoadMakeAction|LoadMakeSuccessAction|LoadMakeFailureAction|
  LoadModelAction|LoadModelSuccessAction|LoadModelFailureAction|LoadTrimAction|LoadTrimSuccessAction|LoadTrimFailureAction