import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadMakeAction, LoadModelAction, LoadTrimAction, LoadYearAction } from '../store/actions/tiredata.action';
import { AppState } from '../store/modals/app-state.model';

@Component({
  selector: 'app-tire',
  templateUrl: './tire.component.html',
  styleUrls: ['./tire.component.scss']
})
export class TireComponent implements OnInit {

  yearList: any;
  makeList:any;
  modelList:any;
  yearSelected:string='';
  makeSelected:string='';
  modelSelected:string='';
  trimSelected:string='';
  trimList:any
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  
  

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   this.store.select(store => store.shopping.yearList).subscribe(data=>this.yearList=data);
   this.store.select(store => store.shopping.makeList).subscribe(data=>this.makeList=data);
   this.store.select(store => store.shopping.modelList).subscribe(data=>this.modelList=data);
   this.store.select(store => store.shopping.trim).subscribe(data=>this.trimList=data);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadYearAction());
  }
  onYearChange(event){
    console.log(event.value);
    this.yearSelected=event.value;
    this.store.dispatch(new LoadMakeAction({year:event.value}));
  }
  onMakeChange(event){
    console.log(event.value);
    this.makeSelected=event.value;
    this.store.dispatch(new LoadModelAction({year:this.yearSelected,make:this.makeSelected}));
  }
  onModelChange(event){
    console.log(event.value);
    this.modelSelected=event.value;
    this.store.dispatch(new LoadTrimAction({year:this.yearSelected,make:this.makeSelected,model:this.modelSelected}));
  }

  onTrimChange(event){
    console.log(event.value);
    this.trimSelected=event.value;

  }
}
