import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TireService } from '../../../app/tire.service';
import { LoadMakeAction, LoadMakeFailureAction, LoadMakeSuccessAction, LoadModelAction, LoadModelFailureAction, LoadModelSuccessAction, LoadTrimAction, LoadTrimFailureAction, LoadTrimSuccessAction, LoadYearAction, LoadYearFailureAction, LoadYearSuccessAction, TireActionTypes } from '../actions/tiredata.action';

@Injectable()
export class ShoppingEffects {

  @Effect() loadYear$ = this.actions$
    .pipe(
      ofType<LoadYearAction>(TireActionTypes.LOAD_YEAR),
      mergeMap(
        () => this.tireService.getYears()
          .pipe(
            map(data => {
              return new LoadYearSuccessAction(data)
            }),
            catchError(error => of(new LoadYearFailureAction(error)))
          )
      ),
  )

  
  @Effect() loadMake$ = this.actions$
    .pipe(
      ofType<LoadMakeAction>(TireActionTypes.LOAD_MAKE),
      mergeMap(
        (data) => this.tireService.getMake(data.payload.year)
          .pipe(
            map(data => {
              return new LoadMakeSuccessAction(data)
            }),
            catchError(error => of(new LoadMakeFailureAction(error)))
          )
      ),
  )
  
  @Effect() loadModel$ = this.actions$
    .pipe(
      ofType<LoadModelAction>(TireActionTypes.LOAD_MODEL),
      mergeMap(
        (data) => this.tireService.getModel(data.payload.year,data.payload.make)
          .pipe(
            map(data => {
              return new LoadModelSuccessAction(data)
            }),
            catchError(error => of(new LoadModelFailureAction(error)))
          )
      ),
  )
  
  @Effect() loadTrim$ = this.actions$
    .pipe(
      ofType<LoadTrimAction>(TireActionTypes.LOAD_TRIM),
      mergeMap(
        (data) => this.tireService.getTrim(data.payload.year,data.payload.make,data.payload.model)
          .pipe(
            map(data => {
              return new LoadTrimSuccessAction(data)
            }),
            catchError(error => of(new LoadTrimFailureAction(error)))
          )
      ),
  )
 

  constructor(
    private actions$: Actions,
    private tireService: TireService
  ) { }
}