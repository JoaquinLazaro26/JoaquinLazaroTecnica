import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarhistorialComponent } from './buscarhistorial.component';

describe('BuscarhistorialComponent', () => {
  let component: BuscarhistorialComponent;
  let fixture: ComponentFixture<BuscarhistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarhistorialComponent]
    });
    fixture = TestBed.createComponent(BuscarhistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
