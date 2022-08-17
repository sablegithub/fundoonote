import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteService/note.service';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  noteID: any
  title: any
  discription: any

  constructor(private NoteService: NoteService, public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

    console.log("dialog data in dialog box", data);
    this.noteID = this.data.noteID
    this.title = data.title,
      this.discription = data.discription
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateNote() {
    let reqData = {
      title: this.title,
      discription: this.discription

    }
    //console.log(this.data.NoteID);
    this.NoteService.update(reqData, this.noteID).subscribe((response: any) => {
      console.log(response)
      this.dialogRef.close("note updated")
    })

  }
  ngOnInit(): void {
  }

}
