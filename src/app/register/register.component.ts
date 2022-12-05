import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  uname=''
  acno=''
  psw=''

  constructor(private ds:DataService){

  }

  register(){
   var uname=this.uname
   var acno=this.acno
   var psw=this.psw

   const result=this.ds.register(acno,uname,psw)

   if(result){
    alert('Registration Success')
   }
   else{
    alert('User already exist')
   }

  }

}
