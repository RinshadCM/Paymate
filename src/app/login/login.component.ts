import { ANALYZE_FOR_ENTRY_COMPONENTS, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim= "Your Perfect Banking Partner"
  data="Enter Account Number"
  acno=''
  psw=''

    userDetails:any={
      1000:{acno:1000,username:"Anu",password:123,balance:0,},
      1001:{acno:1001,username:"Amal",password:123,balance:0,},
      1002:{acno:1002,username:"Arun",password:123,balance:0,},
      1003:{acno:1003,username:"Megha",password:123,balance:0,}
    }

    constructor(private router:Router){
      
    }

    login(){
      // alert('Login Clicked')
      var acno=this.acno
      var psw=this.psw
      var userDetails=this.userDetails

      if(acno in userDetails){
        if(psw==userDetails[acno]["password"]){
          alert('Login Success')
          this.router.navigateByUrl('dashboard')
        }
        else{
          alert('Incorrect Password')
        }
      }
      else{
        alert('Incorrect Username')
      }
    }
    // login(a:any,b:any){
    //   // alert('Login Clicked')
    //   this.acno=a.value
    //   this.psw=b.value

    //   var acno=this.acno
    //   var psw=this.psw
    //   var userDetails=this.userDetails

    //   if(acno in userDetails){
    //     if(psw==userDetails[acno]["password"]){
    //       alert('Login Success')
    //     }
    //     else{
    //       alert('Incorrect Password')
    //     }
    //   }
    //   else{
    //     alert('Incorrect Username')
    //   }
    // }


    // acnoChange(event:any){
    //   this.acno=event.target.value
      
    // }
    // pswChange(event:any){
    //   this.psw=event.target.value
    //   console.log(this.psw);
      
    // }
  }
