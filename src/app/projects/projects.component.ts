import { Tag } from '../model/tag';
import { Category } from '../model/category';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private projectService: ProjectService,  
      private route: ActivatedRoute,
      private location: Location

    ) {}
// filtered:boolean=false;
filtered:string='';
// segment: string ='';
  projects: Project[] = [];

  getProjects(): void {
    // this.projects = this.projectService.getProjects();
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

   getProjectsByCategory(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));

    this.projectService
      .getProjectsByCategory(slug)
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByTag(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByTag(slug)
      .subscribe((projects) => (this.projects = projects));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
     const segment = this.route.snapshot.url[1]?.path;
      const filter:string=this.route.snapshot.url[2]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
        this.filtered= filter;

      } else if (segment === 'tags') {
        this.getProjectsByTag();
        this.filtered=filter;
      
      } else {
        this.getProjects();
      }
    });
  }
  // @Input() categoryFilter: Category | undefined;
  // @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  // @Input() tagFilter: Tag | undefined;
  // @Output() newTagFilterEvent = new EventEmitter<Tag>();

  // setCategoryFilter(category: Category) {
  //   this.categoryFilter = category;
  //   this.newCategoryFilterEvent.emit(category);
  // }
  // setTagFilter(tag: Tag) {
  //   this.tagFilter = tag;
  //   this.newTagFilterEvent.emit(tag);
  //   console.log(this.tagFilter);
  // }

  // clearFilters() {
  //   this.categoryFilter = undefined;
  //   this.tagFilter = undefined;
  // }
  selectedProject?: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  clearSelectedProject(): void {
    this.selectedProject = undefined;


  }

  goBack(): void {
    this.location.back();
  }
}
