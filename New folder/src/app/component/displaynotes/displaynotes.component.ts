import { Component, Input, OnInit } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input() notelistArray: any;

  ngOnInit(): void {
    
    console.log(this.notelistArray);

  }
  openDialog(Notes:any): void {
    console.log(Notes);
    
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      height:'350px',width: '470px',
      data:Notes    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result)
    });
  }



}
