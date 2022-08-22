import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
//import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router,private service: FetchDataService ) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'email': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required ,Validators.minLength(4)])
    })
    if(this.service.isLogin){
      this.router.navigate(["booking"])
    }
  }
  onSubmit(){
    this.service.isloggedIn(this.loginForm.value.email,this.loginForm.value.password);
    this.router.navigate(["/booking"])


  }

}