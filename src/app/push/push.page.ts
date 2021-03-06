import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { NyhedPage } from '../nyhed/nyhed.page';


@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage implements OnInit {

  public nyheder: Entry<any>[] = [];
  id: string;
  toast: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private contentfulService: ContentfulService, public toastController: ToastController, public modalController: ModalController) {


    


   }

  ngOnInit() {
    this.contentfulService.getNyheder()
    .then(nyheder => this.nyheder = nyheder)

    setTimeout(() => {
      this.showToast()

    }, 1000);

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
  
  showToast() {
    this.toast = this.toastController.create({
      position: 'top',
      message: 'Tryk på Toolbaren for at komme tilbage',
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast(){
    this.toast = this.toastController.dismiss();
  }

  objectToArray(object) {
    return Array.of(object)
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
