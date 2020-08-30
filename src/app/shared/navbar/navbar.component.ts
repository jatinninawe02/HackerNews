import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public bookmarkStorage: any = [];
  public bookmarkStorageLength = 0;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('Bookmark')) {
      this.bookmarkStorage = JSON.parse(localStorage.getItem('Bookmark'));
      if (this.bookmarkStorage.length > 0) {
        this.bookmarkStorage.forEach(ele => {
          this.bookmarkStorageLength++;
        });
      }
    }
  }

}
