import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage implements OnInit {

  public nyheder: Entry<any>[] = [];
  public files: any = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getNyheder()
    .then(nyheder => {
      this.nyheder = nyheder;
      this.nyheder.forEach(nyhed => {
        if(nyhed.fields.billeder) {
          let items = this.objectToArray(nyhed.fields.billeder)
          console.log(items)
          items[0].forEach(item => {
            console.log(item.fields.file.url)
          });
        }
        // console.log(nyhed)
      });
    })
    // .then(nyheder => this.images = )

    setTimeout(() => {
      this.check()

    }, 1000);

  }

  objectToArray(object) {
    return Array.of(object)
  }

  sliderOrNot(object) {
    let x = this.objectToArray(object);
    this.files = x[0]
    console.log(this.files)
  }



  check() {
    console.log(this.nyheder)
  }

  _returnCreatedDate(datetime) {
    if (datetime === undefined || datetime === null) {
      return '<p>Error</p>';
    }
    const e = new Date(datetime);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return e.toLocaleDateString('da-DK', options)
  }


  _returnHtmlFromRichText(richText) {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
}



}
