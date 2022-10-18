import { Component } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resolver';
  currentPath: any
  constructor(private router: Router,){
    this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
              this.currentPath = event.url
            }
          });
  }
  ngOnInit(){
    
  }
}
