import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  userModel = new User();

  constructor(private auth:AuthService) {
   }

  ngOnInit(): void {
  }

  formSubmitted(){
    this.auth.register(this.userModel).subscribe((response)=>{
    console.log(response);
    }) ;
  }

}
