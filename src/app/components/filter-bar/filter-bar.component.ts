import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Genre} from '../../models/Genre';
import {ApiService} from '../../services/api.service';
import {Platform} from '../../models/Platform';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  genresList: Genre[];
  platformList: Platform[];
  filterForm = new FormGroup({
    genres: new FormControl(''),
    platforms: new FormControl(''),
    sort: new FormControl(''),
  });

  params = {
    platform: '',
    sort: '',
    genre: ''
  };

  @Output() filterEvent: EventEmitter<{
    platform: string,
    sort: string,
    genre: string
  }> = new EventEmitter<{
    platform: string,
    sort: string,
    genre: string
  }>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getGenres().subscribe(genres => this.genresList = genres);
    this.apiService.getPlatforms().subscribe(platforms => this.platformList = platforms);
    console.log(this.genresList);
  }

  addFilter(): void {
    this.params = {
      platform: '',
      sort: '',
      genre: ''
    };
    if (typeof this.filterForm.value.genres !== 'undefined' && this.filterForm.value.genres !== '') {
      this.params.genre = this.filterForm.value.genres;
    }
    if (typeof this.filterForm.value.sort !== 'undefined' && this.filterForm.value.sort !== '') {
      this.params.sort = this.filterForm.value.sort;
    }
    if (typeof this.filterForm.value.platforms !== 'undefined' && this.filterForm.value.platforms !== '') {
      this.params.platform = this.filterForm.value.platforms;
    }
    console.log(this.params);
    this.sendFilter();
  }

  sendFilter(): void {
    this.filterEvent.emit(this.params);
  }
}
