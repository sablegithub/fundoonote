import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
@Injectable({
  providedIn: 'root'
})
export class LabelserviceService {
  token: any;
  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem("token")
  }
  createlabel(reqData: any) {  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('Label/Create?noteid=', reqData, true, header)
  }
}
