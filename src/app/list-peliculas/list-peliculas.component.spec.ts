import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ListPeliculasComponent } from './list-peliculas.component';

describe('ListPeliculasComponent', () => {
  let component: ListPeliculasComponent;
  let fixture: ComponentFixture<ListPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ListPeliculasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
