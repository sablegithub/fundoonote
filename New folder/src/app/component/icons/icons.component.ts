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
  
  id: any
  @Input() noteID: any;
  @Output() Autorefresh = new EventEmitter<any>();

    

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
      archive: false,
    }
    console.log(reqData);
    this.NoteService.archive(reqData).subscribe((response: any) => {
      console.log("Note Archive Successfully", response);
    })
  }

}


