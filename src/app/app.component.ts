import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  constructor(private routes:Router)
  {
    var access=localStorage.getItem('access');
    if(access=='!Granted')
    {
    
      routes.navigate(['/login'])

    }
  }
}
