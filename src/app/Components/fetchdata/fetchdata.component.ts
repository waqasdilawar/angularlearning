import { Component, Inject } from '@angular/core';
// import { Http, URLSearchParams  } from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Logger} from '../services/logger';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
   
})
export class FetchDataComponent {
    public forecasts: IWeatherForecast[]=[];
    public forecast: CheckForm;
    public iForecast:IWeatherForecast;
    private _baseUrl: string= "http://localhost:51732/";
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
        
    this.http.get<IWeatherForecast[]>(this._baseUrl + 'api/SampleData/WeatherForecasts')
        .subscribe((res:IWeatherForecast[])=> {this.forecasts=res
        }), 
        // .subscribe(),
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            };
            this.forecast;
           
    }
}

class IWeatherForecast {
    dateFormatted?: string;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string;
    arr: Array<CheckForm>=new Array<CheckForm>();
}
class CheckForm{
    /**
     *
     */
    /**
     *
     */

    constructor( ) {
        
    }
    title:string;
    form:string;

}
