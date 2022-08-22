import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor() { }

  //data :any ;
  data = [{"flightImg" : "https://th.bing.com/th/id/OIP.TQGi9KJJPACbeelpX8dgsQHaHP?w=157&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
           "flightName" : "airIndia",
           "departure" : "New Delhi",
           "Arrival" : "Banglore",
           "SArrival" : "DEL",
           "SDeparture" : "BOM",
           "TArrival" : "9:00",
           "TDeparture" : "7:00",
           "Duration" : "4h 0m",
           "Price" : "7000"
    },
    {"flightImg" : "data:image/jpeg;base64,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",
           "flightName" : "Spicejet",
           "departure" : "New Delhi",
           "Arrival" : "Hyderabad",
           "SArrival" : "DEL",
           "SDeparture" : "HYBD",
           "TArrival" : "13:00",
           "TDeparture" : "4:00",
           "Duration" : "4h 0m",
           "Price" : "9000"
    },
    {"flightImg" : "data:image/jpeg;base64,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",
           "flightName" : "Spicejet",
           "departure" : "New Delhi",
           "Arrival" : "Hyderabad",
           "SArrival" : "DEL",
           "SDeparture" : "HYBD",
           "TArrival" : "12:00",
           "TDeparture" : "8:00",
           "Duration" : "4h 0m",
           "Price" : "9000"
    },
   
    {"flightImg" : "https://th.bing.com/th/id/OIP.TQGi9KJJPACbeelpX8dgsQHaHP?w=157&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
           "flightName" : "airIndia",
           "departure" : "New Delhi",
           "Arrival" : "Banglore",
           "SArrival" : "DEL",
           "SDeparture" : "BOM",
           "TArrival" : "3:00",
           "TDeparture" : "1:00",
           "Duration" : "4h 0m",
           "Price" : "7000"
    }
  ];




  isLogin=false;
    userCredentails:{email:string,password:string}={

        email:"admin",

        password: "Admin@123"

    }


    isloggedIn(email:string,password:string){

       if(this.userCredentails.email === email && this.userCredentails.password === password)

       {

           this.isLogin=true;

       }

       else{

           this.isLogin=false;

       }



   }








}
