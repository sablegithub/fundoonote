import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  // NoteList :any;

  constructor( private NoteService: NoteService) { }

  ngOnInit():void {
    // this.getallnotes();
  }

  // getallnotes()
  //  {
  //   //call get all list api here
  //   this.NoteService.getallnotes().subscribe((response: any) => {
  //     this.NoteList = response.data
  //   }
  // )}

}
