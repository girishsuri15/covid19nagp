
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/Operators';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class CovidIndiaDataService{
    url = "https://api.covid19india.org/data.json";
    constructor(private http: HttpClient){}
    getCovidIndia(): Observable<any[]> {
        return this.http.get<any[]>(this.url)
        .pipe(            
            catchError((error: Response | any) => {
                console.error(error.message || error);
                return Observable.throw(error.message || error)}
            )
            
        )
    }
}