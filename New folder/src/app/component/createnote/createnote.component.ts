import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';



@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  isShow = false;

  toggleDisplay() {
    this.isShow = true;
  }

  createForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private NoteService: NoteService) {

  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      discription: ['', Validators.required],
    });
  }
  create() {
    this.isShow = false;
    if (this.createForm.valid) {
      //console.log(this.createForm.value);
       
      let data = {
        title: this.createForm.value.title,
        discription: this.createForm.value.discription,
        image: "string",
        color: "string",
        remainder: "2022-08-12T02:50:10.767Z",
        createdate: "2022-08-12T02:50:10.767Z",
        modifidedate: "2022-08-12T02:50:10.767Z",
        archieve: false,
        pin: false,
        trash: false
        
      }
      //console.log("data submit", data);
      this.NoteService.createnoteservice(data).subscribe((response: any) => {
        console.log("Note Create successfull", response);

      }, (error: any) => {
        console.log(error);
      })
    } 
  }
}

