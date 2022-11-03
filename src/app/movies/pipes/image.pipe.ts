import { Pipe, PipeTransform } from '@angular/core';
import { IMoviesData } from '../interfaces/movies.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( movie: IMoviesData ): string {
    return movie.poster!;
  }

}
