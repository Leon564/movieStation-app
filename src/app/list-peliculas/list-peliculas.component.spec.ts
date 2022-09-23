import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeliculasComponent } from './list-peliculas.component';

describe('ListPeliculasComponent', () => {
  let component: ListPeliculasComponent;
  let fixture: ComponentFixture<ListPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
