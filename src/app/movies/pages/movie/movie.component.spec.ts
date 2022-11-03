import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { MovieComponent } from './movie.component';
import { MoviesService } from '../../services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let movieService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      providers: [MoviesService],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click on back button and return', fakeAsync( () => {
    fixture.detectChanges();
    spyOn( component, 'onBackToMain' );

    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();

    expect(component.onBackToMain).toHaveBeenCalled();
  }));
});
