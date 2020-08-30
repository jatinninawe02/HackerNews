import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() item;

  public url: any;
  public bookmarkStorage: any = [];
  public heartColor = false;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (localStorage.getItem('Bookmark')) {
      this.bookmarkStorage = JSON.parse(localStorage.getItem('Bookmark'));
    }
    this.bookmarkStorage.forEach(event => {
      if (this.item.id === event.id) {
        this.item.color = true;
      }
    });
  }

  toggleBookmark(event) {
    if (localStorage.getItem('Bookmark')) {
      this.bookmarkStorage = JSON.parse(localStorage.getItem('Bookmark'));
    }
    if (this.bookmarkStorage.length > 0) {
      let isPresent = false;
      let index = 0;
      this.bookmarkStorage.forEach((item, i = 0) => {
        if (item.id === event.id) {
          isPresent = true;
          index = i;
        }
      });
      if (isPresent) {
        this.bookmarkStorage.splice(index, 1);
        localStorage.setItem('Bookmark', JSON.stringify(this.bookmarkStorage));
      } else {
        this.bookmarkStorage.push(event);
        localStorage.setItem('Bookmark', JSON.stringify(this.bookmarkStorage));
      }
    } else if (this.bookmarkStorage.length === 0) {
      this.bookmarkStorage.push(event);
      localStorage.setItem('Bookmark', JSON.stringify(this.bookmarkStorage));
    }
    window.location.reload();
  }

  openPopupModal(event) {
    this.url = event;
  }

  getUrl() {
    let url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    return url;
  }

  closePopup() {
    this.url = undefined;
  }

}
