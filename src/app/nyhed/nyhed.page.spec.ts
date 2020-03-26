import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NyhedPage } from './nyhed.page';

describe('NyhedPage', () => {
  let component: NyhedPage;
  let fixture: ComponentFixture<NyhedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyhedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NyhedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
