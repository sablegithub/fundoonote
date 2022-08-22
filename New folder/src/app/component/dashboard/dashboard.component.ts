import { Component, OnInit } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataServices/dataservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']


})
export class DashboardComponent implements OnDestroy {
  
   


  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 5 }, (i) => `Nav Item ${i}`);

  fillerContent = Array.from(
    { length: 5 },
    () =>
      `vaibhav sable`,
  );

  private _mobileQueryListener: () => void;
  subscription: any;
  value: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private dataService: DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  message: any;
   ngOnInit() {
    
   }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }
  Logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  Trash() {

  }
  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let Data = {
      type: 'search',
      data: [this.value]
    }
    this.dataService.changeData(Data)
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
