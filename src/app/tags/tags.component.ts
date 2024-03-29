import { Component } from '@angular/core';
import { TagService } from '../services/tag.service';
import { Tag } from '../model/tag';

import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
  }
  // @Input() tagFilter: Tag | undefined;
  // @Output() newTagFilterEvent = new EventEmitter<Tag>();
  
  // setTagFilter(tag: Tag) {
  //   this.tagFilter = tag;
  //   this.newTagFilterEvent.emit(tag);
  // }


}
