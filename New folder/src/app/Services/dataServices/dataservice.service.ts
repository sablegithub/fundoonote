import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: any) {
    this.messageSource.next(message)
  }


  private SearchData = new BehaviorSubject({ type: '', data: [] });
  searchNote = this.SearchData.asObservable()
  changeData(message: any) {
    this.SearchData.next(message)
  }
}
