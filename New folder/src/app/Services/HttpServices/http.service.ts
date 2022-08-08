import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BASEURL

  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqData: any, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.post(this.BaseUrl + url, reqData, token && httpHeadersOptions)
  }

  putService(url: string, reqData: any, token: boolean, httpHeadersOptions: any) {
    console.log(reqData);
    return this.httpClient.put(this.BaseUrl + url, reqData, token && httpHeadersOptions)
  }

  getService() {
    


  }
  deleteService() {
    

  }


}