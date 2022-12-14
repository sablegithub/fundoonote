import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //user='1';
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private UserService: UserService,private router:Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   // localStorage.setItem("SessionUser",this.user)
  }
  login() {

    if (this.loginForm.valid) {
      this.UserService.loginUserService(this.loginForm.value).subscribe((response: any) => {
        console.log("login successfull", response);
        localStorage.setItem("token", response.data);
        this.router.navigateByUrl('/dashboard')
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
}


