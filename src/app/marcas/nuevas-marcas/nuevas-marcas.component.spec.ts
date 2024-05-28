import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasMarcasComponent } from './nuevas-marcas.component';

describe('NuevasMarcasComponent', () => {
  let component: NuevasMarcasComponent;
  let fixture: ComponentFixture<NuevasMarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevasMarcasComponent]
    });
    fixture = TestBed.createComponent(NuevasMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
