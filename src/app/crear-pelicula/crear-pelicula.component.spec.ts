import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CrearPeliculaComponent } from './crear-pelicula.component';

describe('CrearPeliculaComponent', () => {
  let component: CrearPeliculaComponent;
  let fixture: ComponentFixture<CrearPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [CrearPeliculaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
