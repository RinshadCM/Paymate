import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser=''
  currentacno=''

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"Anu",password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:"Amal",password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:"Arun",password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:"Megha",password:123,balance:0,transaction:[]}
  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if (acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,usernae:uname,password:psw,balance:0,transaction:[]}
      return true
    }

  }

  login(acno:any,psw:any){
    // alert('Login Clicked')
 
    var userDetails=this.userDetails

    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        //Store Account Number
        this.currentacno=acno 
        // Store Username
        this.currentuser=userDetails[acno]['username']
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

  deposit(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amnt
        userDetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }

    }
    


  withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]['password']){
        if(amnt<=userDetails[acno]['balance']){
          userDetails[acno]['balance']-=amnt
          userDetails[acno]['transaction'].push({type:'DEBIT',amount:amnt})

          return userDetails[acno]['balance']
        }
        else{
          alert('Insufficient Balance')
          return false
        }
      }
      else{
        alert('Incorrect Password')
        return false
      }
      
    }
    else{
      alert('Incorrect Account Number')
      return false
    }
  }
gettransaction(acno:any){
  return this.userDetails[acno]["transaction"]
}
}
