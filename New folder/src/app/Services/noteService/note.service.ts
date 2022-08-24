import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any
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

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token

      })
    }
    return this.httpService.getService('Notes/All', true, httpOptions)
  }
  update(reqData: any, NoteID: any) {
    //console.log()
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('Notes/Update?NoteID=' + NoteID, reqData, true, httpOptions)
  }

  trash(reqData: any) {
    this.token = localStorage.getItem("token")
    console.log(reqData);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Notes/trash?NoteID=${reqData.noteID}`, reqData, true, httpOptions)

  }
  archive(reqData: any) {
    this.token = localStorage.getItem("token")
    console.log(reqData);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Notes/Archive?NoteID=${reqData.noteID}`, reqData, true, httpOptions)
  }

  Colors(noteID: any,color:any) {
    this.token = localStorage.getItem("token")
    console.log(noteID,color);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Authorization':this.token
        'Authorization': 'Bearer ' + this.token
      })
    }
    //return this.httpService.postService(`Notes/UploadColor?NoteID=${reqData.noteID}`, reqData, true, httpOptions);
   // return this.httpService.postService(`Notes/UploadColor?NoteID=`+reqData.noteID `& color=`+color, reqData, true, httpOptions);
   return this.httpService.postService(`Notes/UploadColor?NoteID=`+noteID+'&color='+color, {}, true, httpOptions);
//Notes/UploadColor?NoteID=10045&color=black
     
  }

}

