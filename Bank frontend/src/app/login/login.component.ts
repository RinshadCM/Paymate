import { ANALYZE_FOR_ENTRY_COMPONENTS, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim = "Your Perfect Banking Partner"
  data = "Enter Account Number"
  // acno=''
  // psw=''



  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {

  }

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  login() {
    // alert('Login Clicked')
    var acno = this.loginForm.value.acno
    var psw = this.loginForm.value.psw

    if (this.loginForm.valid) {
      this.ds.login(acno, psw).subscribe((result: any) => {
        localStorage.setItem('currentacno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
        localStorage.setItem('token',JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
        result => {
          alert(result.error.message)
        })
    }
    else {
      alert('Invalid Login')
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
