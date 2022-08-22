import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelserviceService } from 'src/app/Services/LabelService/labelservice.service';

@Component({
  selector: 'app-createlabel',
  templateUrl: './createlabel.component.html',
  styleUrls: ['./createlabel.component.scss']
})
export class CreatelabelComponent implements OnInit {
  labelName: any;
  noteID:any


  createForm!: FormGroup;
  submitted = false;
  constructor(private FormBuilder:FormBuilder, private LabelService: LabelserviceService) { }

  ngOnInit(): void {
    this.createForm = this.FormBuilder.group({
      labelName: ['', Validators.required],
      
    });
  }
  create() {
    
    if (this.createForm.valid) {
      //console.log(this.createForm.value);      
      let data = {
        labelName: this.createForm.value.labelName,
        noteID: localStorage.getItem("noteID")
    
      }
      //console.log("data submit", data);
      this.LabelService.createlabel(data).subscribe((response: any) => {
        console.log("Note Create successfull", response);
  

      }, (error: any) => {
        console.log(error);
      })
    } 
  }
}
