import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersChefPage } from './orders-chef.page';

describe('OrdersChefPage', () => {
  let component: OrdersChefPage;
  let fixture: ComponentFixture<OrdersChefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersChefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
