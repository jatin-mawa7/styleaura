import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourproducts } from './ourproducts';

describe('Ourproducts', () => {
  let component: Ourproducts;
  let fixture: ComponentFixture<Ourproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
