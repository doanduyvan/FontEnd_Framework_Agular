import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduyComponent } from './produy.component';

describe('ProduyComponent', () => {
  let component: ProduyComponent;
  let fixture: ComponentFixture<ProduyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
