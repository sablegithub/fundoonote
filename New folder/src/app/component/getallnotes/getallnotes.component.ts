import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  NoteList = []
  notearray: any
  constructor(private NoteService: NoteService) { }

  ngOnInit(): void {
    this.getallnotes();
  }

  getallnotes() {
    //call get all list api here
    this.NoteService.getallnotes().subscribe((response: any) => {
     // console.log(response)
      this.NoteList = response.data.filter((Object: any) => {
        return Object.trash  !== true 
      })
      this.notearray = this.NoteList
      console.log(this.notearray);
    }
    )
  }
  allnotes() {
    console.log("got message from display to refresh allnote ");
    this.getallnotes()
  }
}
