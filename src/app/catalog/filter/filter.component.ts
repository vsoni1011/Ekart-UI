import { Component, OnInit } from '@angular/core';
import { Brand, Category, Color, Size, SubCategory } from '../catalog.model';
import { CatalogService } from '../catalog.service';
import { ViewEncapsulation } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'catalog-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  categories: Category[] = [];
  allsubcategories: SubCategory[] = [];
  subcategories: SubCategory[] = [];
  brands: Brand[] = [];
  allbrands: Brand[] = [];
  sizes: Size[] = [];
  allsizes: Size[] = [];
  searchText: string = '';
  brandSearchText: string = '';
  sizeSearchText: string = '';
  rangeSlider: number[] = [100, 3000];
  colors = Color;
  rangeSliderConfig: any = {
    behaviour: 'drag',
    connect: true,
    keyboard: true,
    step: 1,
    range: {
      min: 0,
      max: 10000
    },
    pips: {
      mode: 'count',
      values: 5,
      stepped: true
    }
  };

  constructor(private catalogService: CatalogService) {
    this.catalogService.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.allsubcategories = data;
      this.subcategories = this.allsubcategories;
    });

    this.catalogService.getAllBrands().subscribe((data) => {
      this.allbrands = data;
      this.brands = this.allbrands;
    });

    this.catalogService.getAllSizes().subscribe((data) => {
      this.allsizes = data;
      this.sizes = this.allsizes;
    });
  }

  ngOnInit(): void {
  }

  search(event: Event): void {
    const input = (<HTMLInputElement>event.target).value;
    this.subcategories = this.allsubcategories.filter((data) => data.name.toLowerCase().includes(input));
  }

  clearSearchText(): void {
    this.searchText = '';
    this.subcategories = this.allsubcategories;
  }

  updateSliderRange(data: number[]) {
    this.rangeSlider = data
  }

  bindRangeSliderInput(event: Event, index: number, refElement: NouisliderComponent) {
    const input = parseInt((<HTMLInputElement>event.target).value);
    if (index == 1 && input > this.rangeSliderConfig.range.max) {
      this.rangeSlider[index] = parseInt(this.rangeSliderConfig.range.max);
    } else if (index == 0 && input > this.rangeSlider[1]){
      this.rangeSlider[0] = input;
      this.rangeSlider[1] = input;
    } else {
      this.rangeSlider[index] = input;
    }
    refElement.writeValue(this.rangeSlider);
  }

  searchBrands(event: Event) {
    const input = (<HTMLInputElement>event.target).value;
    this.brands = this.allbrands.filter((data) => data.name.toLowerCase().includes(input));    
  }

  searchSizes(event: Event) {
    const input = (<HTMLInputElement>event.target).value;
    this.sizes = this.allsizes.filter((data) => data.size.toLowerCase().includes(input));    
  }

  getColors() : Array<string> {
    var keys = Object.keys(this.colors);
    return  keys.slice(keys.length / 2);
  }
}
