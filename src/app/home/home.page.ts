import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pages: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService.getProducts()
    .then(pages => this.pages = pages)
    setTimeout(() => {
      this.check()
    }, 1000);

  }

  check() {
    console.log(this.pages)
  }
}
