import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { TrashnotesComponent } from '../trashnotes/trashnotes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
   ID:any
  @Input() noteID: any;
  @Output() Autorefresh = new EventEmitter<any>();

    
  colors: Array<any> = [
    { code: 'white', name: 'white' },
    { code: 'red', name: 'red' },
    { code: 'orange', name: 'orange' },
    { code: 'yellow', name: 'yellow' },
    { code: 'green', name: 'green' },
    { code: 'teal', name: 'teal' },
    { code: 'blue', name: 'Blue' },
    { code: 'darkblue', name: 'darkblue' },
    { code: 'purple', name: 'purple' },
    { code: 'pink', name: 'pink' },
    { code: 'brown', name: 'brown' },
    { code: 'grey', name: 'grey' },
    { code: 'lightyellow', name: 'lightyellow' },
    { code: 'olive', name: 'olive' },
    { code: 'aqua', name: 'aqua' },
    { code: 'cyan', name: 'cyan' },
    { code: 'Dark Blue', name: 'Dark Blue' },
  ];
  constructor(private NoteService: NoteService ) { }

  ngOnInit(): void {

    
    
  }
  Delete() {
    let reqData = {
      noteID: this.noteID,
      trash: true,
    }
    console.log(reqData);
    
    this.NoteService.trash(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully", response);
      this.Autorefresh.emit()
    })
  }
  Archive() {
    let reqData = {
      noteID: this.noteID,
      archive: true,
    }
    console.log(reqData);
    this.NoteService.archive(reqData).subscribe((response: any) => {
      console.log("Note Archive Successfully", response);
      this.Autorefresh.emit()
    })
  }

  
  setColor(color: any) { 
    // let data = {
    //   noteID: this.noteID,
    //   color:color
    // }
    // console.log(data)   
    this.NoteService.Colors(this.noteID,color).subscribe((response: any) => {
      console.log("vaibhav");
      
      console.log(response);
      this.Autorefresh.emit(response);
    })
  }
}


