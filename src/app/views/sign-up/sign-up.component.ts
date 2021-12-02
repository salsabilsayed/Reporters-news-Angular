import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder, private authService:AuthService,private router:Router) { }

  // form validation
  signupForm = this.fb.group(
    {
      name:['',[Validators.required, Validators.minLength(3)]],
      age:[''],
      email:['',[Validators.email, Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]],
      phone:['',[Validators.required]],
      image:['']
    }
  )

  get myValues(){
    return this.signupForm.controls
  }

  // sign up

  reporter:any
  token:any
  invalidEmail:boolean = false;
  invalidAge:boolean = false;
  invalidPhone:boolean = false;

  signUp(value:any){
    this.authService.signUp(value).subscribe(
      {
        next:(res)=>{
          console.log(res);
          this.reporter = res
          this.token = this.reporter.token
          localStorage.setItem('token',this.token)
          this.router.navigate(['/profile'])
        },
        error:(httpError)=>{
          console.log(httpError);
          
          if(httpError.error.code === 11000){
            this.invalidEmail = true;
          }
          if(httpError.error.errors.age.name === 'ValidatorError'){
            this.invalidAge = true;
          }
          if(httpError.error.errors.phone.path === 'phone'){
            this.invalidPhone = true;
          }
        }
      }
    )
  }

  removeEmailMsg(){
    this.invalidEmail = false
  }

  removeAgeMsg(){
    this.invalidAge = false
  }

  removePhoneMsg(){
    this.invalidPhone = false
  }
  

  ngOnInit(): void {
  }

}
