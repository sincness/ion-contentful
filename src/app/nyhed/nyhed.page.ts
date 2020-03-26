import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulService } from '../services/contentful.service';


@Component({
  selector: 'app-nyhed',
  templateUrl: './nyhed.page.html',
  styleUrls: ['./nyhed.page.scss'],
})
export class NyhedPage implements OnInit {

  nyhed: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(public modalController: ModalController, private contentfulService: ContentfulService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async open(id: string) {
    this.contentfulService.getNyhed(id)
      .subscribe(async nyhed => {
        const modal = await this.modalController.create({
          component: NyhedPage,
          componentProps: { nyhed }
        });
        return await modal.present();
      });
    
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
