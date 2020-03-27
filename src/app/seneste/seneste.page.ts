import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { NyhedPage } from '../nyhed/nyhed.page';

@Component({
  selector: 'app-seneste',
  templateUrl: './seneste.page.html',
  styleUrls: ['./seneste.page.scss'],
})
export class SenestePage implements OnInit {
  public nyheder: Entry<any>[] = [];
  id: string;
  toast: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private contentfulService: ContentfulService, public toastController: ToastController, public modalController: ModalController) { }
  
  ngOnInit() {
    this.contentfulService.getNyheder()
    .then(nyheder => this.nyheder = nyheder)



    setTimeout(() => {
      console.log(this.nyheder)
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


}
