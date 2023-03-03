import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';
import { Tag } from '../model/tag';

import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
  // @Input() categoryFilter: Category | undefined;
  // @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  
  // setCategoryFilter(category: Category) {
  //   this.categoryFilter = category;
  //   this.newCategoryFilterEvent.emit(category);
  // }


}
