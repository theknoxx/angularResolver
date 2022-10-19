import { Component } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd,NavigationCancel,NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  title = 'resolver';
  currentPath: any
  constructor(private router: Router,){
    this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
              this.currentPath = event.url
              this.loading = true;
            }
            if (
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel ||
              event instanceof NavigationError
            ) {
              this.loading = false;
            }
          });
  }
  ngOnInit(){
    
  }
}
