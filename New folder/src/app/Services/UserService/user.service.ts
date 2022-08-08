import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private httpService: HttpService) { }
  loginUserService(reqData:any) {
    console.log(reqData)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService('User/Login', reqData, false, httpOptions)
  }

  registerUserService(reqData:any) {
    console.log(reqData);
    let httpOptions = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
   return this.httpService.postService('User/Register', reqData, false, httpOptions)
  }
  forgetUserService(reqData:any){
    console.log(reqData);
    let httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' :this.token
      })
    }
    return this.httpService.postService('User/Forget',reqData,false,httpOptions)

  }
  resetUserService(reqData:any){
    console.log(reqData);
    let httpOptions={
      Headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':this.token
      })
    }
    return this .httpService.putService('User/Reset',reqData,false,httpOptions)
    
  }

}
