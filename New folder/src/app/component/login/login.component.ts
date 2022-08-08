import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private UserService: UserService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  login() {
    
    if (this.loginForm.valid){
      this.UserService.loginUserService(this.loginForm.value).subscribe((response:any)=>{
        console.log("login successfull",response);
        localStorage.setItem("token",response.data)
        
      },(error:any)=>
      {
        console.log(error);
      })
  

    }else{
      return;
    }
    
  
  }

}


