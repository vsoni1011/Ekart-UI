import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Category, Color } from './../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categoryList: Observable<Category[]>;
  colors : string[]= [];

  constructor(private adminService: AdminService) {
    this.categoryList = this.adminService.getCategories();
    
  }

  ngOnInit(): void {
    this.colors = ['black', 'blue', 'green', 'pink', 'red', 'white', 'yellow']
  }
  onAdd(data: any) {
    console.log(data)
  }
  trackById(index: number, data: any) {
    return data.id
  }
}
