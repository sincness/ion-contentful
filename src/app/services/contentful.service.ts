import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '39obt47nmnjm', // Malthes Udviklingsbiks
  spaceX: 'td4ost56oocg', // Hotum
  accessToken: '_yMvntxscSGfqbvKs7YcY8pTL2jaOr3SH7mUdymKG8E',
  accessTokenX: 'jbuznMga4hOgBjs3msgusrp41fOhCA3byEglXnZESgo'
  

  // contentTypeIds: {
  //   pages: '5C7OSbHWN2xSjcKCcMDbwA'
  // }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  private cdaClientX = createClient({
    space: CONFIG.spaceX,
    accessToken: CONFIG.accessTokenX
  });
  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({}, query))
    .then(res => res.items);
  }
  getNyheder(query?: object): Promise<Entry<any>[]> {
    return this.cdaClientX.getEntries(Object.assign({}, query))
    .then(res => res.items);
  }



  getNyhed(id: string): any {
    return from(this.cdaClientX.getEntry(id));
  }

}
