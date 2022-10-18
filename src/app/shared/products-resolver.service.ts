import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ServiceService } from './service.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(private service: ServiceService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      console.log('Called get product in resolver...',route);
      return this.service.getProducts().pipe(
        catchError(error => {
          return of('No Data');
        })
      )
      
  }
}
