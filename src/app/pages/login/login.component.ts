import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private routes:Router)
{

}
log=
{
  username:'',
  password:''

}
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  loginuser(data)
  {
    // alert(this.log.username)
if(this.log.username=='Visitor' && this.log.password=='12345')
{
  localStorage.setItem('access','Granted');
  this.routes.navigate(['/Dashboard']);
}
else
{
  localStorage.setItem('access','Denied');

  alert('Enter Valid Details!!!')
}
  }
}
