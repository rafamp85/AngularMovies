import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let movieService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListComponent ],
      providers: [MoviesService],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
