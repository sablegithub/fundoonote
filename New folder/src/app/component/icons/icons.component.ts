import { Component, Input, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteID: any;

  constructor(private NoteService: NoteService) { }

  ngOnInit(): void {
  }
  Delete() {
    let reqData = {
      noteID: this.noteID,
      trash: true
    }
    console.log(reqData);
    
    this.NoteService.trash(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully", response);
    })
  }
}


