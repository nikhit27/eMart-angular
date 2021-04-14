import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddItemComponent } from './seller-add-item.component';

describe('SellerAddItemComponent', () => {
  let component: SellerAddItemComponent;
  let fixture: ComponentFixture<SellerAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
