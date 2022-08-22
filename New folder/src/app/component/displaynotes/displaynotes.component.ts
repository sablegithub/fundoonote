import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/Services/dataServices/dataservice.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  Serchstring: any;
  message:  any;
  subscription :any;

  constructor(public dialog: MatDialog,private dataService: DataserviceService) { }
  @Input() notelistArray: any;
  @Output() autorefreshevent = new EventEmitter<any>();

  
  ngOnInit(): void {

    this.subscription = this.dataService.searchNote.subscribe(message  => {
      this.message = message;
      console.log("Display serch data=====", message.data[0]);
      this.Serchstring=message.data[0]  
     })
    
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

  datareceivefromiconcomponents(){
    console.log("auto refresh call in displaynote");
    this.autorefreshevent.emit();
    

    }

}
