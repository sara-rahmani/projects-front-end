import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

import { Project } from './model/project';
import { Category } from './model/category';
import { Tag } from './model/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'Showcase Portfolio project';
  // date = new Date();
  // author = 'Sara Rahmani';
  // showNav: boolean = false;
  // closeNav() {
  //   this.showNav = false;
  // }
  // toggleNav() {
  //   this.showNav = !this.showNav;
  // }
  tagFilter: Tag | undefined;

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  categoryFilter: Category | undefined;

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }
  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}