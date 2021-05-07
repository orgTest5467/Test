import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TireService {

 
  private BASE_URL = "https://6080be3273292b0017cdbf2a.mockapi.io/"

  constructor(private http: HttpClient) { }

  getYears() {
    return this.http.get(this.BASE_URL+'years')
  }

  getMake(year:string) {
    return this.http.get<Array<string>>(this.BASE_URL+'makes')  
  }

  getModel(make: string,year:string) {
   
    return this.http.get<Array<string>>(this.BASE_URL+'models')     
  }
  
  getTrim(make: string,year:string,model:string) {
    return this.http.get<Array<string>>(this.BASE_URL+'trim')     
  }
}
