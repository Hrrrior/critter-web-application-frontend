import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})

export class FormInputComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() control: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

  capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
