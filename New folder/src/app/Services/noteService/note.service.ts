import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }

  createnoteservice(reqData: any) {
    console.log(reqData)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postService('Notes/Create', reqData, true, httpOptions)
  }
  getallnotes() {
    //console.log()
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token

      })
    }
    return this.httpService.getService('Notes/All', true, httpOptions)
  }
}

