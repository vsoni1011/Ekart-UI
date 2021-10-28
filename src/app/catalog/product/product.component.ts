import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../catalog.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [NgbRatingConfig]
})
export class ProductComponent implements OnInit {

  @Input() dataSource: Product = { id: 0, name: '', price: 0, discount: 0, image: '', rating: 0 };

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit(): void {
  }
}
