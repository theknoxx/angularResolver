import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any
  constructor(private service: ServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe(res =>{
      console.log('PRODUCT FETCHING', res);
      this.products = res['products']
      console.log('PRODUCT FETCHED');
})
  }

}
