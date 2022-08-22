import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {

  constructor(private NoteService: NoteService) { }
  archiveList = []
 // ArchievList: any


  ngOnInit(): void {
    this.getArchivenotes();
  }
  getArchivenotes() {
    //call get all list api here   
    this.NoteService.getallnotes().subscribe((response: any) => {
      console.log(response);

      this.archiveList = response.data.filter((Object: any) => {
        return Object.trash !== true
      })
      //this.ArchievList = this.archiveList
      console.log(this.archiveList);
    }

    )
  }

}
