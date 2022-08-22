import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  data : any;
  flightData: any;

  constructor(private fetchData : FetchDataService, private router : Router) { }

  ngOnInit(): void {
    this.data = this.fetchData.data;
    this.flightData=this.data[0];
  }

  
  displayStyle = "none";
  
  openPopup(idx : number) {
    this.flightData=this.data[idx];

    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }



  sortByKeys(data, key){
    return data.sort(function(a, b)
    {
     var x = a[key]; 
     var y = b[key];
     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

  }


  sortData(Key:String){
    this.data = this.sortByKeys(this.data, Key);
    console.log(this.data);

  }

  isLoggedOut(){
    console.log(this.fetchData.isLogin);
    this.fetchData.isLogin = false;
    this.router.navigate(["../login"]);
  }





}








