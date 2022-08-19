import { Component, OnInit } from '@angular/core';
 
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,  OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']


})
export class DashboardComponent implements OnDestroy {


  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (i) => `Nav Item ${i}`);

  fillerContent = Array.from(
    {length: 5},
    () =>
      `vaibhav sable`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  Logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  Trash() {
     
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
