import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // myLoginForm=new FormGroup({
  //   email:new FormControl('xyz'),
  //   password: new FormControl('123')
  // })

  loginResponse:any;
  loginClass:any;

  myLoginForm=this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.minLength]]
  })

  constructor(private auth:AuthService, private fb:FormBuilder, private router:Router) {
   }

  ngOnInit(): void {
  }

  //This needed to use email?.invalid etc.
  //Otherwise need to use : myLoginForm.get('email).invalid etc.
  get email(){
    return this.myLoginForm.get('email');
  }

  get password(){
    return this.myLoginForm.get('password');
  }

  loggedIn(){
    this.auth.login(this.myLoginForm.value).subscribe((response)=>{
      this.loginResponse='Login successful!';
      this.loginClass = 'alert-success';
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.router.navigateByUrl('home');
    },
    (error)=>{
      this.loginResponse='Incorrect email or password.';
      this.loginClass = 'alert-danger';
    }
    ) ;
    
  }
}
