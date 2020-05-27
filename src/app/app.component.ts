import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Made-Easy-Website';

  constructor(private router: Router) { }

  public navigateToLogin() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}

