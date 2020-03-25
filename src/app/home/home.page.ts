import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pages: Entry<any>[] = [];
  toast: any;

  constructor(private contentfulService: ContentfulService, public toastController: ToastController) {}

  ngOnInit() {
    this.contentfulService.getProducts()
    .then(pages => this.pages = pages)
    
    
    
    
    setTimeout(() => {
      this.showToast()

    }, 1000);

  }


  showToast() {
    this.toast = this.toastController.create({
      position: 'top',
      message: 'Tryk på Toolbaren for Nyheder',
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast(){
    this.toast = this.toastController.dismiss();
  }

  check() {
    console.log(this.pages)
  }
}
