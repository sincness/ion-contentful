import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenestePage } from './seneste.page';

describe('SenestePage', () => {
  let component: SenestePage;
  let fixture: ComponentFixture<SenestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
