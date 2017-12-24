import { Component, Inject } from '@angular/core';
// import { Http, URLSearchParams  } from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Logger} from '../services/logger';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'policyforms',
    templateUrl: './policyform.component.html',
   
})
export class PolicyFormComponent {
    public forms: PolicyForm[]=[];
    private _baseUrl: string= "http://localhost:8313/";
    min: number = 1;
    max:number=1;
    parameters: URLSearchParams = new URLSearchParams();
      
    //let params: URLSearchParams = new URLSearchParams();

   

    constructor(private http: HttpClient) {
    
        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(res => {
        //    this.forecasts = res.json() as IWeatherForecast[], logger.log(this.forecasts.toString());
        //});
        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //    this.forecasts = result.json() as WeatherForecast[];
        //}, error => console.error(error));
    }

    ngOnInit() {
        
    this.http.get<PolicyForm[]>(this._baseUrl + 'api/policies/forms/'+1)
        .subscribe((res)=> this.forms=res ), 
        // .subscribe(),
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            };
           
    }
}


export class PolicyForm{
    title :string;
    form:string;
    purpose:string;
    reference:string;
    sortOrder:number;
}