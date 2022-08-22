import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userAccess:boolean;

  constructor(private user:FetchDataService) { 
    // console.log(this.user.isLogin)
    this.userAccess=this.user.isLogin;
    
  }

  ngOnInit(): void {
  

  }

}
