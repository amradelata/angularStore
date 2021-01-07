import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactsDetailComponent } from './prodacts-detail.component';

describe('ProdactsDetailComponent', () => {
  let component: ProdactsDetailComponent;
  let fixture: ComponentFixture<ProdactsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdactsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdactsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
