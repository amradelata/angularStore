import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsnavComponent } from './productsnav.component';

describe('ProductsnavComponent', () => {
  let component: ProductsnavComponent;
  let fixture: ComponentFixture<ProductsnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
