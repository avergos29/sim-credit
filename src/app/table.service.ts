import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './app.service';

@Injectable()
export class TableService {

  private data: BehaviorSubject<Data[]> = new BehaviorSubject([]);

  constructor() { }


  public addData(data: Data[]){
      this.data.next(data);
  }

  public getData(): BehaviorSubject<Data[]> {
    return this.data;
  }

}
