import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor() {}
  // @Input() notelistArray:any;

  ngOnInit(): void {
    //console.log(this.notelistArray);
    
  }

}
