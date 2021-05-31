import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloseToMePage } from './close-to-me.page';

describe('CloseToMePage', () => {
  let component: CloseToMePage;
  let fixture: ComponentFixture<CloseToMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseToMePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloseToMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
