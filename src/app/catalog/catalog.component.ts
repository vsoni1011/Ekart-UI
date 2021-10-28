import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Product } from './catalog.model';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public productCards: Product[] = [];
  constructor(private _catalogService: CatalogService) {

  }

  ngOnInit(): void {
    this._catalogService.getProducts().subscribe(data => {
      this.productCards = data;
    });
  }
}
