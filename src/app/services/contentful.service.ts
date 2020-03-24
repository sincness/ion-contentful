import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '39obt47nmnjm',
  accessToken: '_yMvntxscSGfqbvKs7YcY8pTL2jaOr3SH7mUdymKG8E',

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
  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({}, query))
    .then(res => res.items);
  }
}
