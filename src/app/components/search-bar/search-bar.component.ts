import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText = '';
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  hideIcon = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.searchEvent.emit(this.searchText);
  }

  clear(): void {
    this.searchText = '';
    this.sendMessage();
  }

  hideChecker(): void {
    this.hideIcon = this.searchText === '';
  }
}
