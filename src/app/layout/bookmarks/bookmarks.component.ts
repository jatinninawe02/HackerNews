import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  public bookmarkStorage: any = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('Bookmark')) {
      this.bookmarkStorage = JSON.parse(localStorage.getItem('Bookmark'));
    }
  }

}
