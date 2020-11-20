import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactsComponent } from './prodacts.component';

describe('ProdactsComponent', () => {
  let component: ProdactsComponent;
  let fixture: ComponentFixture<ProdactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
