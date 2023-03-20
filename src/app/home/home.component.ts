import { Component,AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  constructor(private projectService: ProjectService
  ) {}
  project?: Project ;
  projects:Project[]=[];
    slideConfig = {
    slidesToShow: 1,
    dots: true,
    arrows: true,
    nextArrow: '.arrow.next',
    prevArrow: '.arrow.prev',
    autoplay: true,
    autoplaySpeed: 4000
  };
  ngOnInit(): void {
    this.getProject();
    this.getProjects();

  }
  
  getProject(): void {
    // this.projects = this.projectService.getProjects();
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.project = projects.find((p) => p.title === "Portfolio Showcase")));
  }
  

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => {
        this.projects = projects.filter((p) => {
          return p.title === "The LocalHost" || p.title === "Movie App" || p.title === "Dice Game";
        });
      });
  }
}
