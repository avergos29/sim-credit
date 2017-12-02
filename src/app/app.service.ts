import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';

export interface Data {
  prix: number;
  apport: number;
  taux: number;
  duree: number;
  mensualite: number;
}

@Injectable()
export class AppService {

  constructor(private http: HttpClient){}

  public save(data: Data): Observable<any> {
    return this.http.post(environment.apiUrl, data,{responseType: 'text'});
  }

  public loadData(): Observable<Data[]> {
    return this.http.get<Data[]>(environment.apiUrl);
  }

}
