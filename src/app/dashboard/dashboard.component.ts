import { Component, OnInit } from '@angular/core';
import { StateRegionService } from '../core/service/covidData';
import { CovidIndiaDataService } from '../core/service/covidTotalData';
import { ICountry } from '../core/model/ICountry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CountryData: ICountry [] = [];
  District: any [];
  public selectedState: string;
  constructor(private stateRegionService: StateRegionService,private covidIndiaDataService:CovidIndiaDataService) { }

  ngOnInit(): void {
    this.fetchCovidData();
  }
  
  public selectState(state){
    this.stateRegionService.getStateWithObservable().subscribe(
      res => { 
        let StateData:any[]=res;
          if (StateData.hasOwnProperty(state)){
          let DistrictData:any []= StateData[state.trim()].districtData;
          this.District = Object.entries(DistrictData);
          console.log(this.District)
      }
      else{
        let data:any[]=[["No Data "]]
        this.District = data;
      }
     }
    )
    if(this.selectedState === state){
      this.selectedState="TT";
    }
    else
    this.selectedState = state;
  }
  private fetchCovidData(){
    this.covidIndiaDataService.getCovidIndia().subscribe(res=>{
      this.CountryData= res['statewise'];
      console.log(this.CountryData)
   

    })
    
   };

}
