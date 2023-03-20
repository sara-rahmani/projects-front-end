import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }
  title = 'Showcase Portfolio project';

  showNav: boolean = false;
  toggleNav() {
    this.showNav = !this.showNav;
  }
  closeNav() {
    this.showNav = false;
  }
 
  ngOnInit(): void {}
 
}
