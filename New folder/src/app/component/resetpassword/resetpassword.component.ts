import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {


  resetForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private UserService: UserService) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      conformpassword: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  reset() {
    if (this.resetForm.valid) {
      this.UserService.resetUserService(this.resetForm.value).subscribe((response: any) => {
        console.log("Reset successfull", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
}
