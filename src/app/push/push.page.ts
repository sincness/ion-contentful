import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  toast: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private contentfulService: ContentfulService, public toastController: ToastController) { }

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
      this.showToast()

    }, 1000);

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


  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }


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
