import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  // form validation
  loginForm = this.fb.group(
    {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
  )

  get myValues(){
    return this.loginForm.controls
  }

  // login

  reporter:any;
  token:any;
  invalidLogin:boolean = false;

  login(value:any){
    this.authService.login(value).subscribe(
      {
        next:(res)=>{
          this.reporter = res
          this.token = this.reporter.token
          localStorage.setItem('token',this.token)
          this.router.navigate(['/profile'])
        },
        error:(httpError)=>{
          this.invalidLogin = true;
        }
      }
    )
    
  }

  removeErrorMsg(){
    this.invalidLogin = false
  }

  ngOnInit(): void {
  }

}
