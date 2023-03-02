import { Component } from '@angular/core';
import { Tag } from '../model/tag';
import { Category } from '../model/category';
import { Project } from '../model/project';
import { ProjectService } from '../project.service';
import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit(): void {
    this.getProjects();
  }
  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }
  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
