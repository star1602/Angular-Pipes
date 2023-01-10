import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerEjercicioComponent } from './tercer-ejercicio.component';

describe('TercerEjercicioComponent', () => {
  let component: TercerEjercicioComponent;
  let fixture: ComponentFixture<TercerEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerEjercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercerEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
