import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliculaComponent } from './editar-pelicula.component';

describe('EditarPeliculaComponent', () => {
  let component: EditarPeliculaComponent;
  let fixture: ComponentFixture<EditarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
