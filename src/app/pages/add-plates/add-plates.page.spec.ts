import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPlatesPage } from './add-plates.page';

describe('AddPlatesPage', () => {
  let component: AddPlatesPage;
  let fixture: ComponentFixture<AddPlatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
