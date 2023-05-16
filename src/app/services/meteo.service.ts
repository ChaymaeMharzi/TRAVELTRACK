import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

constructor(private httpClient:HttpClient) { }

  public getMeteoData(city:string){
      return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=b1e297c4f46b545f32b249bb21747d21")
  }}
