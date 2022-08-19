import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {

  trashlist=[]
  TrashList: any

  constructor(private NoteService: NoteService) { }

  ngOnInit(): void {
    this.getallnotes();
  }
  getallnotes() {
    //call get all list api here
    this.NoteService.getallnotes().subscribe((response: any) => {
      console.log(response)
      this.trashlist = response.data.filter((Object: any) => {
        return Object.trash !== false
      })
      this.TrashList = this.trashlist
      console.log(this.TrashList);

    }

    )
  }

}
