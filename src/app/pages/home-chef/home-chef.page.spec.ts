import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeChefPage } from './home-chef.page';

describe('HomeChefPage', () => {
  let component: HomeChefPage;
  let fixture: ComponentFixture<HomeChefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
