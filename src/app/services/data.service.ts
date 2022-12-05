import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"Anu",password:123,balance:0,},
    1001:{acno:1001,username:"Amal",password:123,balance:0,},
    1002:{acno:1002,username:"Arun",password:123,balance:0,},
    1003:{acno:1003,username:"Megha",password:123,balance:0,}
  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if (acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,usernae:uname,password:psw,balance:0}
      return true
    }

  }
}
