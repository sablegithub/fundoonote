import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private UserService: UserService) { }
  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
     // password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  forget() 
  {
    if (this.forgetForm.valid) {
      this.UserService.forgetUserService(this.forgetForm.value).subscribe((response: any) => {
        console.log("forget successfull", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }

  }

}
