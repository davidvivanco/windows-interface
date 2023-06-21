import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() checked: boolean;
  @Input() text: string;

  constructor() {
    this.checked = false;
    this.text = 'false';
  }
}
