import {Pipe, PipeTransform} from '@angular/core';
import {Game} from '../../models/Game';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Game[], searchText: string, params: {
    platform: string,
    sort: string,
    genre: string
  }): any[] {
    console.log(params);
    if (!items) {
      return [];
    }
    if (!searchText && !params.genre && !params.platform  && !params.sort) {
      return items;
    }
    if (searchText) {
      searchText = searchText.toLocaleLowerCase();
      items = items.filter(it => {
        return it.name.toLocaleLowerCase().includes(searchText);
      });
    }
    if (params.genre) {
      items = items.filter(it => {
        return it.genres.includes(params.genre); });
    }
    if (params.platform) {
      items = items.filter(it => {
        return it.platforms.includes(params.platform); });
    }
    if (params.sort === 'name reverse') {
      items = items.sort((a, b) => b.name.localeCompare(a.name));
    } else if (params.sort === 'rating') {
      items = items.sort((a, b) => a.rating - b.rating);
    } else if (params.sort === 'rating reverse') {
      items = items.sort((a, b) => b.rating - a.rating);
    }else {
      items = items.sort((a, b) => a.name.localeCompare(b.name));
    }
    return items;
  }
}
